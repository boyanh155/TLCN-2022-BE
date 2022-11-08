const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const slugify = require('slugify')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const ErrorResponse = require('../../utils/ErrorResponse')

// Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
      require: [true, 'Please add a email'],
      unique: true,
    },
    password: {
      type: String,
      require: [true, 'Please add password'],
      //   select: false,
      minlength: 3,
      select: false,
    },
    addresses: [
      {
        idDefault: {
          type: Boolean,
          default: false,
        },
        address: {
          type: String,
          require: true,
        },
      },
    ],
    phone: String,
    name: String,
    fullName: String,
    firstName: String,
    lastName: String,
    gender: String,
    provider: {
      type: String,
      default: 'TGDD',
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    // role
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

    emailCodeToken: String,
    emailCodeExpires: Date,
    enable: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createAt: {
      type: Date,
      default: Date.now,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Slugify
UserSchema.pre('save', function (next) {
  let fullNameRaw = this.firstName
    ? `${this.firstName} ${this.lastName}`
    : this.name
  this.fullName = slugify(fullNameRaw, {
    replacement: '-',
    trim: true,
    lower: true,
  })

  next()
})

// generate access token
UserSchema.methods.getJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    }
  )
}
// Encrypting password before saving user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  this.password = await bcrypt.hash(this.password, 10)
})

// Compare user password
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
// Generate code to verify email
UserSchema.methods.verifyEmailToken = function () {
  // Generate token
  const verifyToken = crypto.randomBytes(20).toString('hex')

  // Hash and set to resetPasswordToken
  this.emailCodeToken = crypto
    .createHash('sha256')
    .update(verifyToken)
    .digest('hex')
  //expires
  this.emailCodeExpires = Date.now() + 60 * 1000 * 30

  return verifyToken
}

// exports
let User = mongoose.model('users', UserSchema)
module.exports = User
module.exports.schema = UserSchema

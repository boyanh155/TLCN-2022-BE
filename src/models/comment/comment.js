const mongoose = require('mongoose')
const replySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
    required: true,
  },
})
const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    replies: [replySchema],
  },
  {
    timestamps: true,
  }
)
const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment

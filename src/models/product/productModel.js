
<<<<<<< HEAD
=======

const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
const reviewSchema = mongoose.Schema(
  {
    user: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
  },
  {
    timestamps: true,
  }
);
const colorSchema = mongoose.Schema({
  color: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  images: [],
});
const imageSchema = mongoose.Schema({
  urlImage: {
    type: String,
    required: true,
    default: "",
  },
});
const optionSchema = mongoose.Schema({
  productOptionName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  promotion: {
    type: Number,
    required: true,
    default: 0,
  },
  colors: [colorSchema],
});
const detailSchema = mongoose.Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
=======
}, {
    timestamps: true,
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
});
const colorSchema = mongoose.Schema({
    color: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    images: [],
});
const imageSchema = mongoose.Schema({
    urlImage: {
        type: String,
        required: true,
        default: "",
    },
});
const optionSchema = mongoose.Schema({
    productOptionName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    promotion: {
        type: Number,
        required: true,
        default: 0,
    },
    colors: [colorSchema],
});
const detailSchema = mongoose.Schema({
    name: {
        type: String,
    },
    value: {
        type: String,
    },
});
const productSchema = mongoose.Schema({
    user: {
<<<<<<< HEAD
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    manufacturer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Manufacturer",
=======
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    },
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Manufacturer",
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    // video: {
    //   type: String,
    //   required: true,
    // },
    productOptions: [optionSchema],
    description: {
        type: String,
        required: true,
    },
    subCategory: {
<<<<<<< HEAD
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Subcategory",
=======
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Subcategory",
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    detailSpecs: [detailSchema],
}, {
    timestamps: true,

<<<<<<< HEAD
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
=======
  }

)
productSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deleteAt: true,
})


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
>>>>>>> 6337568794d7834696c2540cde94aa8e7fda51d6

const mongoose = require("mongoose");
const Product = require("../product/productModel");

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: String,
    award: String,
    color: String,
    banner: {
      url: String,
      public_id: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    expireIn: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// Plugin

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;

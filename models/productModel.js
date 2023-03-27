const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    require: true
  },
  rating: {
    count: {
      type: Number,
    },
    rate: {
      type: Number,
    },
  },
});
module.exports = mongoose.model('productInfo',productSchema);

const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "These are validations"]
  },
  SKU: {

  },
  type: {
    
  },
  price: {

  },
  style: {

  },
  size: {

  },
  frameColorTypeStyle: {

  },
}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
const mongoose = require('mongoose');


const KeyboardSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "These are validations"]
  },
  SKU: {
      type: String,
      required: [true, "Product must have SKU"],
  },
  type: {
      type: String,
      required: [true, "Product must have Type"],
      
  },
  price: {
      type: Number,
      required: [true, "product must have Price"],
  },
  paymentOptions: {
      type: String,
  },
  style: {
      type: String,
  },
  size: {
      type: String,
  },
  frameColorTypeStyle: {
      type: String,
  },
}, {timestamps:true})

const Keyboard = mongoose.model("Keyboard", KeyboardSchema);

module.exports = Keyboard;
const mongoose = require('mongoose');


const DeskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Desk needs a name"]
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
    required: [true, "Product must have Price"],
  },
  alwaysIncluded: {
    type: String,
    required: [true, "These items are always shipped with Desks"]
  },
  paymentOptions: {
    type: String,
  },
  style: {
    type: String,
  },
  size: {
    type: String
  },
  frameColorTypeStyle: {
    type: String,
  },
  keypad: {
    type: String,
  },
  
}, {timestamps:true})

const Desk = mongoose.model("Desk", DeskSchema);

module.exports = Desk;
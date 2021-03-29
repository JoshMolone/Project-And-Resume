const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    desk: {
      type: String,
    },
    addOnProducts: {
      type: String,
    },
    freeGift1: {
      type: String,
    },
    freeGift2: {
      type: String,
    },
    freeGift3: {
      type: String,
    },
    freeGift4: {
      type: String,
    },

    // Add more Products below

  keyboard: {
    type: String,
  },

}, {timestamps:true})

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
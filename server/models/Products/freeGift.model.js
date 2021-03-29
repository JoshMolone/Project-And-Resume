const mongoose = require('mongoose');


const FreeGiftSchema = new mongoose.Schema({
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
  paymentOptions: {

  },
  style: {

  },
  size: {

  },
  frameColorTypeStyle: {

  },
}, {timestamps:true})

const FreeGift = mongoose.model("FreeGift", FreeGiftSchema);

module.exports = FreeGift;
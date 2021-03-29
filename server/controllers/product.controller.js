const Product = require('../models/order.model','../models/chairs.model','../models/desk.model','../models/freeGift.model','../models/keyboard.model');
// const Product = require();
// const Product = require();
// const Product = require();
// const Product = require();

module.exports ={
  index: (req,res) => {
    Product.find()
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  create: (req,res) => {
    Product.create(req.body)
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  show: (req,res) => {
    Product.find({_id:req.params.id})
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  update: (req,res) => {
    Product.updateMany({_id:req.params.id},req.body,{runValidators:true})
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  updateOne: (req,res) => {
    Product.updateOne({_id:req.params.id},req.body,{runValidators:true})
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  },
  destroy: (req,res) => {
    Product.deleteOne({_id:req.params.id})
    //the redirect lets our backend send this to the index, saving the front end an extra quiery to get a new set of items in the index after the delete.
      .then(data => res.json({results:data}))
      .catch(err => res.status(404).json({errors:err.errors}))
  }
}
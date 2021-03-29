const ProductController = require('../controllers/product.controller');
// const UserController = require('...controllers/user.controller')

module.exports = (app) => {
  //here the 'Product' should be plural!!
  app.get('/api/products', ProductController.index);
  app.post('/api/products', ProductController.create);
  app.get('/api/products/:id', ProductController.show);
  app.put('/api/products/:id', ProductController.update);
  app.patch('/api/products/:id', ProductController.updateOne);
  app.delete('/api/products/:id', ProductController.destroy);
  
  // app.post('/api/login', UserController.login)
}
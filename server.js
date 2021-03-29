require('dotenv').config();

const express = require('express');
const basicAuth = require('express-basic-auth');
  app = express(),
  port = process.env.PORT || 5000,
  cors = require('cors'),
  server = app.listen(port,() => console.log(`Listening on port ${port}`));

  app.use(cors(), express.json(), express.urlencoded({extended:true}))
  app.use(basicAuth({
    users: { 
      'admin': 'supersecet',
      'jonathon': 'password1234',
      'eve': 'asdfghjkl'
    }
  }))

//Below: basic express server, but I do not think we will need it:
  // app.use(express.static(path.join(__dirname, '/client/build')))
  // app.listen(PORT, () => console.log(`Listening on ${PORT}`));

  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '/client/build/index.html'));
  // });


  require('./server/config/database.config');
  require('./server/routes/product.routes')(app);

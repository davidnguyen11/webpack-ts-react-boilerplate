const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
app.use(express.static('dist'));

router.get('/', function(req, res) {
  res.sendFile('dist/index.html', { root: __dirname });
});

//add the router
app.use('/', router);
app.listen(9090);

console.log('Running at Port 9090');

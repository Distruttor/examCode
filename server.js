const express = require('express');

const app = express();
const port = process.env.PORT || 2000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    
  });


app.listen(port);
console.log("Server listening on port " + port);
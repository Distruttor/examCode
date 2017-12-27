const express = require('express');
const body = require('body-parser');

const app = express();
const port = process.env.PORT || 2000;

// parse application/json 
app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    
});

app.post('/', function(req, res) {
    
});

app.delete('/', function(req, res) {
    
});

app.put('/', function(req, res) {
    
});

app.listen(port);
console.log("Server listening on port " + port);
"use strict"

var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000

// Folder for static files and images
app.use(express.static('public'));

app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, ()=>console.log(`Running on ${port}`));

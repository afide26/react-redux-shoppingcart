"use strict"

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000

// Folder for static files and images
app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, ()=>console.log(`Running on ${port}`));

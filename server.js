const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express ();

//bodyparser

app.use(bodyParser.json());

const db = require ('./config/keys').mongoURI;
const { MongoClient } = require("mongodb");

//const uri = 'mongodb+srv://localhost:27017';  // mongodb://localhost - will fail


mongoose
  .connect(db) 
  .then(() => console.log('MongoDB connected ....'))
  .catch(err => console.log(err));
  
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
  const port = process.env.PORT ||27017;

  app.listen(port, () => console.log('Server started  on port ${port}'));


const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const app = express ();

//bodyparser

app.use(bodyParser.json());

const db = require ('./config/keys').mongoURI;
//const  MongoClient  = require('mongodb').MongoClient;

const MongoClient = require('mongodb').MongoClient;

const items = require ('./routes/api/items');
//const uri = 'mongodb+srv://yasir:100100Yy@cluster0-gdzcq.mongodb.net/test';  // mongodb://localhost - will fail

const port = process.env.PORT || 27017;
mongoose
  .connect(db) 
  .then(() => console.log('MongoDB connected ....'))
  .catch(err => console.log(err));
  
  //mongoose.connect('mongodb://localhost:27017/mDB/names', { useNewUrlParser: true });
  //const port = process.env.PORT || 27017;
app.use('/api/items', items);
app.listen(port, () => console.log('Server started on port ' + port));
  


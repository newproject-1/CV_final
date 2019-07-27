const express = require('express');
const router = express.Router();
const Item = require ('../../models/Item');
//const User = require ('username');


router.get('/', (req,res) =>{
  Item.find()
      .then(items => res.json(items));


});

router.post('/' , (req, res) => {
    const newItem= new Item({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          edcuation: req.body.edcuation,
          city: req.body.city,
          email: req.body.email,
          phonenumber: req.body.phonenumber
    });
newItem.save()
        .then(item => res.json(item))
        .catch(err => { res.status(400).send("unable to save to database"); })} );
  

 
     
     
//#route delete api/items
 //@desc delete a item
 //@ccess Punlic 
//router.delete('/' , (req, res) => {
  //   Item.findById(rep.params.id)
    //     .then(item => item.remove().then (() => res.json({success: true})))
      //   .catch(err => res.status(404).json({success: false}))};   
     
module.exports = router;

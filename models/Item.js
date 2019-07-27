const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const ItemSchema= new Schema ({

    firstname: {
    type: String,
    required: true    

    },
    lastname:{
        type: String,
        required: true    
    
        },
    city:{
            type: String,
            required: true    
        
            },
    education:{
                type: String,
                required: true    
            
                },
    email: {
            type: String,  
            required: true
    },
    phonenumber: {
            type: Number,
            required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }                   
});


module.exports= Item = mongoose.model('item', ItemSchema);
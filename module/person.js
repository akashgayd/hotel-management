const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    works:{
        type:String,
    enum:['ceaf','manager','waiter'],
    required:true
    },
    mobaile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }

})

const Person = mongoose.model('Person',personSchema);

module.exports=Person;
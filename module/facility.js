const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({

    name:{
        type:"String",
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Location:{
        type:String,
        required:true
    }

});
const facility = mongoose.model('facility',facilitySchema);

module.exports = facility;
const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        typre:String,
        enum:['sweet','spicy','sour']
    },
    is_drink:{
        type:Boolean,
        required:false
    },
    ingredients:{
        type:[String],
        required:false
    },
    num_salse:{
        type:Number,
        default:0,
    }

})

const MenuItm = mongoose.model('MenuItm',menuItemsSchema);
module.exports = MenuItm;
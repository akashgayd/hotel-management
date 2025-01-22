const express = require('express');
const router = express.Router();

const MenuItm = require('../module/menu');

router.post('/', async (req,res)=>{

    try{
        const data = req.body;
        const newMenuItm = new MenuItm(data);
        const response = await newMenuItm.save();
        console.log("saved the menu itm");
        res.status(200).json(response);
    }
catch(err){
    console.log(err);
    res.status(500).json(err);

}

})

router.get('/', async(req,res)=>{
    try{
        const response = await MenuItm.find();
        console.log("get the menu itm");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
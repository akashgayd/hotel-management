

const express = require('express');
const router =express.Router();

const facility = require('../module/facility');



router.post('/', async(req,res)=>{

    try{
        const data =req.body;
        const newFacility = new facility(data);
        const response = await newFacility.save();

        console.log("saved the facility book the room");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
       
    }
})

router.get('/',async(req,res)=>{


    try{
    const data = await facility.find();
    console.log("get the facilyty get all data");

    res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
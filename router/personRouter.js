const express = require('express');
const router = express.Router();
const Person = require('../module/person'); // Ensure the Person model is imported

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("saved data");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get('/', async (req, res) => {

    try{

        const response = await Person.find();
        console.log("get data");
        res.status(200).json(response);


    }catch(err){

        console.log(err);
        res.status(500).json(err);

    }


})
router.get('/:workType', async (req, res) => {
    try {
        const worktype = req.params.workType;
        if (worktype === 'chef' || worktype === 'waiter' || worktype === 'manager') {
            const response = await Person.find({ work: worktype });
            console.log("get data");
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Invalid work type" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
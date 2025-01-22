const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json


 const db = require('./db');



// db is a database object that has been created elsewhere in the codebase. It is being imported here and used in the code below.


app.get('/',(req,res)=>{
    res.send('welcome to life hotel which this is the best hotel in this area so what you eat a food today')
})


const menuItmRouter = require('./router/menuItmRouter');

app.use('/menu',menuItmRouter);



const personRouter = require('./router/personRouter');
app.use('/person',personRouter);

const PORT = process.env.PORT || 6000;


 const facilityRouter = require('./router/facilityRouter');
 app.use('/room',facilityRouter);

app.listen(PORT,()=>{

    console.log("order complat successfully",PORT);
})
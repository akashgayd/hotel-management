const mongoose = require('mongoose');

const mongoURl = 'mongodb+srv://akashgaydhane781:se6vAimVi44J7xX4@cluster0.4tgnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongo db server');
})

db.on('errror',(err)=>{
    console.log('error is connrcting to the mongo db',err);
})

db.on('disconnected',()=>{
    console.log('disconnected from mongo db server');
}
);

module.exports = db;
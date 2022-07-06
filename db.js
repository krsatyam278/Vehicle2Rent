const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://krsatyam:Satyam123@cluster0.yaw3f.mongodb.net/car2drive' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
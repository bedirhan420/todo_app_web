const mongoose = require("mongoose")

const connectionString = "mongodb+srv://bedirhan:V9S1vv0hVVQcCYxK@cluster0.eyqieaz.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url)=>{
    return mongoose
    .connect(url)
    .then(()=>console.log("connected to the db "))
    .catch((err)=>console.log(err))
}

module.exports = connectDB

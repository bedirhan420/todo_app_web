const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxlength:[20,"name cant be more than 20 characters"]
    },
    complated:{
        type:Boolean,
        default:false
    }
})



module.exports = mongoose.model("Task",TaskSchema)
const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minLength:5,
        maxLength:50,
        trim:true

    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    order: {
        type: Array,
        default: []
    },
    contact: Number,
    photo:String,
})
                        //modelName
module.exports=mongoose.model("user",userSchema);
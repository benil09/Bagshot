const mongoose = require("mongoose");



const ownerSchema = mongoose.Schema({
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

    products: {
        type: Array,
        default: []
    },
    contact: Number,
    photo:String,
    gstin:String
})
                        //modelName
module.exports=mongoose.model("owner",ownerSchema);
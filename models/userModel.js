const mongoose = require("mongoose");
 
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:Number
    },
    gender:{
        type:String
    },
    city:{
        type:String
    }
});

module.exports = mongoose.model('userInfo', userSchema);
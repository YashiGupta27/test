const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String
    },
    password:{
        type:String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userName: {
        type: String,
    }, 
    otp:{
        type:String
        
    },
    otpExpire:{
        type: Date,
        default: Date.now,
        expires: 3600
    }, 
    isBlock:{
        type:Boolean,
    },
    userType:{
        type:String,
        enum:["user","admin"]
    },
    isDeleted:{
        type:Boolean
    },
    token:{
        type:String
    },
    tokenExpire:{
        type:String
    },
    
},
    { timestamps: true }
);

const UserModle = mongoose.model('user', userSchema);

module.exports= UserModle
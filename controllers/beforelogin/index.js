const UserModle=require("../../modals/UserModal")
const { updateOne } = require("../../modals/UserModal");

function optGenerate(){
    var otp = Math.random();
    otp = otp*1000000;
    
    otp = parseInt(otp);

    return otp
}
//Query 
const login=async (req,res)=>{
    try{
        let data=req.body
        let responce =await UserModle.findOne({email:data.email})
        if(!responce){
            return res.json({status:400,error:"user not registered",isLogin:false})
        }
        if(responce.password!=data.password){
            return res.json({status:400,error:"password incorrect",isLogin:false})
        }
            return res.json({status:400,message:responce})
    }catch(err){
        return res.json({status:400,message:"Something went wrong",error:err})
    }
   
}



//Mutations

const registration=async(req,res)=>{
    try{
        
        const data=req.body
    const getUserDetails=await UserModle.findOne({email:data.email})
    if(getUserDetails){
        return  res.json({status:400,error:"Email Already Registered ",isRegistration:false})
    }
    let responce=await UserModle.create(data)
    if(!responce){
        return  res.json({status:400,error:"Something wrong Registration failed",isRegistration:false})
    }else{
        return  res.json({status:200,message:"Registration successfull",isRegistration:true})
    }
    }catch(err){
        console.log(err)
        res.json({status:400,message:"Something went wrong",error:err})

    }

}
//SendOtp
const sendOtp = async(req,res)=>{
    try{
     let data=req.body
     let responce =await UserModle.findOne({email:data.email})
     if(!responce){
         return res.json({status:200,error:"user doesn't exist with this email",isSendOtp:false})
     }   let getOtp=optGenerate()
         // const saveOtpStatus=await UserModle.create({otp:getOtp})
 
         const saveOtpStatus=await UserModle.updateOne({email:data.email},{$set:{otp:getOtp}})
 
         if(saveOtpStatus){
             return res.json({status:200,error:"Please check your email",isSendOtp:true})
         }
        
    
 }catch(err){
        return  res.json({status:400,message:"Something went wrong",error:err})
    }
 }
 //Matchotp
 const checkOtp = async(req,res)=>{
     try{
         let data=req.body
         let responce =await UserModle.findOne({email:data.email})
         if(!responce){
             return res.json({status:400,error:"email not exist",isOtpMachted:false})
         }if(responce.otp!=data.otp){
             return res.json({status:400,error:"otp incorrect",isOtpMachted:false})
         }
         return res.json({status:200,message:"otp  matched",isOtpMachted:true})
     }catch{
       return res.json({status:400,message:"Something went wrong",error:err})
    }
 }
 //resendotp
 const resendOtp = async(req,res)=>{
     try{
         let data=req.body
         let responce =await UserModle.findOne({email:data.email})
         if(!responce){
             return res.json({status:200,error:"user doesn't exist with this email",isResendOtp:false})
         }   let getOtp=optGenerate()
     
             const saveOtpStatus=await UserModle.updateOne({email:data.email},{$set:{otp:getOtp}})
     
             if(saveOtpStatus){
                 return res.json({status:200,error:"Please check your email",isResendOtp:true})
             }
            
        
     }catch(err){
             return res.json({status:400,message:"Something went wrong",error:err})
         }
 }
 
 
 

module.exports={login ,registration,sendOtp,checkOtp,resendOtp}



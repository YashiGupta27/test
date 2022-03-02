const { createCipheriv } = require("crypto")
const { default: mongoose } = require("mongoose")
const articles =require("../../modals/ArticlesModal")
const CategoryModal = require("../../modals/CategoryModal")
const categoriesModal = require("../../modals/CategoryModal")
const TagsModal = require("../../modals/TagsModal")

//title
 const createArtical = async(req,res)=>{
        try{
                 data=req.body
                 data.tagsId=mongoose.Types.ObjectId(data.tagsId)
                 data.categoryId=mongoose.Types.ObjectId(data.categoryId)
                 let responce=await articles.create(data)
                 if(!responce){
                        return res.json({status:400,data:responce,message:"Artical Not saved", isArticalSaved:false})
                 }
                 return res.json({status:200,data:responce,message:"artical saved successfully" ,isArticalSaved:true})
        }catch(err){
                console.log(err)
                return res.json({status:400,data:err,message:"Artical Not saved",isArticalSaved:false})
        }
}   

//category

const addCategory = async(req,res)=>{
        try{
                data=req.body 
                console.log(data)
                let responce=await categoriesModal.create(data)
                if(!responce){
                        return res.json({status:400,data:responce,message:"category Not saved",isAddCategory:false})   
                }
                return res.json({status:200,data:responce,message:"category saved successfully",isAddCategory:true})
        }catch(err){
                console.log(err) 
                return res.json({status:400,data:err,message:"category Not saved",isAddCategory:false})  
        }
}
const addTags = async(req,res)=>{
        try{
                data = req.body
                console.log(data)
                let responce = await TagsModal.create(data)
                if(!responce){
                        return res.json({status:400,data:responce,message:"Tags not save",isAddTags:false})
                }
                return res.json({status:200,data:responce,message:"Tags are saved",isAddTags:true})
        }catch(err){
                console.log(err)
                return res.json({status:400,data:err,message:"Tags Not Saved",isAddTags:false})
        }
} 
const getCategory = async(req,res)=>{
       try{
        data =  req.body
        let responce =await CategoryModal.find({})
        console.log(responce)
        if(!responce){
                return res.json({status:400,error:"Data not found",isGetCategory:false})
        }
        return res.json({status:200,data:responce,isGetCategory:true})
       }catch(err){
               console.log(err)
               return res.json({status:400,message:"You don't get Data",isGetCategory:false})

       }


}
const getTags = async(req,res)=>{
        try{
                data =  req.body
                let responce = await TagsModal.find({}) 
                console.log(responce)
                if(!responce){
                        return res.json({status:400,error:"Data not found",isGetTags:false})
                }
                return res.json({status:200,data:responce,isGetTags:true})
        }catch(err){
                console.log(err)
        }
}

      

module.exports={createArtical,addCategory,addTags,getCategory,getTags}
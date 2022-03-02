const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const categorySchema =  new Schema({
    categoryName:{
        type:String,
    },
    categoryImage:{
        type:String,
        required:true
    }
},
    { timestamps: true }
)

const CategoryModal = mongoose.model('Categories', categorySchema);

module.exports = CategoryModal

const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    text:{
        type:String,
        required: true,
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        //ref: "cleints",
    },
    tagsId:{
        type: Schema.Types.ObjectId,
        required: true,
    // ref: "cleints",
    },
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        
    },
    image:{
        type:String,
       
    },
    User_id:{
        type:String
    },
    isDeleted:{
        type:Boolean
    },
    isBlocked:{
        type:Boolean
    }
},
    { timestamps: true }
)
const articles = mongoose.model('Articles', ArticleSchema);

module.exports= articles



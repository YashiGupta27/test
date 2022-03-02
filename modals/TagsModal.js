const mongoose = require('mongoose');
;
const Schema =  mongoose.Schema;
const tagsSchema = new Schema({
    tagsName:{
        type:String,
    },

},
    { timestamps: true }
)
const TagsModal = mongoose.model('tags',tagsSchema);
module.exports =  TagsModal
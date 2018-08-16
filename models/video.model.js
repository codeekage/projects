const mongoose = require('mongoose');
const {Schema} = mongoose;

const VideoSchema = new Schema({
    name: {
        type : String,
    },
    link: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type : String
    }
});


const VideoModel = mongoose.model('video', VideoSchema);
module.exports = VideoModel;

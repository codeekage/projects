const mongoose = require('mongoose');
const {Schema} = mongoose;

const VideoSchema = new Schema({
    name: {
        type : String,
        required: [true, "Name cannot be null"]
    },
    link: {
        type: String,
        required: [true, "Link cannot be null"]

    },
    description: {
        type: String,
        required: [true, "Description cannot be null"]

    },
    category: {
        type : String,
        required: [true, "Category cannot be null"]
    },
    status : {
        type : Number,
        required: [true, "status cannot be null"],
        default: 0
    },
    video_id : {
        type : String,
        required: [true, "video_id is required"],
        unique: true 
    }
});


const VideoModel = mongoose.model('video', VideoSchema);
module.exports = VideoModel;

import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

mongooseAggregatePaginate(schema)
const videoSchema = new mongoose.Schema({
    videoFile:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    ispublished:{
        type: Boolean,
        default: false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
   
},{timestamps : true});  

const video = mongoose.model("video",videoSchema);
export default video;

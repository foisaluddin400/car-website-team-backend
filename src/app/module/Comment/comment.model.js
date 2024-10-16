import { model, Schema } from "mongoose";

const commentSchema = new Schema ({

    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    comment : {
        type : String,
        required: true
    },
    website : {
        type : String,
      
    }
},{
    timestamps:true
})

const Comment = model("Comment",commentSchema)

export default Comment
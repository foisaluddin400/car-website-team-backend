import { model, Schema } from "mongoose";


const bookrentelSchema = new Schema({

    name:{
        type:String,
        required : true
    },
    number:{
        type:Number,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    pickupLocation:{
        type:String,
        required : true
    },
    dropoffLocation:{
        type:String,
        required : true
    },
    upDate:{
        type:Date,
        required : true
    },
    dropDate:{
        type:Date,
        required : true
    },
    text:{
        type:String,
        required : true
    },

},{
    timestamps:true

})

const BookRentel = model("BookRentel",bookrentelSchema);

export default BookRentel;
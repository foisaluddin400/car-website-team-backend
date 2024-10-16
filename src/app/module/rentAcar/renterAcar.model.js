import { model, Schema } from "mongoose";


const rentAcarSchema = new Schema({

    name:{
        type:String,
        required : true
    },
    number:{
        type:Number,
        required : true
    },
    pickupLocation:{
        type:String,
        required : true
    },
    date:{
        type:Date,
        required : true
    },

},{
    timestamps:true

})

const RentAcar = model("RentAcar",rentAcarSchema);

export default RentAcar;
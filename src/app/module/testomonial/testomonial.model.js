import { model, Schema } from "mongoose";


const testomonialSchema = new Schema({

    name : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    }



},{
    timestamps:true
})


const Testominal = model("Testomonial",testomonialSchema);

export default Testominal;
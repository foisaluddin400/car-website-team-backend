import { model, Schema } from "mongoose";


const driverSchema = new Schema ({

    name:{
        type : String,
        required:true
    },
    position:{
        type : String,
        required:true
    },
    number:{
        type : Number,
        required:true
    },
    email:{
        type : String,
        required:true
    },
    personal_details:{
        type : String,
        required:true
    },
    experience:{
        type : String,
        required:true
    },
    speciality:{
        type : String,
        required:true
    },
    img:{
        type : String,
       
    }

},{
    timestamps:true
})


const Drivers = model("Driver",driverSchema);

export default Drivers;

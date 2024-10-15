import { model, Schema } from "mongoose";

const serviceSchema = new Schema({

 
  description :{
    type:String,
    required:true
  },
  serviceName:{
    type:String,
    required : true
  },
  rating:{
    type: Number,
    required : true,

  },

  img :{
    type:String,
    required : true
  }

  






},{
    timestamps:true
})

const Service = model ("service", serviceSchema)

export default Service
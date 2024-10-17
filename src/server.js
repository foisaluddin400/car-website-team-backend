import mongoose from "mongoose";
import { app } from "./app.js";

//HM5ZYrGZmY9rXWhO
//car-rental-service
// ekhane server rekheci
let server;
const port = 3000

const main = async()=>{
  try {
    await mongoose.connect("mongodb+srv://car-rental-service:HM5ZYrGZmY9rXWhO@cluster0.xlk7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
    console.log("connected")
    server = app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
    
  } catch (error) {
    console.log(error)
  }
}


main()
import mongoose from "mongoose"
import { User } from "@/models/users";

export const connectDb = async () =>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "work_mannager"
        });
        console.log("conecting>>>");




        //testing created database
        // const user = new User({
        //     name: "testingname",
        //     email: "testing@gmail.com",
        //     password: "testingpassword",
        // })



        // await user.save();
        console.log("saving user")
        // console.log(connection);
    }catch(error){
        console.log("fail to connect with database");
        console.log(error)

    }
}
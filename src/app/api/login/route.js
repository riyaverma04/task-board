import { User } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken";

export async function POST(request){
    const {email,password}= await request.json();
    try {

        //getting the registered email;
        const user = await User.findOne({
            email: email,
        })
        if(user === null){
           throw new Error("user not found!!!")
        }


        //comparing the password with the registered email,
        const matched = bcrypt.compareSync(password,user.password);
        

        if(!matched){
            throw new Error("Password didn't match!!!")
        }


        //3. generating token
        const token= Jwt.sign({
            _id: user._id,
            name: user.name
            
        },process.env.JWT_KEY)
        

        const response = NextResponse.json({
            message:"Login successful",
            user: user
             
        })
        response.cookies.set("authToken",token,{
           expiresIn: "1d",
            httpOnly:true
           
        })

        console.log(token)



        return response;
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error.message,
            success: false
        },{
        status:500} )
        
    }

}
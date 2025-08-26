import { User } from "@/models/users";
import { NextResponse } from "next/server";


//get single user
export async function GET(request,{params}){
    const {userid}= params;
    try {
        const user = await User.findById(userid).select("-password");
        return NextResponse.json(user)
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to find ",
            success: false,
        })
    }

}

//deleting user
export async function  DELETE(request,{params}){

    const {userid} = params;
    

    try {
        await User.deleteOne({
            _id: userid,
        });
        return NextResponse.json({
            "message": "document deleted ",
            success: true
        })  ;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to delete the document",
            status: 404
        });
    }
    
}





export async function PUT(request,{params}){
    const {userid }= params;
    const {name, password}= await request.json();
    try {
       const user = await User.findById(userid);
       user.name = name;
       user.password = password;

       const updatedUser = await user.save();

       return NextResponse.json(updatedUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message":"fail to update user",
            status: 404
        })
        
    }

}
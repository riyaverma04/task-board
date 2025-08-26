import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import  Jwt  from "jsonwebtoken";

import { NextResponse } from "next/server";
connectDb()

export async function GET(request){
    let works = [];
    
    try {
        works = await Work.find();
            
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to get work",
            success: false
        });
    }

    return NextResponse.json(works);

}
export async function POST(request){
   try {
    const { title,content,date, status, userid}= await request.json();
    //fetching id 
    const authToken = request.cookies.get("authToken")?.value;
    const data = Jwt.verify(authToken,process.env.JWT_KEY);

    console.log({ title,content,userid});
    const work = new Work({ 
        title,
        content,
        
        status,
        date,
        userid:data._id,
    })
    await work.save();
    return NextResponse.json(work,{
        "message": "succesfully added",
        status: 201
    })
   } catch (error) {
    console.log(error);
    return NextResponse.json({
        "message":"fail to add work",
        status: 500
    })
   }

}
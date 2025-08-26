import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userid}= params;
    try {

        const work = await Work.find({
            userid: userid,
        })

        return NextResponse.json(work);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to get taks via using userid",
            success: false
        })
        
    }

}
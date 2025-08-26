import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {workid}= params;
    try {
        const work = await Work.findById(workid);
        return NextResponse.json(work);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to get work",
            success: false
        })
        
    }

}
export async function PUT(request,{params}){
    const {workid}= params;
    const { title,content,date,status}= await request.json();
    try {
        const work = await Work.findById(workid);
        
            work.title = title;
            work.content= content;
           
            work.date = date;
         
            work.status = status;


            const updatedWork = await work.save();

        return NextResponse.json(updatedWork);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to update",
            success: false
        })
        
    }

}
export async function DELETE(request,{params}){
    const {workid}= params;
    try {
       
        await Work.deleteOne({
            _id: workid
        })
        return NextResponse.json({
            "message": "deleted",
            success: true
        })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to delete",
            success: false
        })
    }

}
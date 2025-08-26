import { connectDb } from "@/helper/db"
import { User } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connectDb();
export async function GET(request){
    let users = [];
    try {
        users = await User.find().select("-password");
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to get users",
            success: false,
        })
    }
return NextResponse.json(users)

}
export  async function POST(request){
// const body = request.body;
// console.log(body);
// console.log(request.cookies);
// console.log(request.headers)
// console.log(request.method);
// const  data = await request.json()
// console.log(request.nextUrl.pathname)
// console.log(request.chache)
// console.log(request.nextUrl.searchParams)
// console.log(data)
// return NextResponse.json({
//     "message": "this is post ",
// })



    try {
        const {name, email, password}= await request.json();
        console.log({name, email, password})
        const user = new User({
            name, 
            email,
            password
        });
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
     
        await user.save();
    
        const resp =  NextResponse.json(user,{
            status: 201,
        })
    
        return resp;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            "message": "fail to connect",
            status: false
        },{
            status: 500,
        })
    }

  

}
export  function DELETE(request){
    console.log("api deleted successfully")
    return NextResponse.json({
        message: "deleted",
        status:'true',
    },{status: 201, statusText : "hey I have changed the text"})

}

export  function PUT(){

}

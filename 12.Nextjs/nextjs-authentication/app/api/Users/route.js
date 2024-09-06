import User from "@/app/(models)/User";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt"

export async function POST(req){
    try{
        const body = await req.json()
        const userData = body.formData
        if (!userData?.email || !userData?.password){
            return NextResponse.json({ message: "All fields are required!"}, {status: 400})
        }
        const duplicate = await User.findOne({email:userData.email}).lean().exec();
        if (duplicate){
            return  NextResponse.json({
                message:"Duplicate Email"
            }, {status: 409})
        }
        const hashPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashPassword
        await User.create(userData)
    }catch (error){
        console.log(error)
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}
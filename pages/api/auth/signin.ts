import User from "../../../models/User";
import { verifyPassword } from "../../../utils/auth";
import {sign} from "jsonwebtoken";
import connectDB from "../../../utils/connectDB";
import { serialize } from "cookie";

async function handler(req:any,res:any) {
    
    if(req.method !== "POST") return;

    try {
        await connectDB()
} catch (err) {
    console.log(err);
    return res.status(500)
    .json({status:"faild",message:"Error in connecting to DB"});
}

const {email,password} = req.body;
const expiration = 24*60*60;
const secretKey ="11aef441754bd57d72ed859e815fb36c58edb7e7442932a04a43fe34b413d942";

if(!email || !password) return res.status(422).json({status:"faild", message:"Invalid Data"});


const user = await User.findOne({email});

if(!user) return res.status(404).json({status:"faild", message:"User dosen't exist"});

const isValid = await verifyPassword(password,user.password);

if(!isValid) return res.status(422).json({status:"faild", message:"Username or password is incorrect"});

const token = sign({email},secretKey,{expiresIn:expiration})
console.log(token)

const serialized = serialize("crispyland",token,{

    httpOnly:true,
    maxAge:expiration,
    path:"/",

});

res.status(200)
.setHeader("Set-Cookie",serialized)
.json({status:"success", message: "Logged in", data: user.email})

}

export default handler ;
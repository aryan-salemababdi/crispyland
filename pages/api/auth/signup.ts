
import User from '../../../models/User';
import { hashPassword } from '../../../utils/auth';
import connectDB from './../../../utils/connectDB';

async function handller(req:any,res:any):Promise<void> {

    if (req.method !== "POST") return;

    try {
            await connectDB()
    } catch (err) {
        console.log(err);
        return res.status(500)
        .json({status:"faild",message:"Error in connecting to DB"});
    }

    const {name,lastName,email,password} = req.body;

    if(!email || !password) return res.status(422).json({status:"faild", message:"Invalid Data"});

     const existingUser = await User.findOne({email:email});

     if(existingUser) return res.status(422).json({status:"faild", message: "User exist already"});

     const hashedPassword = await hashPassword(password);

     const newUser = await User.create({email,password:hashedPassword,name,lastName});

     console.log(newUser);
     
     res.status(201).json({status:"success", message: "User Created"});

    }


export default handller;
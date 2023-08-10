import { Schema, model,models } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        require:true,
    },
    lastName: {
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    password: {
        type: String,
        require: true,
    },
    createdAt:{
        type: Date,
        default: ()=>  Date.now(),
        immutable: true,  
    }
});

const User = models.User || model("User", userSchema);


export default User;
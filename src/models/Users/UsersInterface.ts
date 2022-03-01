import mongoose, { Mongoose, Schema } from "mongoose"
interface IUser{
    name:string ,
    email:string ,
    createdAt:string , 
    password:string,
    id:number 
  
}
const schema = mongoose.Schema
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50

    },
    password:{
        type:String,
        required:false,
        minlength:3,
        maxlength:300

    }, 
    email :{
        type:String,
        required:false,
        minlength:3,
        maxlength:300

    }, 
    createdAt :{
        type:String,
        required:false,
        minlength:3,
        maxlength:300

    }, 
    id:{
        type:Number,
        required:true
        
    }
})
const User:mongoose.Model<IUser> = mongoose.model("users",userSchema)
export default User
import mongoose, { Mongoose, Schema } from "mongoose"
interface IShoe{
    name:string ,
    description:string,
    image:string[],
  
    user:string 
  
}
const schema = mongoose.Schema
const postSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50

    },
    descripton:{
        type:String,
        required:false,
        minlength:3,
        maxlength:300

    },
    image:{
        type:String,

    },

    user:{
        type:String ,
        required:false,
        minlength:0,
        maxlength:70

    }
})
const Posts:mongoose.Model<IShoe> = mongoose.model("Posts",postSchema)
export default Posts
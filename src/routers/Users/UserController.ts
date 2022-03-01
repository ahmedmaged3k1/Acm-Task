import Express  from 'express';
import User from '../../models/Users/UsersInterface';



export async  function getUsers (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        const users = await User.find()
        response.json(users)
    }
    catch(e){
        next(e)
    }
    
}
export async  function getUserById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.id 
        const users = await User.find({"id": +id })
        response.json(users)
    }
    catch(e){
        next(e)
    }
    
}
export async  function changeUserById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.id 
        const user = request.body
        const newUser =  new User(user)
        
        const users = await User.findOneAndUpdate({"id": +id },newUser)
        response.json(users)
    }
    catch(e){
        next(e)
    }
    
}
export async  function deleteUserById (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        var id = request.params.id 
         const result = await User.deleteOne({"id": +id })
    
       if(result.deletedCount ==1 ){
           console.log("Deleted Successly ")
           response.json("Deleted Successly ")
       }
       else{
        console.log("Erorr Not Deleted  ")
        response.json("Erorr Not Deleted ")

       }
    }
    catch(e){
        next(e)
    }
    
}
export async function  addUser(request : Express.Request ,response: Express.Response, next: Express.NextFunction) {
    try{
        const user = request.body
        const newUser =  new User(user)
        const result = await newUser.save();
        response.json(result)
        console.log(newUser)
    }
    catch(e){
        next(e)
    }
}
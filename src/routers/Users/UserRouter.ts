import express from "express";
import {getUsers , addUser,getUserById,deleteUserById,changeUserById} from './UserController'

const router = express.Router()
//router.get("/:movieId",MovieController.getMovie)
router.get("/",getUsers)
router.post("/",addUser)
router.get("/getById/:id",getUserById)
router.patch("/getById/:id",changeUserById)

router.delete("/deleteById/:id",deleteUserById)
export default router 

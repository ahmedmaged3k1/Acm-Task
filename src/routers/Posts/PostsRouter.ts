import express from "express";
import {getPosts , addPost,getPostrById,deletePostrById,changePostById,getPostUserById} from './PostsController'

const router = express.Router()
//router.get("/:movieId",MovieController.getMovie)
router.get("/",getPosts)
router.post("/",addPost)
router.get("/getById/:id",getPostrById)
router.patch("/getById/:id",changePostById)
router.get("/getUserById/:userId",getPostUserById)
router.delete("/deleteById/:id",deletePostrById)
export default router 

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostsController_1 = require("./PostsController");
const router = express_1.default.Router();
//router.get("/:movieId",MovieController.getMovie)
router.get("/", PostsController_1.getPosts);
router.post("/", PostsController_1.addPost);
router.get("/getById/:id", PostsController_1.getPostrById);
router.patch("/getById/:id", PostsController_1.changePostById);
router.get("/getUserById/:userId", PostsController_1.getPostUserById);
router.delete("/deleteById/:id", PostsController_1.deletePostrById);
exports.default = router;

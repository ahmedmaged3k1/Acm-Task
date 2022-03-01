"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./UserController");
const router = express_1.default.Router();
//router.get("/:movieId",MovieController.getMovie)
router.get("/", UserController_1.getUsers);
router.post("/", UserController_1.addUser);
router.get("/getById/:id", UserController_1.getUserById);
router.patch("/getById/:id", UserController_1.changeUserById);
router.delete("/deleteById/:id", UserController_1.deleteUserById);
exports.default = router;

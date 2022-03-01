"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.deleteUserById = exports.changeUserById = exports.getUserById = exports.getUsers = void 0;
const UsersInterface_1 = __importDefault(require("../../models/Users/UsersInterface"));
function getUsers(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UsersInterface_1.default.find();
            response.json(users);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getUsers = getUsers;
function getUserById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.id;
            const users = yield UsersInterface_1.default.find({ "id": +id });
            response.json(users);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getUserById = getUserById;
function changeUserById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.id;
            const user = request.body;
            const newUser = new UsersInterface_1.default(user);
            const users = yield UsersInterface_1.default.findOneAndUpdate({ "id": +id }, { "name": newUser.name }, { upsert: true });
            response.json(newUser);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.changeUserById = changeUserById;
function deleteUserById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.id;
            const result = yield UsersInterface_1.default.deleteOne({ "id": +id });
            if (result.deletedCount == 1) {
                console.log("Deleted Successly ");
                response.json("Deleted Successly ");
            }
            else {
                console.log("Erorr Not Deleted  ");
                response.json("Erorr Not Deleted ");
            }
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteUserById = deleteUserById;
function addUser(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = request.body;
            const newUser = new UsersInterface_1.default(user);
            const result = yield newUser.save();
            response.json(result);
            console.log(newUser);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.addUser = addUser;

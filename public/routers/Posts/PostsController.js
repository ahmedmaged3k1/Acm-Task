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
exports.addPost = exports.getPosts = exports.deletePostrById = exports.changePostById = exports.getPostUserById = exports.getPostrById = void 0;
const PostInterface_1 = __importDefault(require("../../models/Posts/PostInterface"));
function getPostrById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.id;
            const posts = yield PostInterface_1.default.find({ "postId": +id });
            response.json(posts);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getPostrById = getPostrById;
function getPostUserById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.userId;
            const posts = yield PostInterface_1.default.find({ "userId": +id });
            response.json(posts);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getPostUserById = getPostUserById;
function changePostById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.postId;
            const post = request.body;
            const newPost = new PostInterface_1.default(post);
            const posts = yield PostInterface_1.default.findOneAndUpdate({ "id": +id }, { "name": newPost.name }, { upsert: true });
            response.json(posts);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.changePostById = changePostById;
function deletePostrById(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var id = request.params.id;
            const result = yield PostInterface_1.default.deleteOne({ "id": +id });
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
exports.deletePostrById = deletePostrById;
function getPosts(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shoes = yield PostInterface_1.default.find();
            response.json(shoes);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getPosts = getPosts;
function addPost(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shoes = request.body;
            const newShoe = new PostInterface_1.default(shoes);
            const result = yield newShoe.save();
            response.json(result);
            console.log(newShoe);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.addPost = addPost;

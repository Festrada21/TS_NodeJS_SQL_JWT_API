"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const auth_controllers_1 = require("../controllers/auth_controllers");
const authrouter = (0, express_1.Router)();
authrouter.post('/singup', auth_controllers_1.singUp);
authrouter.post('/singin', auth_controllers_1.singIn);
authrouter.get('/profile', validateToken_1.default, auth_controllers_1.profile);
exports.default = authrouter;
//# sourceMappingURL=auth_routes.js.map
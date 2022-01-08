"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth_controllers");
const authrouter = (0, express_1.Router)();
authrouter.post('/singup', auth_controllers_1.singUp);
authrouter.post('/singin', auth_controllers_1.singIn);
exports.default = authrouter;
//# sourceMappingURL=auth_routes.js.map
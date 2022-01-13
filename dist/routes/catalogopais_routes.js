"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const catalogopais_controllers_1 = require("../controllers/catalogopais_controllers");
const routercp = (0, express_1.Router)();
routercp.get('/', validateToken_1.default, catalogopais_controllers_1.GETCPS);
routercp.get('/:id', validateToken_1.default, catalogopais_controllers_1.GETCP);
routercp.post('/', validateToken_1.default, catalogopais_controllers_1.POSTCP);
routercp.put('/:id', validateToken_1.default, catalogopais_controllers_1.PUTCP);
routercp.put('/h/:id', validateToken_1.default, catalogopais_controllers_1.PUTCPH);
routercp.put('/d/:id', validateToken_1.default, catalogopais_controllers_1.PUTCPD);
exports.default = routercp;
//# sourceMappingURL=catalogopais_routes.js.map
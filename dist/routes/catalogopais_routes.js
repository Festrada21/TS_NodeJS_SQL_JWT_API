"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catalogopais_controllers_1 = require("../controllers/catalogopais_controllers");
const router = (0, express_1.Router)();
router.get('/', catalogopais_controllers_1.GETCPS);
router.get('/:id', catalogopais_controllers_1.GETCP);
router.post('/', catalogopais_controllers_1.POSTCP);
router.put('/:id', catalogopais_controllers_1.PUTCP);
router.delete('/:id', catalogopais_controllers_1.DELETECP);
exports.default = router;
//# sourceMappingURL=catalogopais_routes.js.map
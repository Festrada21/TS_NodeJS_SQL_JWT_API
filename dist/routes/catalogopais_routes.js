"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catalogopais_controllers_1 = require("../controllers/catalogopais_controllers");
const router = (0, express_1.Router)();
router.get('/', catalogopais_controllers_1.getCatalogopaises);
router.get('/:id', catalogopais_controllers_1.getCatalogopais);
router.post('/', catalogopais_controllers_1.postCatalogopais);
router.put('/:id', catalogopais_controllers_1.putCatalogopais);
router.delete('/:id', catalogopais_controllers_1.deleteCatalogopais);
exports.default = router;
//# sourceMappingURL=catalogopais_routes.js.map
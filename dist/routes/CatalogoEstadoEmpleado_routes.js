"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CatalogoEstadoEmpleado_controllers_1 = require("../controllers/CatalogoEstadoEmpleado_controllers");
const router = (0, express_1.Router)();
router.get("/", CatalogoEstadoEmpleado_controllers_1.getCatalogoEstadoEmpleados);
router.get("/:id", CatalogoEstadoEmpleado_controllers_1.getCatalogoEstadoEmpleado);
router.post("/", CatalogoEstadoEmpleado_controllers_1.postCatalogoEstadoEmpleado);
router.put("/:id", CatalogoEstadoEmpleado_controllers_1.putCatalogoEstadoEmpleado);
router.delete("/:id", CatalogoEstadoEmpleado_controllers_1.deleteCatalogoEstadoEmpleado);
exports.default = router;
//# sourceMappingURL=CatalogoEstadoEmpleado_routes.js.map
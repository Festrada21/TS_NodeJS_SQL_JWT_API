import { Router } from "express";
import {
  deleteCatalogoEstadoEmpleado,
  getCatalogoEstadoEmpleado,
  getCatalogoEstadoEmpleados,
  postCatalogoEstadoEmpleado,
  putCatalogoEstadoEmpleado,
} from "../controllers/CatalogoEstadoEmpleado_controllers";

const router = Router();

router.get("/", getCatalogoEstadoEmpleados);
router.get("/:id", getCatalogoEstadoEmpleado);
router.post("/", postCatalogoEstadoEmpleado);
router.put("/:id", putCatalogoEstadoEmpleado);
router.delete("/:id", deleteCatalogoEstadoEmpleado);

export default router;

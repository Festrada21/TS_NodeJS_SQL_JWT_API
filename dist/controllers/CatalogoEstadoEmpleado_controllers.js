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
exports.deleteCatalogoEstadoEmpleado = exports.putCatalogoEstadoEmpleado = exports.postCatalogoEstadoEmpleado = exports.getCatalogoEstadoEmpleado = exports.getCatalogoEstadoEmpleados = void 0;
const catalogoestadoempleado_1 = __importDefault(require("../models/catalogoestadoempleado"));
//TODO: crear los controladores
const getCatalogoEstadoEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cee = yield catalogoestadoempleado_1.default.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = yield catalogoestadoempleado_1.default.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = yield catalogoestadoempleado_1.default.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ cee, habilitados, deshabilitados });
});
exports.getCatalogoEstadoEmpleados = getCatalogoEstadoEmpleados;
const getCatalogoEstadoEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cee = yield catalogoestadoempleado_1.default.findByPk(id);
    if (cee) {
        res.json(cee);
    }
    else {
        return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
    }
});
exports.getCatalogoEstadoEmpleado = getCatalogoEstadoEmpleado;
const postCatalogoEstadoEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield catalogoestadoempleado_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El Estado Empleado ya existe llamado ${body.Nombre}` });
        }
        const cee = yield catalogoestadoempleado_1.default.create(body);
        yield cee.save();
        res.status(201).json(cee);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.postCatalogoEstadoEmpleado = postCatalogoEstadoEmpleado;
const putCatalogoEstadoEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cee = yield catalogoestadoempleado_1.default.findByPk(id);
        if (!cee) {
            return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
        }
        yield cee.update(body);
        res.json(cee).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.putCatalogoEstadoEmpleado = putCatalogoEstadoEmpleado;
//TODO: eliminacion fisica de un registro
const deleteCatalogoEstadoEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cee = yield catalogoestadoempleado_1.default.findByPk(id);
    if (!cee) {
        return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
    }
    yield cee.update({ Habilitado: false });
    //TODO: eliminar el registro fisico
    //await cee.destroy();
    res.json(cee);
});
exports.deleteCatalogoEstadoEmpleado = deleteCatalogoEstadoEmpleado;
//# sourceMappingURL=CatalogoEstadoEmpleado_controllers.js.map
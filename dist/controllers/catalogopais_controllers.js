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
exports.deleteCatalogopais = exports.putCatalogopais = exports.postCatalogopais = exports.getCatalogopais = exports.getCatalogopaises = void 0;
const catalogopais_1 = __importDefault(require("../models/catalogopais"));
//TODO: crear los controladores
const getCatalogopaises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pais = yield catalogopais_1.default.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = yield catalogopais_1.default.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = yield catalogopais_1.default.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ pais, habilitados, deshabilitados });
});
exports.getCatalogopaises = getCatalogopaises;
const getCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pais = yield catalogopais_1.default.findByPk(id);
    if (pais) {
        res.json(pais);
    }
    else {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
});
exports.getCatalogopais = getCatalogopais;
const postCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield catalogopais_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El pais ya existe llamado ${body.Nombre}` });
        }
        const pais = yield catalogopais_1.default.create(body);
        yield pais.save();
        res.status(201).json(pais);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.postCatalogopais = postCatalogopais;
const putCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pais = yield catalogopais_1.default.findByPk(id);
        if (!pais) {
            return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
        }
        yield pais.update(body);
        res.json(pais).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.putCatalogopais = putCatalogopais;
//TODO: eliminacion fisica de un registro
const deleteCatalogopais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pais = yield catalogopais_1.default.findByPk(id);
    if (!pais) {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
    yield pais.update({ Habilitado: false });
    //TODO: eliminar el registro fisico
    //await pais.destroy();
    res.json(pais);
});
exports.deleteCatalogopais = deleteCatalogopais;
//# sourceMappingURL=catalogopais_controllers.js.map
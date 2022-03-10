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
//TODO: se crea la carpeta contenedora de los archivos de la base de datos
//TODO: se crea la clase del servidor y se debe de crear el constructor
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Auth_1 = __importDefault(require("../routes/Auth"));
const CatalogoPais_1 = __importDefault(require("../routes/CatalogoPais"));
const CatalogoEstadoEmpleado_1 = __importDefault(require("../routes/CatalogoEstadoEmpleado"));
const CatalogoGeneroEmpleado_1 = __importDefault(require("../routes/CatalogoGeneroEmpleado"));
const CatalogoIdentificacionEmpleado_1 = __importDefault(require("../routes/CatalogoIdentificacionEmpleado"));
const CatalogoRutas_1 = __importDefault(require("../routes/CatalogoRutas"));
const connection_1 = __importDefault(require("./connection"));
const Empleados_1 = __importDefault(require("../routes/Empleados"));
class Server {
    constructor() {
        //TODO configuracion del endpoint del api
        this.apiPaths = {
            catalogopais: "/api/cp",
            CatalogoEstadoEmpleado: "/api/CEE",
            CatalogoGeneroEmpleado: "/api/CGE",
            CatalogoIdentificacionEmpleado: "/api/CIE",
            CatalogoRutas: "/api/rutas",
            Empleados: "/api/EMP",
            auth: "/api/auth",
        };
        this.app = (0, express_1.default)();
        //TODO || es el operador or
        this.port = process.env.PORT || "3000";
        this.dbConnection();
        //TODO: metodos iniciales
        this.middlewares();
        //TODO: definir mis rutas
        this.routes();
    }
    //TODO: coneccion a la base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Connection has been established successfully.");
            }
            catch (error) {
                throw new Error("Unable to connect to the database:");
                //console.log(error);
            }
        });
    }
    //TODO crear Middlewares , que se ejecutan antes de otros procedimientos para el parceo del body, lectura
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //lectura de body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.catalogopais, CatalogoPais_1.default);
        this.app.use(this.apiPaths.CatalogoEstadoEmpleado, CatalogoEstadoEmpleado_1.default);
        this.app.use(this.apiPaths.CatalogoGeneroEmpleado, CatalogoGeneroEmpleado_1.default);
        this.app.use(this.apiPaths.CatalogoIdentificacionEmpleado, CatalogoIdentificacionEmpleado_1.default);
        this.app.use(this.apiPaths.CatalogoRutas, CatalogoRutas_1.default);
        this.app.use(this.apiPaths.Empleados, Empleados_1.default);
        this.app.use(this.apiPaths.auth, Auth_1.default);
    }
    //TODO: metodo para escuchar el puerto
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server on port", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map
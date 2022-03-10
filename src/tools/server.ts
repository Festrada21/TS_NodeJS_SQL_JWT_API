//TODO: se crea la carpeta contenedora de los archivos de la base de datos
//TODO: se crea la clase del servidor y se debe de crear el constructor
import express, { Application } from "express";
import cors from "cors";
import authrouter from "../routes/Auth";
import routercp from "../routes/CatalogoPais";
import routercee from "../routes/CatalogoEstadoEmpleado";
import routercge from '../routes/CatalogoGeneroEmpleado'
import routercie from '../routes/CatalogoIdentificacionEmpleado'
import routerrutas from '../routes/CatalogoRutas'
import db from "./connection";
import routerEMP from "../routes/Empleados";



class Server {
private app: Application;
private port: string;
  //TODO configuracion del endpoint del api
private apiPaths = {
    catalogopais: "/api/cp",
    CatalogoEstadoEmpleado: "/api/CEE",
    CatalogoGeneroEmpleado: "/api/CGE",
    CatalogoIdentificacionEmpleado: "/api/CIE",
    CatalogoRutas: "/api/rutas",
    Empleados: "/api/EMP",
    auth: "/api/auth",
};

constructor() {
    this.app = express();
    //TODO || es el operador or
    this.port = process.env.PORT || "3000";

    this.dbConnection();
    //TODO: metodos iniciales
    this.middlewares();
    //TODO: definir mis rutas
    this.routes();
}

//TODO: coneccion a la base de datos
async dbConnection() {
    try {

        await db.authenticate();
        console.log("Connection has been established successfully.");

    } catch (error) {
throw new Error("Unable to connect to the database:");
//console.log(error);
    }
}

  //TODO crear Middlewares , que se ejecutan antes de otros procedimientos para el parceo del body, lectura

middlewares() {
    //cors
    this.app.use(cors());

    //lectura de body
    this.app.use(express.json());

    //carpeta publica
    this.app.use(express.static("public"));
}

routes() {
    this.app.use(this.apiPaths.catalogopais, routercp);
    this.app.use(this.apiPaths.CatalogoEstadoEmpleado, routercee);
    this.app.use(this.apiPaths.CatalogoGeneroEmpleado, routercge);
    this.app.use(this.apiPaths.CatalogoIdentificacionEmpleado, routercie);
    this.app.use(this.apiPaths.CatalogoRutas, routerrutas);
    this.app.use(this.apiPaths.Empleados, routerEMP);
    this.app.use(this.apiPaths.auth, authrouter);
}
  //TODO: metodo para escuchar el puerto
listen() {
    this.app.listen(this.port, () => {
console.log("Server on port", this.port);
    });
}
}

export default Server;
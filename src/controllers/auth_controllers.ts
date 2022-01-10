import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Usuario } from "../models/usuarios";

const key = "aa123456,./;'[][023678999751312+_+)&*^$*#~`";
const secretKey =  process.env.KEY_SECRET;

export const singUp = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existe = await Usuario.findOne({
        where: {
            usuario: body.usuario,
        },
        });
        if (existe) {
        return res
            .status(400)
            .json({ msg: `El usuario ${body.usuario} ya existe!.` });
        }
        const pkey = secretKey || key;
        const usuario = await Usuario.create({
            empleadoId: body.empleadoId,
            usuario: body.usuario,
            email: body.email,
            contraseña: body.contraseña,
            Habilitado: 1,
        });
        const token:string =jwt.sign({ usuario }, pkey, { expiresIn: "1h" });  
        await usuario.save();
        res.status(201).header('auth_token',token).json(usuario);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};


export const singIn = async (req: Request, res: Response) => {
    // Usuario.findOne({ where: { usuario: req.body.usuario } }).then(async function (Usuario) {
    //     if (!Usuario) {
    //         res.redirect('/login');
    //     } else if (!await Usuario.validatePassword(password)) {
    //         res.redirect('/login');
    //     } 
    // });
   Usuario.findOne({
        where: {
            usuario: req.body.usuario,
            habilitado: 1, 
        },
    }).then((Usuario:any) => {
        if (!Usuario) {
            return res.status(404).json({ msg: "Credenciales erroneas o usuario no habilitado" });
        }
        if (!Usuario.validPassword(req.body.contraseña)) {
            return res.status(401).json({ msg: "Contraseña incorrecta" });
        }
        const pkey = secretKey || key;
        const token:string =jwt.sign({ Usuario }, pkey, { expiresIn: "1h" });  
        res.status(200).header('auth_token',token).json(Usuario);
    });
    
  };
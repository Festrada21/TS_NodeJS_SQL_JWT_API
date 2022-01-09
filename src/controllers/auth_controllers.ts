import { Request, Response } from "express";
import Usuario from "../models/usuarios";
import jwt from "jsonwebtoken";
import { json } from "sequelize/dist";

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
        const pkey = process.env.PORT || "aa123456,./;'[][023678999751312+_+)&*^$*#~`";
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
    res.json({ msg: 'singIn' });
  };
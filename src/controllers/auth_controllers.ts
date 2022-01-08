
import { Request, Response } from "express";
import Usuario from "../models/usuarios";

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
        const usuario = await Usuario.create(body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};


export const singIn = async (req: Request, res: Response) => {
    res.json({ msg: 'singIn' });
  };
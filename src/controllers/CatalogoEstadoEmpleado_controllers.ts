import { Request, Response } from "express";
import CatalogoEstadoEmpleado from "../models/catalogoestadoempleado";



//TODO: crear los controladores
export const getCatalogoEstadoEmpleados = async (req: Request, res: Response) => {
  const cee = await CatalogoEstadoEmpleado.findAll({
    where: {
      Habilitado: true,
    },
  });
  const habilitados = await CatalogoEstadoEmpleado.count({
    where: {
      Habilitado: true,
    },
  });
  const deshabilitados = await CatalogoEstadoEmpleado.count({
    where: {
      Habilitado: false,
    },
  });
  res.json({ cee, habilitados, deshabilitados });
};

export const getCatalogoEstadoEmpleado = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cee = await CatalogoEstadoEmpleado.findByPk(id);
  if (cee) {
    res.json(cee);
  } else {
    return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
  }
};

export const postCatalogoEstadoEmpleado = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existe = await CatalogoEstadoEmpleado.findOne({
      where: {
        Nombre: body.Nombre,
      },
    });
    if (existe) {
      return res
        .status(400)
        .json({ msg: `El Estado Empleado ya existe llamado ${body.Nombre}` });
    }
    const cee = await CatalogoEstadoEmpleado.create(body);
    await cee.save();
    res.status(201).json(cee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al insertar" });
  }
};

export const putCatalogoEstadoEmpleado = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const cee = await CatalogoEstadoEmpleado.findByPk(id);
    if (!cee) {
      return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
    }
    await cee.update(body);
    res.json(cee).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al insertar" });
  }
};

//TODO: eliminacion fisica de un registro
export const deleteCatalogoEstadoEmpleado = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cee = await CatalogoEstadoEmpleado.findByPk(id);
  if (!cee) {
    return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
  }

  await cee.update({ Habilitado: false });
  //TODO: eliminar el registro fisico
  //await cee.destroy();

  res.json(cee);
};

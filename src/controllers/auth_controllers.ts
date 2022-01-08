
import { Request, Response } from "express";

export const singUp = async (req: Request, res: Response) => {
    res.json({ msg: 'singup' });
  };


export const singIn = async (req: Request, res: Response) => {
    res.json({ msg: 'singIn' });
  };
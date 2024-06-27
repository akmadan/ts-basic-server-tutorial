import { Request, Response } from "express";
import {
  additionRepo,
  divRepo,
  proRepo,
  subRepo,
} from "../repositories/calci.repo";

export const additionController = async (req: Request, res: Response) => {
  try {
    const { num1, num2 } = req.body;
    const maths = additionRepo(num1, num2);
    return res.status(200).json({
      data: maths,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const subtractionController = async (req: Request, res: Response) => {
  try {
    const { num1, num2 } = req.body;
    const maths = subRepo(num1, num2);
    return res.status(200).json({
      data: maths,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const productController = async (req: Request, res: Response) => {
  try {
    const { num1, num2 } = req.body;
    const maths = proRepo(num1, num2);
    return res.status(200).json({
      data: maths,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const divisionController = async (req: Request, res: Response) => {
  try {
    const { num1, num2 } = req.body;
    const maths = divRepo(num1, num2);
    return res.status(200).json({
      data: maths,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

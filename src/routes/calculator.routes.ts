import { Router } from "express";
import {
  additionController,
  divisionController,
  productController,
  subtractionController,
} from "../controllers/calci.controller";

const calciRouter = Router();

calciRouter.post("/add", additionController);

calciRouter.post("/sub", subtractionController);

calciRouter.post("/pro", productController);

calciRouter.post("/div", divisionController);

export default calciRouter;

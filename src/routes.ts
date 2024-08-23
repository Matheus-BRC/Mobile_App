import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryController";

const router = Router(); // inicia a rota

const createUserController = new CreateUserController(); // instancia o objeto createUserController
const createCategoryController = new CreateCategoryController();

router.post("/users", createUserController.handle); 
router.post("/category", createCategoryController.handle); 

export {router};
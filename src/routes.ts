import { Router } from "express";

import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserCrontroller";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";

import { CreateClientController } from "./controller/client/CreateClientController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";


const router = Router();                                    // inicia a rota

const createUserController = new CreateUserController();    // instancia o objeto createUserController da classe CreateUserController
const listUsersController = new ListUsersController();      // instancia o objeto listUsersController da classe ListUsersController
const updateUserController = new UpdateUserController();    // instancia o objeto updateUserController da classe UpdateUserController
const deleteUserController = new DeleteUserController();    // instancia o objeto deleteUserController da classe DeleteUserController

const createCategoryController = new CreateCategoryController();    // instancia o objeto createCategoryController da classe CreateCategoryController
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const createClientController = new CreateClientController();

const createProductController = new CreateProductController();

router.post("/users", createUserController.handle);             // cria a rota /users com metodo POST
router.get("/users", listUsersController.handle);               // cria a rota /users com metodo GET
router.put("/users/:id", updateUserController.handle);          // cria a rota /users/:id com metodo PUT
router.delete("/users/:id", deleteUserController.handle);       // cria a rota /users/:id com metodo DELETE

router.post("/category", createCategoryController.handle);      // cria a rota /category com metodo POST
router.get("/category", listCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle); 

router.post("/client", createClientController.handle);

router.post("/product", createProductController.handle);

export {router};                                                // exporta a rota
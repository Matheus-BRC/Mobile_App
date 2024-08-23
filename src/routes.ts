import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListUsersController } from "./controller/user/ListUserCrontroller";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/deleteUserController";

const router = Router();                                    // inicia a rota

const createUserController = new CreateUserController();    // instancia o objeto createUserController da classe CreateUserController
const listUsersController = new ListUsersController();      // instancia o objeto listUsersController da classe ListUsersController
const updateUserController = new UpdateUserController();    // instancia o objeto updateUserController da classe UpdateUserController
const deleteUserController = new DeleteUserController();    // instancia o objeto deleteUserController da classe DeleteUserController

const createCategoryController = new CreateCategoryController();    // instancia o objeto createCategoryController da classe CreateCategoryController

router.post("/users", createUserController.handle);             // cria a rota /users com metodo POST
router.get("/users", listUsersController.handle);               // cria a rota /users com metodo GET
router.put("/users/:id", updateUserController.handle);          // cria a rota /users/:id com metodo PUT
router.delete("/users/:id", deleteUserController.handle);       // cria a rota /users/:id com metodo DELETE

router.post("/category", createCategoryController.handle);      // cria a rota /category com metodo POST

export {router};                                                // exporta a rota
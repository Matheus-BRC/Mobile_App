import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListUsersController } from "./controller/user/ListUserCrontroller";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/deleteUserController";

const router = Router(); // inicia a rota

const createUserController = new CreateUserController(); // instancia o objeto createUserController
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createCategoryController = new CreateCategoryController();

router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

router.post("/category", createCategoryController.handle);

export {router};
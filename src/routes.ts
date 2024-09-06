import { Router } from "express";

import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserCrontroller";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";

import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";

import { CreateSaleController } from "./controller/sale/CreateSaleController";
import { ListSaleController } from "./controller/sale/ListSaleController";
import { UpdateSaleController } from "./controller/sale/UpdateSaleController";
import { DeleteSaleController } from "./controller/sale/DeleteSaleController";

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
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();

router.post("/users", createUserController.handle);             // cria a rota /users com metodo POST
router.get("/users", listUsersController.handle);               // cria a rota /users com metodo GET
router.put("/users/:id", updateUserController.handle);          // cria a rota /users/:id com metodo PUT
router.delete("/users/:id", deleteUserController.handle);       // cria a rota /users/:id com metodo DELETE

router.post("/category", createCategoryController.handle);      // cria a rota /category com metodo POST
router.get("/category", listCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle); 

router.post("/client", createClientController.handle);
router.get("/client", listClientController.handle);
router.put("/client/:id", updateClientController.handle);
router.delete("/client/:id", deleteClientController.handle);

router.post("/product", createProductController.handle);
router.get("/product", listProductController.handle);
router.put("/product/:id", updateProductController.handle);
router.delete("/product/:id", deleteProductController.handle);

router.post("/sale", createSaleController.handle);
router.get("/sale", listSaleController.handle);
router.put("/sale/:id", updateSaleController.handle);
router.delete("/sale/:id", deleteSaleController.handle);

export {router};                                                // exporta a rota
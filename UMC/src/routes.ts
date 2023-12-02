import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import {AuthenticateUserController} from "./controller/autentication/AutenticationController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductsController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategorysController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";

import { CreateStockController } from "./controller/stock/CreateStockController";
import { ListStocksController } from "./controller/stock/ListStockController";
import { UpdateStockController } from "./controller/stock/UpdateStockController";
import { DeleteStockController } from "./controller/stock/DeleteStockController";

import { CreateSupplierController } from "./controller/supplier/CreateSupplierController";
import { ListSuppliersController } from "./controller/supplier/ListSupplierController";
import { UpdateSupplierController } from "./controller/supplier/UpdateSupplierController";
import { DeleteSupplierController } from "./controller/supplier/DeleteSupplierController";

import { CreateOrderController } from "./controller/order/CreateOrderController";
import { ListOrdersController } from "./controller/order/ListOrderController";
import { UpdateOrderController } from "./controller/order/UpdateOrderController";
import { DeleteOrderController } from "./controller/order/DeleteOrderController";

import { CreateProfileController } from "./controller/profile/CreateProfileController";
import { ListProfilesController } from "./controller/profile/ListProfileController";
import { UpdateProfileController } from "./controller/profile/UpdateProfileController";
import { DeleteProfileController } from "./controller/profile/DeleteProfileController";

import { ensureAuthenticated} from "./middleware/ensureAutenticated";

const createUserController  = new CreateUserController();
const listUsersController= new ListUsersController();
const updateUserController=new UpdateUserController();
const deleteUserController=new DeleteUserController();
const autenticationUserController  = new AuthenticateUserController();

const createProductController  = new CreateProductController();
const listProductsController= new ListProductsController();
const updateProductController=new UpdateProductController();
const deleteProductController=new DeleteProductController();

const createCategoryController  = new CreateCategoryController();
const listCategorysController= new ListCategorysController();
const updateCategoryController=new UpdateCategoryController();
const deleteCategoryController=new DeleteCategoryController();

const createStockController  = new CreateStockController();
const listStocksController= new ListStocksController();
const updateStockController=new UpdateStockController();
const deleteStockController=new DeleteStockController();

const createSupplierController  = new CreateSupplierController();
const listSuppliersController= new ListSuppliersController();
const updateSupplierController=new UpdateSupplierController();
const deleteSupplierController=new DeleteSupplierController();

const createOrderController  = new CreateOrderController();
const listOrdersController= new ListOrdersController();
const updateOrderController=new UpdateOrderController();
const deleteOrderController=new DeleteOrderController();

const createProfileController  = new CreateProfileController();
const listProfilesController= new ListProfilesController();
const updateProfileController=new UpdateProfileController();
const deleteProfileController=new DeleteProfileController();

const router = Router();
router.post("/login", autenticationUserController.handle);
router.post("/reset", autenticationUserController.resetPassword);

router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.put ("/users", updateUserController.handle);
router.delete ("/users/:id", deleteUserController.handle);

router.post("/products", createProductController.handle);
router.get("/products", listProductsController.handle);
router.put ("/products", updateProductController.handle);
router.delete ("/products/:id", deleteProductController.handle);

router.post("/categorys", createCategoryController.handle);
router.get("/categorys", listCategorysController.handle);
router.put ("/categorys", updateCategoryController.handle);
router.delete ("/categorys/:id", deleteCategoryController.handle);

router.post("/stocks", createStockController.handle);
router.get("/stocks", listStocksController.handle);
router.put ("/stocks", updateStockController.handle);
router.delete ("/stocks/:id", deleteStockController.handle);

router.post("/suppliers", createSupplierController.handle);
router.get("/suppliers", listSuppliersController.handle);
router.put ("/suppliers", updateSupplierController.handle);
router.delete ("/suppliers/:id", deleteSupplierController.handle);

router.post("/orders", createOrderController.handle);
router.get("/orders", listOrdersController.handle);
router.put ("/orders", updateOrderController.handle);
router.delete ("/orders/:id", deleteOrderController.handle);

router.post("/profiles", createProfileController.handle);
router.get("/profiles", listProfilesController.handle);
router.put ("/profiles", updateProfileController.handle);
router.delete ("/profiles/:id", deleteProfileController.handle);

export {router}
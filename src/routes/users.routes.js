
const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();
 
usersRoutes.post("/", usersController.createUser);
usersRoutes.put("/", ensureAuthenticated ,usersController.update);
usersRoutes.get("/", ensureAuthenticated, usersController.index);

module.exports = usersRoutes;
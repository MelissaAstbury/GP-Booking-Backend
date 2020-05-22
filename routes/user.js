const express = require("express");
const router = express.Router();

// const auth = require("../middleware/verifyToken");
const UserController = require("../controllers/user");

router.get("", UserController.getAllUsers);

router.get("/:id", UserController.getUserByID);

router.post("/login", UserController.login);

router.post("/signup", UserController.signup);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUserById);

module.exports = router;

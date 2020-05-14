const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.get("", UserController.getAllUsers);

router.get("/:id", UserController.getUserByID);

router.post("", UserController.createUser);

router.patch("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUserById);

module.exports = router;

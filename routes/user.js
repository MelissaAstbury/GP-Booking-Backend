const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.get("", UserController.getAllUsers);

router.get("/:id", UserController.getUserByID);

router.post("", UserController.createUser);

module.exports = router;

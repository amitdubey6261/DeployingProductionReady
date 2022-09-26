const express = require("express");
const { getAllUsers, createUser } = require("../controllers/userControllers");
const router = express.Router();

router.route("/user/new").post(createUser);
router.route("/user").get(getAllUsers);

module.exports = router ; 
const express = require("express");
const {
  registerUser,
  getUser,
  deleteUser,
  updateUser,
  authUser,
} = require("../controllers/useControllers.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/auth", authUser);
router.get("/data", getUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

module.exports = router;

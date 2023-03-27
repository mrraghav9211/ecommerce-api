const express = require("express");
const productInfo = require("../models/productModel");
const {
  addProduct,
  getProduct,
  getElectronicsProduct,
  getJeweleryProduct,
  getMensClothingProduct,
  getWomensClothingProduct,
} = require("../controllers/productControllers");

const router = express.Router();
router.post("/add", addProduct);
router.get("/get", getProduct);
router.get("/electronics", getElectronicsProduct);
router.get("/jewelery", getJeweleryProduct);
router.get("/mensclothing", getMensClothingProduct);
router.get("/womensclothing", getWomensClothingProduct);

module.exports = router;

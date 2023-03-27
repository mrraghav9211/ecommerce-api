const productInfo = require("../models/productModel");

const addProduct = async (req, res) => {
  const { title, price, description, image, category } = req.body;
  try {
    const data = await productInfo.create({
      title,
      price,
      description,
      image,
      category,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(400);
    console.log(error.message);
  }
};

const getProduct = async (req, res) => {
  const data = await productInfo.find({});
  res.status(200).json(data);
};

const getElectronicsProduct = async (req, res) => {
  try {
    const data = await productInfo.find({ category: "electronics" });
    res.status(200).json(data);
  } catch (error) {
    res.status(400);
    console.log(err.message);
  }
};

const getJeweleryProduct = async (req, res) => {
  try {
    const data = await productInfo.find({ category: "jewelery" });
    res.status(200).json(data);
  } catch (error) {
    res.status(400);
    console.log(err.message);
  }
};

const getMensClothingProduct = async (req, res) => {
  try {
    const data = await productInfo.find({ category: "men's clothing" });
    res.status(200).json(data);
  } catch (error) {
    res.status(400);
    console.log(err.message);
  }
};
const getWomensClothingProduct = async (req, res) => {
  try {
    const data = await productInfo.find({ category: "women's clothing" });
    res.status(200).json(data);
  } catch (error) {
    res.status(400);
    console.log(err.message);
  }
};

module.exports = {
  addProduct,
  getProduct,
  getElectronicsProduct,
  getJeweleryProduct,
  getMensClothingProduct,
  getWomensClothingProduct,
};

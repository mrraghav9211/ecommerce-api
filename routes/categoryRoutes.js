const express = require("express");
const categoryInfo = require('../models/categoryModel');

const router = express.Router();
router.get('/', async(req, res)=>{
    try {
        res.status(200).json(await categoryInfo.find({}))
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;
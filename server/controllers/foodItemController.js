const asyncHandler = require('express-async-handler')
const FoodItem = require('../models/foodItem')
const Category = require('../models/category')
require('dotenv').config()

exports.index = asyncHandler(async (req, res, next) => {
    const [allFoodItems, allCategories] = await Promise.all([
        FoodItem.find().sort({name: 1}).populate('category').exec(),
        Category.find().sort({name: 1}).exec()
    ])

    res.json({
        allFoodItems,
        allCategories
    })
})
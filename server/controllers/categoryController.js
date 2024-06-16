const Category = require('../models/category');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const foodItem = require('../models/foodItem');

exports.find = asyncHandler(async (req, res, next) => {

})

exports.create_get = asyncHandler(async (req, res, next) => {
  res.json({ msg: 'here u go, get request done' });
});

exports.create_post = [
  body('name')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Name must not be empty')
    .isAlpha()
    .withMessage('Name must only contain letters')
    .escape(),
  body('description')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Description must not be empty')
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json({ errors: errors.array(), name: req.body.name });
      return
    }

    const newCategory = new Category({
      name: req.body.name,
      description: req.body.description
    })
    
    await newCategory.save()
    res.json({success: 'Item successfully created!'})

  }),
];

exports.delete_get = asyncHandler(async (req, res, next) => {
  res.json({msg: 'delete_get works'})
})

exports.delete_post = asyncHandler(async (req, res, next) => {
  const [allFoodItemsInCategory, categoryToDelete] = await Promise.all([
    foodItem.find({category: req.params.id}).exec(),
    Category.findById(req.params.id).exec(),
  ])

  if (!!allFoodItemsInCategory.length) {
    res.json({
      error: 'Delete related Food Items',
      foodItems: allFoodItemsInCategory
    })
    return
  }

  if (categoryToDelete) {
    await Category.findByIdAndDelete(req.params.id)
    res.json({success: 'Category successfully deleted.', item: categoryToDelete})
  } else {
    res.json({error: 'Category not found.'})
  }
})
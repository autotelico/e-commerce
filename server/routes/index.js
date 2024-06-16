var express = require('express');
var router = express.Router();
const foodItemController = require('../controllers/foodItemController')
const categoryController = require('../controllers/categoryController')

/* GET home page. */
router.get('/', foodItemController.index);
router.get('/category/search/:name', categoryController.find)

router.get('/category/add', categoryController.create_get);
router.post('/category/add', categoryController.create_post);
// update missing
router.post('/delete/category/:id', categoryController.delete_post);

module.exports = router;

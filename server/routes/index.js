var express = require('express');
var router = express.Router();
const foodItemController = require('../controllers/foodItemController')

/* GET home page. */
router.get('/', foodItemController.index);

module.exports = router;

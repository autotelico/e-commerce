const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodItemSchema = new Schema({
    name: {type: String, required: true, },
    description: {type: String},
    price: {type: Number, required: true},
    numberInStock: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'category', required: true,}
})

module.exports = mongoose.model('foodItem', FoodItemSchema)
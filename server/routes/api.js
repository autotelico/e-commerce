const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json([
        {
          name: "Wireless Bluetooth Headphones",
          description: "Noise-cancelling, over-ear Bluetooth headphones with a 20-hour battery life.",
          price: 89.99,
          numberInStock: 25,
          category: "Electronics"
        },
        {
          name: "Stainless Steel Water Bottle",
          description: "Insulated stainless steel water bottle, 1 liter capacity, keeps drinks cold for 24 hours.",
          price: 19.99,
          numberInStock: 50,
          category: "Home & Kitchen"
        },
        {
          name: "Organic Cotton T-Shirt",
          description: "Soft, organic cotton t-shirt available in multiple colors and sizes.",
          price: 24.99,
          numberInStock: 100,
          category: "Clothing"
        },
        {
          name: "Smart Home Speaker",
          description: "Voice-controlled smart speaker with integrated virtual assistant.",
          price: 49.99,
          numberInStock: 30,
          category: "Electronics"
        },
        {
          name: "Yoga Mat",
          description: "Non-slip yoga mat with carrying strap, perfect for all types of yoga.",
          price: 29.99,
          numberInStock: 40,
          category: "Sports & Outdoors"
        },
        {
          name: "Digital Alarm Clock",
          description: "LED digital alarm clock with multiple alarm settings and snooze function.",
          price: 14.99,
          numberInStock: 60,
          category: "Home & Kitchen"
        },
        {
          name: "Running Shoes",
          description: "Lightweight running shoes with breathable mesh upper and cushioned sole.",
          price: 79.99,
          numberInStock: 20,
          category: "Clothing"
        },
        {
          name: "Electric Toothbrush",
          description: "Rechargeable electric toothbrush with multiple brushing modes and a 2-minute timer.",
          price: 39.99,
          numberInStock: 35,
          category: "Health & Personal Care"
        },
        {
          name: "Gaming Mouse",
          description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
          price: 59.99,
          numberInStock: 45,
          category: "Electronics"
        },
        {
          name: "Backpack",
          description: "Durable and waterproof backpack with multiple compartments and padded straps.",
          price: 34.99,
          numberInStock: 80,
          category: "Accessories"
        }
      ] 
    )
})

module.exports = router
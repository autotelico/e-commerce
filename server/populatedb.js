const mongoose = require('mongoose');
const FoodItem = require('./models/foodItem');
const Category = require('./models/category');

const mongoURI = process.argv[2];

const categories = [];
const foodItems = [];

async function main() {
  console.log('Populating DB');
  await mongoose.connect(mongoURI);
  console.log('Logged into MongoDB');
  await populateCategories(categoryValues);
  await populateFoodItems(foodItemValues);
  console.log('PROGRAM FINISHED');
  mongoose.connection.close()
}

main().catch((err) => {
  throw new Error('Error on main: ', err);
});

async function createCategory(index, name, description) {
  const newCategory = new Category({
    name,
    description,
  });
  await newCategory.save();
  categories[index] = newCategory;
  console.log(`Category ${category.name} saved.`);
}

async function populateCategories(categoriesArray) {
  for (category of categoriesArray) {
    await createCategory(category.index, category.name, category.description);
  }
  console.log('Finished creating categories');
}

async function populateFoodItems(foodItemsArray) {
  for (foodItem of foodItemsArray) {
    await createFoodItem(
      foodItem.name,
      foodItem.description,
      foodItem.price,
      foodItem.numberInStock,
      foodItem.category
    );
  }
}

async function createFoodItem(
  name,
  description,
  price,
  numberInStock,
  categoryIndex
) {
  const newFoodItem = new FoodItem({
    name: name,
    description: description,
    price: price,
    numberInStock: numberInStock,
    category: categories[categoryIndex],
  });
  await newFoodItem.save();
  foodItems.push(newFoodItem);
  console.log(`Item ${newFoodItem.name} saved.`);
}

const foodItemValues = [
  {
    name: 'Organic Honey',
    description:
      'Pure, raw organic honey harvested from local beehives, 500g jar.',
    price: 12.99,
    numberInStock: 40,
    category: 0,
  },
  {
    name: 'Almond Butter',
    description:
      'Creamy almond butter made from roasted almonds, no added sugar, 300g.',
    price: 9.99,
    numberInStock: 30,
    category: 0,
  },
  {
    name: 'Quinoa',
    description: 'Organic white quinoa, high in protein and fiber, 1kg pack.',
    price: 14.99,
    numberInStock: 50,
    category: 0,
  },
  {
    name: 'Dark Chocolate',
    description: '70% cocoa dark chocolate, fair trade certified, 100g bar.',
    price: 3.49,
    numberInStock: 75,
    category: 0,
  },
  {
    name: 'Green Tea',
    description: 'Organic green tea bags, rich in antioxidants, 50-count box.',
    price: 8.99,
    numberInStock: 60,
    category: 0,
  },
  {
    name: 'Granola',
    description: 'Crunchy granola with mixed nuts and dried fruits, 500g bag.',
    price: 7.99,
    numberInStock: 45,
    category: 0,
  },
  {
    name: 'Olive Oil',
    description: 'Extra virgin olive oil, cold-pressed, 1 liter bottle.',
    price: 15.99,
    numberInStock: 25,
    category: 0,
  },
  {
    name: 'Almond Milk',
    description:
      'Unsweetened almond milk, enriched with vitamins, 1 liter carton.',
    price: 3.99,
    numberInStock: 80,
    category: 0,
  },
  {
    name: 'Chia Seeds',
    description: 'Organic chia seeds, high in omega-3 and fiber, 500g pack.',
    price: 6.99,
    numberInStock: 55,
    category: 0,
  },
  {
    name: 'Dried Mango Slices',
    description:
      'Sweet and chewy dried mango slices, no added sugar, 200g bag.',
    price: 5.99,
    numberInStock: 35,
    category: 0,
  },
];

const silverwareValues = [
  {
    name: 'Stainless Steel Silverware Set',
    description:
      '24-piece stainless steel silverware set, includes 6 knives, 6 forks, 6 tablespoons, and 6 teaspoons.',
    price: 29.99,
    numberInStock: 100,
    category: 1,
  },
  {
    name: 'Elegant Gold-Plated Cutlery Set',
    description:
      '16-piece gold-plated cutlery set, perfect for special occasions, includes 4 knives, 4 forks, 4 tablespoons, and 4 teaspoons.',
    price: 49.99,
    numberInStock: 50,
    category: 1,
  },
  {
    name: 'Modern Black Flatware Set',
    description:
      '20-piece matte black flatware set, includes 4 knives, 4 forks, 4 salad forks, 4 tablespoons, and 4 teaspoons.',
    price: 39.99,
    numberInStock: 75,
    category: 1,
  },
  {
    name: 'Vintage Copper Silverware Set',
    description:
      '20-piece vintage copper silverware set, includes 4 knives, 4 forks, 4 salad forks, 4 tablespoons, and 4 teaspoons.',
    price: 44.99,
    numberInStock: 60,
    category: 1,
  },
  {
    name: 'Child-Friendly Silverware Set',
    description:
      '12-piece child-friendly silverware set, includes 4 child-sized knives, 4 forks, and 4 spoons with easy-grip handles.',
    price: 19.99,
    numberInStock: 80,
    category: 1,
  },
];

const categoryValues = [
  {
    index: 0,
    name: 'Food',
    description:
      'A variety of organic and gourmet food items including snacks, beverages, and pantry essentials.',
  },
  {
    index: 1,
    name: 'Silverware',
    description:
      'High-quality silverware sets in various styles and materials, perfect for everyday use or special occasions.',
  },
];

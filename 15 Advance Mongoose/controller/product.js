const Model = require("../Models/product");
const dummyData = [
  {
    name: "Wireless Mouse",
    inStock: true,
    price: 599,
    category: "Electronics",
    tags: ["mouse", "wireless", "computer"],
  },
  {
    name: "Gaming Keyboard",
    inStock: false,
    price: 2499,
    category: "Electronics",
    tags: ["gaming", "keyboard", "rgb"],
  },
  {
    name: "Cotton T-Shirt",
    inStock: true,
    price: 399,
    category: "Apparel",
    tags: ["clothing", "cotton", "tshirt"],
  },
  {
    name: "Running Shoes",
    inStock: true,
    price: 1999,
    category: "Footwear",
    tags: ["sport", "running", "shoes"],
  },
  {
    name: "Stainless Steel Bottle",
    inStock: false,
    price: 299,
    category: "Home",
    tags: ["bottle", "water", "metal"],
  },
  {
    name: "Bluetooth Earbuds",
    inStock: true,
    price: 1499,
    category: "Electronics",
    tags: ["audio", "wireless", "earbuds"],
  },
  {
    name: "Office Chair",
    inStock: true,
    price: 5499,
    category: "Furniture",
    tags: ["chair", "office", "comfort"],
  },
  {
    name: "Notebook",
    inStock: true,
    price: 49,
    category: "Stationery",
    tags: ["paper", "notes", "study"],
  },
  {
    name: "Ball Pen Pack",
    inStock: true,
    price: 99,
    category: "Stationery",
    tags: ["pen", "writing", "ink"],
  },
  {
    name: "LED Bulb",
    inStock: false,
    price: 129,
    category: "Home",
    tags: ["light", "bulb", "led"],
  },
];

const insertData = async (req, res) => {
  try {
    await Model.insertMany(dummyData);
    res.status(201).json({
      success: true,
      message: "inserted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: error.message,
    });
  }
};

const getProductStats = async (req, res) => {
  try {
    const result = await Model.aggregate([
      { $match: { inStock: true, price: { $gte: 100 } } },
      {
        $group: {
          _id: "$category",
          averagePrice: {
            $avg: "$price",
          },
          sum: {
            $sum: "$price",
          },
          count: {
            $count: {},
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      response: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
    });
  }
};

const sortedData = async (req, res) => {
  try {
    const result = await Model.aggregate([
      {
        $group: {
          _id: "$category",
          maximumPrice: { $max: "$price" },
          minimumPrice: { $min: "$price" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.status(200).json({
      success: true,
      response: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getProductStats, insertData, sortedData };

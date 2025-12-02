const Product = require("../models/model");
const resolvers = {
  Query: {
    getProducts: async () => {
      const allProducts = await Product.find({});
      return allProducts;
    },
    getProduct: async (_, { id }) => {
      return await Product.findById(id);
    },
  },
  Mutation: {
    addProduct: async (_, productDetails) => {
      const newlyCreatedProduct = await Product.create(productDetails);
      return newlyCreatedProduct;
    },

    update: async (_, args) => {
      const updatedObj = await Product.findByIdAndUpdate(
        args.id,
        { ...args },
        { new: true }
      );
      return updatedObj;
    },

    delete: async (_, { id }) => {
      const deletedProduct = await Product.findByIdAndDelete(id);
      return deletedProduct ? "Product is deleted" : "No element found";
    },
  },
};

module.exports = resolvers;

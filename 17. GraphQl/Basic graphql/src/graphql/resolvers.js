let product = require("../data/product");
// it is used for query resolvers with exact spelling
const resolvers = {
  Query: {
    products: () => product,
    product: (_, { id }) => {
      return product.find((value) => id == value.id);
    },
  },
  Mutation: {
    createProduct: (_, { name, price, inStock, category }) => {
      const newProduct = {
        name,
        price,
        inStock,
        category,
        id: product.length + 1,
      };
      return newProduct;
    },

    deleteProduct: (_, { id }) => {
      const orgLen = product.length;

      product = product.filter((value) => value.id !== parseInt(id));

      return orgLen === product.length ? "no id found" : "deleted successfully";
    },

    updateProduct: (_, args) => {
      console.log(args);
      const index = product.findIndex(
        (value) => value.id === parseInt(args.id)
      );
      product[index] = args;
      return product[index];
    },
  },
};

module.exports = resolvers;

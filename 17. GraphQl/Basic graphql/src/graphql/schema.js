const { gql } = require("graphql-tag");
// it is used for creating query and defining schema with exact spelling

const typeDef = gql`
  type Product {
    id: ID!
    name: String!
    inStock: Boolean!
    price: Float!
    category: [String!] # or String! if it's single value
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      name: String!
      inStock: Boolean!
      price: Float!
      category: [String!]
    ): Product

    deleteProduct(id: ID!): String

    updateProduct(
      id: ID!
      name: String
      inStock: Boolean
      price: Float
      category: [String]
    ): Product
  }
`;

module.exports = typeDef;

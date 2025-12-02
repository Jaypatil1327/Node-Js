const gql = require("graphql-tag");
const typeDef = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    rating: String!
    inStock: Boolean!
    category: [String!]
  }
  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product!
  }

  type Mutation {
    addProduct(
      title: String!
      price: Float!
      rating: String!
      inStock: Boolean!
      category: [String]!
    ): Product!

    update(
      id: ID!
      title: String
      price: Float
      rating: String
      inStock: Boolean
      category: [String!]
    ): Product

    delete(id: ID!): String
  }
`;

module.exports = typeDef;

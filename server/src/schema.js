const { gql } = require("graphql-tag");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
    website: String!
  }

  type ToDo {
    id: ID!
    userId: ID!
    title: String!
    completed: Boolean
    user: User
  }

  type Query {
    getToDos: [ToDo]
    getAllUsers: [User]
    getUser(id: ID!): User
  }
`;

module.exports = { typeDefs };

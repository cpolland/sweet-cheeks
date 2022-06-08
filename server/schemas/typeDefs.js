const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    findUser(userId: ID!): User
    users: [User]
    posts: [Community]
    user(username: String!): User
    me: User
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Community
    addComment(commentId: ID!, commentText: String!, username: String!): Comment
    removePost(communityId: ID!): Boolean
    removeComment(commentId: ID!): Boolean
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    lastLogin: Date!
    age: Int
    city: String
    skinType: String!
    cleanser: String
    toner: String
    moisturizer: String
    serums: String
    masks: String
    post: [Community]!
  }

  type Community {
    _id: ID!
    author: String
    createdAt: String
    body: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID!
    username: String!
    commentText: String!
    createdAt: Date
    users: [User]!
  }
`;

module.exports = typeDefs;

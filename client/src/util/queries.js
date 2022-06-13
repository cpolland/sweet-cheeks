import { gql } from "@apollo/client";
export const ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
      age
      city
      toner
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    posts {
      _id
      lastLogin
      username
      email
      age
      city
    }
  }
`;

export const FIND_USER = gql`
  query findUser($userId: ID!) {
    findUser(userId: $userId) {
      _id
      username
      email
      post {
        _id
        author
        createdAt
        postText
      }
    }
  }
`;

export const QUERY_USER = gql`
  query users {
    users {
      _id
      username
      email
      lastLogin
      age
      city
      skinType
      cleanser
      toner
      moisturizer
      serums
      post {
        _id
        author
        createdAt
        postText
      }
    }
  }
`;

export const QUERY_POST = gql`
  query Post {
    posts {
      _id
      author
      createdAt
      postText
      comments {
        _id
        username
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query Comments {
    posts {
      comments {
        _id
        username
        commentText
        createdAt
      }
    }
  }
`;

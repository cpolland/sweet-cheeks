import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(
      email: $email
      password: $password
      username: $username
      age: $age
    ) {
      token
    }
  }
`;
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      author
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!, $username: String!) {
    addComment(postId: $postId, commentText: $commentText, username: $username) {
      _id
      username
      commentText
    }
  }
  `;
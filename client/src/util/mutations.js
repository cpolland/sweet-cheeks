import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $username: String!
    $city: String!
    $age: String!
    $toner: String!
    $skinType: String!
    $cleanser: String!
    $moisturizer: String!
    $serums: String!
    $bio: String!
  ) {
    createUser(
      email: $email
      password: $password
      username: $username
      city: $city
      age: $age
      toner: $toner
      skinType: $skinType
      cleanser: $cleanser
      moisturizer: $moisturizer
      serums: $serums
      bio: $bio
    ) {
      token
      user {
        _id
        username
        email
        age
        city
        skinType
        cleanser
        toner
        moisturizer
        serums
        bio
      }
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
    addComment(
      postId: $postId
      commentText: $commentText
      username: $username
    ) {
      _id
      username
      commentText
    }
  }
`;

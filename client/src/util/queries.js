import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
    }
  }
`;


// export const QUERY_POSTS = gql`
//   query getPosts {
//     posts {
//       _id
//       lastLogin
//       username
//       email
//     }
//   }
// `;

// export const QUERY_USERS = gql`
//   query getUsers {
//     posts {
//       _id
//       lastLogin
//       username
//       email
//     }
//   }
// `;

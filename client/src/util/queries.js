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

// commented out may be able to use for later queries need to work on pages first

// export const FIND_USER = gql`
// query FindUser($userId: ID!) {
//   findUser(userId: $userId) {
//     _id
//     username
//     email
//     post {
//       _id
//       author
//       createdAt
//       postText
//     }
//   }
// }`;

// export const QUERY_USER = gql`
// query Users{
//   users {
//     _id
//     username
//     email
//     lastLogin
//     age
//     city
//     skinType
//     cleanser
//     toner
//     moisturizer
//     serums
//     masks
//     post{
//       _id
//       author
//       createdAt
//       postText
//     }
//   }
// }
// `;
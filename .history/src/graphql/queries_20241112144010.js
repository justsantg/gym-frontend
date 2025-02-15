import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      userId
      product
      date
    }
  }
`;
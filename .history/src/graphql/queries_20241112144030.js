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

export const GET_INFRASTRUCTURE = gql`
  query GetInfrastructure {
    infrastructure {
      id
      name
      type
    }
  }
`;

export const GET_MEMBERSHIPS = gql`
  query GetMemberships {
    memberships {
      id
      type
      price
    }
  }
`;
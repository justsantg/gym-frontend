import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_GYMS = gql`
  query GetGyms {
    gyms {
      id
      name
      location
    }
  }
`;

const GymList = () => {
  const { loading, error, data } = useQuery(GET_GYMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.gyms.map(gym => (
        <li key={gym.id}>{gym.name} - {gym.location}</li>
      ))}
    </ul>
  );
};

export default GymList;
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client'; // Asegúrate de que la ruta sea correcta
import Users from './components/Users/Users';
import Orders from './components/Orders/Orders';
import Memberships from './components/Memberships/Memberships';


const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Gym Management System</h1>
        <Users />
        <Orders />
        <Memberships />
      </div>
    </ApolloProvider>
  );
};

export default App;
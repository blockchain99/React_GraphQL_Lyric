import React from 'react';
import ReactDOM from 'react-dom';
//front end, rendering lib, get data from server & store locally
import Apolloclient from 'apollo-client';
//Integration btwn react and svr side piece of data, svr side graphql server
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

/*1. take clinet , pass this to <ApolloPrivider>
2. Assuming graphql server is available in
'/graphql' route, server.js*/
const client = new Apolloclient({}); //configuration

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

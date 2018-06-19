import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
//front end, rendering lib, get data from server & store locally
import Apolloclient from 'apollo-client';
//Integration btwn react and svr side piece of data, svr side graphql server
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

/*1. take clinet , pass this to <ApolloPrivider>
2. Assuming graphql server is available in
'/graphql' route, server.js*/
const client = new Apolloclient({
/* use id field to identify every data to keep track:
Just telling Apollo use the id of record to identify data
whenever song of id updated. */
  dataIdFromObject: o => o.id
}); //configuration

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
         <IndexRoute component={SongList} />
         <Route path="songs/new" component={SongCreate} />
         <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

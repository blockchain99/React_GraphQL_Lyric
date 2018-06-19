import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

/*collection, collection-item : already include thie project?  */

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    // console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading..</div>;
    }
    return(
    <div>
      <ul className="collection">
       {this.renderSongs()}
      </ul>
      <Link
        to="/songs/new"
        className="btn-floating btn-large red right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
    );
  }
}


// export default graphql(query, mutation)(SongList); //no multiple query !!
// --> sol: call graphql helper 2 times
export default graphql(query)(SongList);

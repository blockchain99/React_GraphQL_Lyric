import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

/*collection, collection-item : already include thie project?  */

class SongList extends Component {
  onSongDelete(id) {
    // this.props.mutate({ variables: { id: id } });
    this.props.mutate({ variables: { id } })
//This.props.data is added to component automatically by graphql tag,
//react-apollo library.
//Refetch query data(fetchSong query) associated with SongList component
     .then(() => this.props.data.refetch());
  }

  // renderSongs() {
  //   return this.props.data.songs.map(song => {
  //     return (
  //       <li key={song.id} className="collection-item">
  //         {song.title}
  //         <i
  //           className="material-icons"
  //           onClick={() => this.onSongDelete(song.id)}
  //         >
  //           delete
  //         </i>
  //       </li>
  //     );
  //   });
  // }
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>
            {title}
          </Link>
          <i
            className="material-icons"
            onClick={() => this.onSongDelete(id)}
          >
            delete
          </i>
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

const mutation = gql`
 mutation DeleteSong($id: ID){
   deleteSong(id: $id){
     id
   }
 }
`;

// export default graphql(query, mutation)(SongList); //no multiple query !!
// --> sol: call graphql helper 2 times
export default graphql(mutation)(
  graphql(query)(SongList)
);

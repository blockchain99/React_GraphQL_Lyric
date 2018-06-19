/*pass songId to LyricCreate.js  */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render () {
// console.log(this.props); //where song id is coming from.
    const { song } = this.props.data;
//if song is not available, request is still pending.
    if(!song) {
      return <div>Loading...</div>;
    }
    return(
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.params.id}/>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);

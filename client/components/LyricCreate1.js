import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}
/* every data should be identified by id,
song had id(ex. 1, 2, ...)
So lyrics should have new field id(ex. 20, 21 ...)
-> song1 lyric21, song1 lyric21, song2 lyric20 ...*/
const mutation = gql`
mutation AddLyricToSong($content: String, $songId: ID) {
	addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);

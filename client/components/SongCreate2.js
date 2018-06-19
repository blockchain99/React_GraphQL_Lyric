import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'; //make understand graphql syntax
import { Link, hashHistory } from 'react-router';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: ''};
  }
  onSubmit(event) {
    event.preventDefault();//prevent auto executed
    // console.log(this.props);
    this.props.mutate({
      variables: {
//Take value of text input, assign it as title, passed into mutation.
        title: this.state.title
      }
//navigate back to the list of song.
}).then(() => hashHistory.push('/'))
      // .catch(() => {})
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}//end of class SongCreate
/* 1)communicate data from component(title from the form)
back to the mutation :
this.state.title can't be used since it is outside of component, class
==> $ sign, type, name, $ sign !!!
2) receive this.state.title as query variable ==> $title (first)
   run with it.
 */
const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);


import React, { Component } from 'react';

class LyricList extends Component {

  onLike(id) {
    console.log(id);
  }

  renderLyrics() {
    // return this.props.lyrics.map(lyric => {
    return this.props.lyrics.map(({ id, content }) => {
      /* option 1 with refetchQueries: [{..}]  */
      // return (
      //   <li key={id} className="collection-item">
      //     {content}
      //     <i
      //       className="material-icons"
      //       onClick={this.onLike.bind(this)}
      //     >thumb_up</i>
      //   </li>
      // );
      return (
        <li key={id} className="collection-item">
          {content}
          <i
            className="material-icons"
            onClick={() => this.onLike(id)}
          >thumb_up</i>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;

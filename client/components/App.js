import React from 'react';
/*SongList in <IndexRoute> index.js is passed to App.js as children   */
export default ({ children }) => {
  return <div className="container">{children}</div>;
};

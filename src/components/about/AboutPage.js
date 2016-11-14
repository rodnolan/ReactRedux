/**
 * Created by Rod Nolan on 11/11/2016.
 */
import React from 'react';

/*
this could be a stateless functional component but there's a limitation with
hot reloading that makes class based components a better choice for now
this will likely improve in the future
*/
class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>This app uses React, Redux, React Router and other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;

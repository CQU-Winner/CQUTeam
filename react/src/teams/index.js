import React from 'react';
import { Route } from 'react-router';
import TeamsListContainer from './containers/TeamsListContainer';

class Teams extends React.Component {
  render() {
    return (
      <Route path={this.props.match.path} exact component={TeamsListContainer} />
    );
  }
}

export default Teams;

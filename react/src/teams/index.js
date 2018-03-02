import React from 'react';
import { Route } from 'react-router';
import TeamsListContainer from './containers/TeamsListContainer';
import TeamsDetailContainer from './containers/TeamsDetailContainer';

class Teams extends React.Component {
  render() {
    return (
      <div>
        <Route path="/teams" exact component={TeamsListContainer} />
        <Route path="/teams/:teamId" component={TeamsDetailContainer} />
      </div>
    );
  }
}

export default Teams;

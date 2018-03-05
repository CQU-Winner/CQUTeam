import React from 'react';
import { Route, Switch } from 'react-router';
import AccountsContainer from './containers/AccountsContainer';

class Accounts extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/accounts/:userID" component={AccountsContainer} />
      </Switch>
    );
  }
}

export default Accounts;

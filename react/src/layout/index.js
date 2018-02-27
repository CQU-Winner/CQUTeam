import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Teams from '../teams';
import Competitions from '../competitions';
import Accounts from '../accounts';
import BottomTabBar from '../shared/BottomTabBar';

class Layout extends React.Component {
  render() {
    return (
      <div className="primary-layout">
        <div className="content-wrapper">
          <Switch>
            <Route path="/teams" component={Teams} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/competitions" component={Competitions} />
            <Redirect to="/teams" />
          </Switch>
        </div>
        <BottomTabBar />
      </div>
    );
  }
}

export default Layout;

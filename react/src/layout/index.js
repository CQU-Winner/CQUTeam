import React from 'react';
import { Route } from 'react-router-dom';
import Teams from '../teams';
import Competitions from '../competitions';
import Accounts from '../accounts';
import BottomTabBar from './BottomTabBar';

class Layout extends React.Component {
  render() {
    return (
      <div className="viewportWrapper">
        <div className="contentWrapper">
          <Route path="/teams" component={Teams} />
          <Route path="/accounts" component={Accounts} />
          <Route path="/competitions" component={Competitions} />
        </div>
        <BottomTabBar />
      </div>
    );
  }
}

export default Layout;

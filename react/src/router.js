import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Teams from './teams';
import Competitions from './competitions';
import Accounts from './accounts';
import BottomTabBar from './shared/BottomTabBar';

class AppRouter extends React.Component {
  render() {
    // TODO: 将组件加载模式替换为动态加载。
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <Redirect to="/teams" />} />
          <Route path="/teams" component={Teams} />
          <Route path="/accounts" component={Accounts} />
          <Route path="/competitions" component={Competitions} />
          <Route component={BottomTabBar} />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

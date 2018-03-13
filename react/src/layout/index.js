import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Teams from '../teams';
import Information from '../information';
import Accounts from '../accounts';
import PostPage from '../postpage/containers/PostPage';
import BottomTabBar from '../shared/TabBar/BottomTabBar';
import './layout.less';

class Layout extends React.Component {
  render() {
    return (
      <div className="primary-layout">
        <div className="content-wrapper">
          <Switch>
            <Route path="/teams" component={Teams} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/information" component={Information} />
            <Route path="/postpage" component={PostPage} />
            <Redirect to="/teams" />
          </Switch>
        </div>
        <BottomTabBar history={this.props.history} />
      </div>
    );
  }
}

export default Layout;

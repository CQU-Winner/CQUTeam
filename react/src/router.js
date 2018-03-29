import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Layout from './layout';

class AppRouter extends React.Component {
  render() {
    // TODO: 将组件加载模式替换为动态加载。
    return (
      <Router>
        <Route path="/" component={Layout} />
      </Router>
    );
  }
}

export default AppRouter;

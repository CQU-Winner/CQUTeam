import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Layout from './layout';

class AppRouter extends React.Component {
  render() {
    // TODO: 将组件加载模式替换为动态加载。
    return (
      <HashRouter>
        <Route path="/" component={Layout} />
      </HashRouter>
    );
  }
}

export default AppRouter;

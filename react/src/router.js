import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './layout';

class AppRouter extends React.Component {
  render() {
    // TODO: 将组件加载模式替换为动态加载。
    return (
      <BrowserRouter>
        <Route path="/" component={Layout} />
      </BrowserRouter>
    );
  }
}

export default AppRouter;

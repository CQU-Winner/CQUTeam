import React from 'react';
import { NavBar } from 'antd-mobile';
import '../shared/NavBar/TopNavBar.less';

class Information extends React.Component {
  render() {
    return (
      <div>
        <NavBar className="nav-bar-title" mode="light">CQUTeam</NavBar>
      </div>
    );
  }
}

export default Information;

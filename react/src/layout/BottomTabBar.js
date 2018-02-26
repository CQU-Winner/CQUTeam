import React from 'react';
import { Link } from 'react-router-dom';

class BottomTabBar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/accounts">accounts</Link></li>
        <li><Link to="/competitions">competitions</Link></li>
      </ul>
    );
  }
}

export default BottomTabBar;

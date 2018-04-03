import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import './TopNavBar.less';

class TopNavBar extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    showAddIcon: PropTypes.bool,
  }

  static defaultProps = {
    showAddIcon: false,
  }

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={null}
          rightContent={this.props.showAddIcon ? 
            <Link to="/postpage/init"><div className="add-icon" /></Link> 
            : null}
        >
          <div className="nav-bar-title">
            {this.props.title}
          </div>
        </NavBar>
      </div>
    );
  }
}

export default TopNavBar;

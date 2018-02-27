import React from 'react';
import { TabBar } from 'antd-mobile'; 
import './BottomTabBar.less';

class BottomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'teams',
    };
  }

  linkTo = (path) => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="tab-bar-wrapper">
        <TabBar
          tintColor="#fd4751"
          unselectedTintColor="#333"
        >
          <TabBar.Item 
            title="资讯"
            key="information"
            icon={
              <div className="information-item" />
            }
            selectedIcon={
              <div className="information-item-selected" />
            }
            selected={this.state.selectedTab === 'information'}
            onPress={() => {
              this.setState({
                selectedTab: 'information',
              });
              this.linkTo('/information');
            }}
          />
          <TabBar.Item 
            title="组队"
            key="team"
            icon={
              <div className="teams-item" />
            }
            selectedIcon={
              <div className="teams-item-selected" />
            }
            selected={this.state.selectedTab === 'teams'}
            onPress={() => {
              this.setState({
                selectedTab: 'teams',
              });
              this.linkTo('/team');
            }}
          />
          <TabBar.Item 
            title="个人"
            key="account"
            icon={
              <div className="accounts-item" />
            }
            selectedIcon={
              <div className="accounts-item-selected" />
            }
            selected={this.state.selectedTab === 'accounts'}
            onPress={() => {
              this.setState({
                selectedTab: 'accounts',
              });
              this.linkTo('/accounts');
            }}
          /> 
        </TabBar>
      </div>
    );
  }
}

export default BottomTabBar;

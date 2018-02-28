import React from 'react';
import { observable } from 'mobx';
import { TabBar } from 'antd-mobile'; 
import './BottomTabBar.less';


class BottomTabBar extends React.Component {
  @observable selectedTab = 'teams';

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
            selected={this.selectedTab === 'information'}
            onPress={() => {
              this.selectedTab = 'information';
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
            selected={this.selectedTab === 'teams'}
            onPress={() => {
              this.selectedTab = 'teams';
              this.linkTo('/teams');
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
            selected={this.selectedTab === 'accounts'}
            onPress={() => {
              this.selectedTab = 'accounts';
              this.linkTo('/accounts');
            }}
          /> 
        </TabBar>
      </div>
    );
  }
}

export default BottomTabBar;

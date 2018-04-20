import React from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import NavBar from '../../shared/NavBar/TopNavBar';
import UserInformation from './UserInformation';
import TeamsList from '../../teams/components/TeamsList';

class AccountsProfile extends React.Component {
  renderTabBar = (props) => {
    return (
      <Sticky>
        {({ style }) => (
          <div style={{ ...style, zIndex: 1 }}>
            <Tabs.DefaultTabBar {...props} />
          </div>)
        }
      </Sticky>
    );
  }

  render() {
    const tabs = [
      { title: '个人资料', sub: '1' },
      { title: '发布过的', sub: '2' },
    ];
    // const userType = this.props.profile.user_type;
    // const SayHelloCouldBeRender = userType && userType !== 'banned'; 
    const tabsComponent = (
      <Tabs 
        tabs={tabs}
        initalPage="1"
        renderTabBar={this.renderTabBar}
      >
        <UserInformation user={this.props.profile} />
        <TeamsList teams={this.props.list} />
      </Tabs>);
    return (
      <div>
        <NavBar title="用户信息" />
        <StickyContainer>
          {tabsComponent}
        </StickyContainer>
      </div>
    );
  }
}

export default AccountsProfile;

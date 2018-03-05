import React from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import NavBar from '../../shared/NavBar/TopNavBar';
import UserInformation from './UserInformation';
import TeamsList from '../../teams/components/TeamsList';
import SayHello from './SayHello';

class AccountsProfile extends React.Component {
  tabs = [
    { title: '个人资料', sub: '1' },
    { title: '发布过的', sub: '2' },
    { title: '招呼列表', sub: '3' },
  ];

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
    return (
      <div>
        <NavBar title="用户信息" showAddIcon />
        <StickyContainer>
          <Tabs 
            tabs={this.tabs}
            initalPage="1"
            renderTabBar={this.renderTabBar}
          >
            <UserInformation user={this.props.profile} />
            <TeamsList teams={this.props.list} />
            <SayHello greetings={this.props.profile.greetings} />
          </Tabs>
        </StickyContainer>
      </div>
    );
  }
}

export default AccountsProfile;

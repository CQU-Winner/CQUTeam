import React from 'react';
import { observer } from 'mobx-react';
import { SegmentedControl, WingBlank, WhiteSpace, Tag } from 'antd-mobile';
import AccountsStore from '../stores/AccountsStore';
import GreetingCard from '../components/GreetingCard';

@observer
class SayHello extends React.Component {
  onValueChange = (type) => {
    AccountsStore.changeGreetingsType(type);
  }

  renderTag = (status) => {
    if (status === 'pending') {
      return <Tag small>待通过</Tag>;
    } else if (status === 'rejected') {
      return <Tag small>已拒绝</Tag>;
    }
    return <Tag small>已同意</Tag>;
  }

  renderGreetingsCards = (type) => {
    if (type === '已发送') {
      return (
        AccountsStore.reqGreetings.map((greeting) => {
          return (
            <WingBlank key={greeting.req.id} size="lg">
              <WhiteSpace size="lg" />
              <GreetingCard type="已发送" greeting={greeting.req} />
              <WhiteSpace size="sm" />
            </WingBlank>
          );
        })
      );
    } else {
      return (
        AccountsStore.resGreetings.map((greeting) => {
          return (
            <WingBlank key={greeting.res.id} size="lg">
              <WhiteSpace size="lg" />
              <GreetingCard type="待处理" greeting={greeting.res} />
              <WhiteSpace size="sm" />
            </WingBlank>
          );
        })
      );
    }
  }

  render() {
    const isReq = AccountsStore.greetingsType === '已发送';
    const isRes = AccountsStore.greetingsType === '待处理';
    return (
      <div className="greetings">
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <SegmentedControl
            values={['已发送', '待处理']}
            onValueChange={this.onValueChange}
            style={{ height: '20px', width: '200px' }}
          />
        </div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          {
            isReq &&
            this.renderGreetingsCards('已发送')
          }
          {
            isRes &&
            this.renderGreetingsCards('待处理')
          }
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default SayHello;

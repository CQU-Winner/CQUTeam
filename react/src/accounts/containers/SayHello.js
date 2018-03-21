import React from 'react';
import { observer } from 'mobx-react';
import { SegmentedControl, Card, WingBlank, WhiteSpace, Tag } from 'antd-mobile';
import AccountsStore from '../stores/AccountsStore';

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
    if (type === '发送') {
      return (
        AccountsStore.reqGreetings.map((greeting) => {
          return (
            <WingBlank size="lg">
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header
                  title={greeting.req.name}
                  thumb={greeting.req.avatar}
                  extra={this.renderTag(greeting.req.status)}
                />
                <Card.Body>
                  <div>联系方式:</div>
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
            </WingBlank>
          );
        })
      );
    } else {
      return null;
    }
  }

  render() {
    const isReq = AccountsStore.greetingsType === '发送';
    return (
      <div className="greetings">
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <SegmentedControl
            values={['发送', '接受']}
            onValueChange={this.onValueChange}
            style={{ height: '20px', width: '200px' }}
          />
        </div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          {
            isReq &&
            this.renderGreetingsCards('发送')
          }
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default SayHello;

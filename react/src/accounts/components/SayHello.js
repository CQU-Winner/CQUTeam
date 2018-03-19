import React from 'react';
import { SegmentedControl, Card, WingBlank, WhiteSpace, Tag, Button } from 'antd-mobile';

const data = [    
  {
    req: {  
      id: 'test',
      avatar: 'test',
      name: 'test',
      status: 'test',
      contact: 'test',
    },
  },
  {
    res: { 
      id: 'test',
      avatar: 'test',
      name: 'test',
      status: 'test',
    },
  },
];

class SayHello extends React.Component {
  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }

  renderTag = (status) => {
    if (status === 'pending') {
      return <Tag small>待通过</Tag>;
    } else if (status === 'rejected') {
      return <Tag small>已拒绝</Tag>;
    }
    return <Tag small>已同意</Tag>;
  }

  renderGreetingsCard = (greetings, req) => {
    if (req === true) {
      return (
        data.map((greeting) => {
          return (
            <WingBlank size="lg">
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header
                  title={greeting.name}
                  thumb={greeting.avatar}
                  extra={this.renderTag(greeting.status)}
                />
                <Card.Body>
                  <div>联系方式:</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
              </Card>
              <WhiteSpace size="lg" />
            </WingBlank>
          );
        })
      );
    }
  }

  render() {
    return (
      <div className="greetings">
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <SegmentedControl
            values={['已发送', '已接收']}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
            style={{ height: '20px', width: '200px' }}
          />
        </div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="甘宇廷"
              thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
              extra={this.renderTag('pending')}
            />
            <Card.Body style={{ marginBottom: '10px' }}>
              <div>联系方式:</div>
            </Card.Body>
            <Card.Footer 
              content={<Button type="ghost" inline size="small">拒绝</Button>} 
              extra={<Button type="ghost" inline size="small">同意</Button>} 
            />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default SayHello;

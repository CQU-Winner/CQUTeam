import React from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import TopNavBar from '../NavBar/TopNavBar';
import './Authentication.less';

class Authentication extends React.Component {
  wechatLogin = () => {
    console.log('wechat');
  }

  yibanLogin = () => {
    window.location.href = `https://openapi.yiban.cn/oauth/
      authorize?client_id=86705621eba5382a&redirect_uri=http://f.yiban.cn/iapp171981`;
  }

  render() {
    return (
      <div>
        <TopNavBar title="CQUTeam" />
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="请登录"
            />
            <Card.Body>
              <div className="login-container">
                <div 
                  className="wechat-login" 
                  onClick={this.wechatLogin}
                  onKeyDown={() => {}}
                >
                  微信登录
                </div>
                <div 
                  className="yiban-login" 
                  onClick={this.yibanLogin}
                  onKeyDown={() => {}}
                >
                  易班登录
                </div>
              </div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }
}

export default Authentication;

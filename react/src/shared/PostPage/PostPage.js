import React from 'react';
import { List, InputItem } from 'antd-mobile';
import TopNavBar from '../NavBar/TopNavBar';

class PostPage extends React.Component {
  render() {
    return (
      <div>
        <TopNavBar title="需求发布" />
        <List renderHeader={() => '需求详情'}>
          <InputItem
            placeholder="please input content"
            data-seed="logId"
          >
            非受控组件
          </InputItem>
        </List>
      </div>
    );
  }
}

export default PostPage;

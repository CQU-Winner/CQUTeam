import React from 'react';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import TopNavBar from '../NavBar/TopNavBar';

class PostPage extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <TopNavBar title="需求发布" />
        <List renderHeader={() => '需求详情'}>
          <InputItem
            {...getFieldProps('required')}
            clear
            placeholder="auto focus"
          >
            标题
          </InputItem>
          <InputItem
            {...getFieldProps('digit')}
            clear
            placeholder="click the button below to focus"
          >
            标题
          </InputItem>
          <button onClick={this.submit}>submit</button>
        </List>
      </div>
    );
  }
}

export default createForm()(PostPage);

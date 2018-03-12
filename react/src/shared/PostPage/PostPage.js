import React from 'react';
import { List, InputItem, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import TopNavBar from '../NavBar/TopNavBar';
import { competitionType } from '../../utils/data';

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
            {...getFieldProps('title')}
            clear
            placeholder=""
          >
            招募标题
          </InputItem>
          <InputItem
            {...getFieldProps('competition')}
            clear
            placeholder=""
          >
            比赛名称
          </InputItem>
          <Picker data={competitionType} cols={1} {...getFieldProps('competition-type')}>
            <List.Item arrow="horizontal">比赛类别</List.Item>
          </Picker>
          <button onClick={this.submit}>submit</button>
        </List>
      </div>
    );
  }
}

export default createForm()(PostPage);

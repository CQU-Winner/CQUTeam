import React from 'react';
import { List, InputItem, Picker, DatePicker, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import TopNavBar from '../../shared/NavBar/TopNavBar';
import { competitionType } from '../../utils/data';
import GroupsPicker from './GroupsPicker';
import '../style/PostPage.less';

class PostPage extends React.Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{ marginBottom: '50px' }}>
        <TopNavBar title="需求发布" />
        <List className="postList" renderHeader={() => '详情描述'}>
          <InputItem
            {...getFieldProps('title')}
            clear
            placeholder="有吸引力的标题更容易招募大佬哦"
            maxLength={20}
          >
            招募标题
          </InputItem>
          <InputItem
            {...getFieldProps('competition')}
            clear
            placeholder="您要参加的比赛"
            maxLength={20}
          >
            比赛名称
          </InputItem>
          <InputItem
            {...getFieldProps('href')}
            clear
            placeholder="此处可以粘贴比赛详情链接"
            maxLength={100}
          >
            比赛链接
          </InputItem>
          <Picker data={competitionType} cols={1} {...getFieldProps('competition-type')}>
            <List.Item>比赛类别</List.Item>
          </Picker>
          <DatePicker
            mode="date"
            title="比赛截止日期"
            extra="请选择"
            {...getFieldProps('expiretime')}
          >
            <List.Item>截止日期</List.Item>
          </DatePicker>
          <TextareaItem
            {...getFieldProps('description', {
              initialValue: '需求描述',
            })}
            rows={4}
            count={100}
          />
          <div 
            className="am-list-header"
            style={{ background: '#f5f5f9' }}
          >
            团队现有成员
          </div>
          <GroupsPicker history={this.props.history} />
          <div 
            className="am-list-header"
            style={{ background: '#f5f5f9' }}
          >
            联系方式
          </div>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            clear
            placeholder="选填"
          >
           手机号
          </InputItem>
          <InputItem
            {...getFieldProps('wechat')}
            clear
            placeholder="选填"
            maxLength={15}
          >
           微信号
          </InputItem>
          <InputItem
            {...getFieldProps('qq')}
            type="number"
            clear
            placeholder="选填"
            maxLength={16}
          >
           qq号
          </InputItem>

          <Button
            style={{ margin: '20px 140px 0 140px' }}
            type="ghost" 
            onClick={this.submit}
          >
            提交
          </Button>
        </List>
      </div>
    );
  }
}

export default createForm()(PostPage);

import React from 'react';
import {
  List, InputItem, Picker, DatePicker, 
  TextareaItem, Button, Toast,
} from 'antd-mobile';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { createForm } from 'rc-form';
import TopNavBar from '../../shared/NavBar/TopNavBar';
import GroupsPicker from './GroupsPicker';
import PostPageStore from '../stores/PostPageStore';
import TeamsDetailStore from '../../teams/stores/TeamsDetailStore';
import { competitionType } from '../../utils/data';
import '../style/PostPage.less';

@withRouter
@observer
class PostPage extends React.Component {
  componentDidMount() {
    const { teamId } = this.props.match.params;
    if (teamId !== 'init') {
      if (TeamsDetailStore.detail.data) {
        PostPageStore.genInitData(TeamsDetailStore.detail.data);
      }
    }
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        const errorMsg = error.title.errors[0].message;
        Toast.fail(`${errorMsg}!`, 2);
      } else {
        const contactExit = value.phone || value.qq || value.wechat;
        if (!contactExit) {
          Toast.fail('请至少留下一种联系方式！');
        } else {
          PostPageStore.genPostData(value);
          // Initial commit or update according to the router params.
          if (this.props.match.params) {
            const { teamId } = this.props.match.params;
            if (teamId !== 'init') {
              PostPageStore.updateData(teamId).then(() => {
                Toast.success('更新成功！', 1, () => {
                  this.props.history.goBack();
                });
              });
            } else {
              PostPageStore.submitData().then(() => {
                Toast.success('发布成功！', 1, () => {
                  this.props.history.goBack();
                });
              });
            }
          }
         }
      }
    });
  }
  
  render() {
    const { getFieldProps } = this.props.form;
    const { initData } = PostPageStore;
    return (
      <div style={{ marginBottom: '50px' }}>
        <TopNavBar title="需求发布" />
        <List className="postList" renderHeader={() => '详情描述'}>
          <InputItem
            {...getFieldProps('title', {
              rules: [{ required: true }],
              initialValue: initData.title,
            })}
            clear
            placeholder="有吸引力的标题更容易招募大佬哦"
            maxLength={20}
          >
            招募标题
          </InputItem>
          <InputItem
            {...getFieldProps('cname', {
              rules: [{ required: true }],
              initialValue: initData.cname,
            })}
            clear
            placeholder="您要参加的比赛"
            maxLength={20}
          >
            比赛名称
          </InputItem>
          <InputItem
            {...getFieldProps('curl', {
              initialValue: initData.curl,
            })}
            clear
            placeholder="比赛详情链接"
            maxLength={100}
          >
            比赛链接
          </InputItem>
          <Picker 
            data={competitionType} 
            cols={1} 
            {...getFieldProps('ctype')}
          >
            <List.Item>比赛类别</List.Item>
          </Picker>
          <DatePicker
            mode="date"
            title="比赛截止日期"
            extra="请选择"
            {...getFieldProps('cddl')}
          >
            <List.Item>截止日期</List.Item>
          </DatePicker>
          <TextareaItem
            {...getFieldProps('demand', {
              initialValue: initData.demand,
              rules: [{ required: true }],       
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
            {...getFieldProps('phone', {
              initialValue: initData.phone,
            })}
            type="phone"
            clear
            placeholder="选填"
          >
           手机号
          </InputItem>
          <InputItem
            {...getFieldProps('wechat', {
              initialValue: initData.wechat,
            })}
            clear
            placeholder="选填"
            maxLength={15}
          >
           微信号
          </InputItem>
          <InputItem
            {...getFieldProps('qq', {
              initialValue: initData.qq,
            })}
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

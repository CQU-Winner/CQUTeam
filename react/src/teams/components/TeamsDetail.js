import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { List, Button, Modal } from 'antd-mobile';
import '../style/TeamsDetail.less';

@withRouter
class TeamsDetail extends React.Component {
  editDetail = () => {
    const { teamId } = this.props.match.params;
    this.props.history.push(`/postpage/${teamId}`);
  }

  deleteAlert = () => {
    const { alert } = Modal;
    const alertInstance = alert('关闭招募', '确定要关闭此招募吗？?', [
      { text: '取消', onPress: () => {}, style: 'default' },
      { text: '确认', onPress: () => console.log('ok') },
    ]);
  }

  renderCardTitle = (title) => {
    return (
      <div className="card-title-lv2">
        <div className="line" />
        <div className="text">
          {title}
        </div>
        <div className="line" />
      </div>
    );
  }

  renderMembers = (members) => {
    const membersList = [];
    for (const member of members) {
      // 这个地方的lint似乎出了问题,先留着.
      membersList.push(  // eslint-disable-line
        <Link key={member.id} to={`/accounts/${member.id}`}>
          <div className="avatar">
            <img src={member.avatar} alt="组员" />
          </div>
        </Link>);
    }
    return membersList;
  }

  renderFounder = (founder, self = false) => {
    const { Item } = List;
    const { Brief } = Item;
    return (
      <Link to={`/accounts/${self ? 'slef' : founder.id}`}>
        <Item thumb={founder.avatar} multipleLine>
          {founder.name} 
          <Brief>{founder.resume}</Brief>
        </Item>
      </Link>
    );
  }

  render() {
    if (this.props.detail) {
      const {
        compet, title, demand, members, founder,
      } = this.props.detail;
      const self = true;
      return (
        <div className="card">
          <div className="card-title-lv1">
            {title}
          </div>
          {this.renderCardTitle('比赛信息')}
          <div className="card-content">
            <p>比赛名称:{compet.title}</p>
            <p>比赛类别:{compet.type}</p>
            <p>比赛截止时间:{compet.ddl}</p>
            <p>比赛详情:{compet.url}</p>
          </div>
          {this.renderCardTitle('招募需求')}
          <div className="card-content">
            <p>{demand}</p>
          </div>
          {this.renderCardTitle('团队成员')}
          <div className="card-content">
            <div className="members">
              {this.renderMembers(members)}
            </div>
          </div>
          {this.renderCardTitle('发起人')}
          <List className="teams-list">
            {this.renderFounder(founder, self)}
          </List>
          {
            self ? 
              <div className="operating">
                <div 
                  className="editing" 
                  onClick={this.editDetail} 
                  onKeyUp={() => {}}
                />
                <div 
                  className="delete" 
                  onClick={this.deleteAlert}
                  onKeyUp={() => {}}
                />
              </div> : 
              <div className="say-hello">
                <Button type="ghost" size="small">打招呼</Button>
              </div>
          }
        </div>
      );
    }
    return null;
  }
}

export default TeamsDetail;


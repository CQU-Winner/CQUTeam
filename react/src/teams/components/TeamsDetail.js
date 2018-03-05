import React from 'react';
import { Link } from 'react-router-dom';
import { List, Button } from 'antd-mobile';
import '../style/TeamsDetail.less';

class TeamsDetail extends React.Component {
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
        compet, title, demand, members, founder, self,
      } = this.props.detail;
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
          <div className="say-hello">
            <Button type="ghost" size="small">打招呼</Button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default TeamsDetail;


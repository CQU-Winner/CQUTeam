import React from 'react';
import { List } from 'antd-mobile';
import '../style/TeamsList.less';

class TeamsList extends React.Component {
  render() {
    const { Item } = List;
    const { Brief } = Item;
    return (
      <div>
        <List className="teams-list">
          <Item align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title <Brief>subtitle</Brief>
          </Item>
          <Item align="bottom" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

export default TeamsList;


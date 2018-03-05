import React from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import '../style/TeamsList.less';

class TeamsList extends React.Component {
  renderTeamsItems = () => {
    const { Item } = List;
    const { Brief } = Item;
    return this.props.teams.map((team) => {
      return (
        <Link key={team.id} to={`/teams/${team.id}`}>
          <Item thumb={team.avatar} multipleLine>
            {team.title} 
            <Brief>{team.intro}</Brief>
          </Item>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <List className="teams-list">
          {this.renderTeamsItems()}
        </List>
      </div>
    );
  }
}

export default TeamsList;


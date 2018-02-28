import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd-mobile';
import '../style/TeamsList.less';

const { Item } = List;
const { Brief } = Item;

class TeamsList extends React.Component {
  static propTypes = {
    teams: PropTypes.array,
  }

  static defaultProps = {
    teams: [],
  }

  renderTeamsItems = () => {
    return this.props.teams.map((team) => {
      return (
        <Item key={team.id} thumb={team.avatar} multipleLine>
          {team.title} 
          <Brief>{team.intro}</Brief>
        </Item>
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


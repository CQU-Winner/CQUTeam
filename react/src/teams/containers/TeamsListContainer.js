import React from 'react';
import { observer } from 'mobx-react';
import { List } from 'antd-mobile';
import TeamsList from '../components/TeamsList';
import OrderingSwitchContainer from './OrderingSwitchContainer';
import TeamsStore from '../stores/TeamsStore';
import NavBar from '../../shared/NavBar/TopNavBar';
import SearchBar from '../../shared/SearchBar/SearchBar';
import Pagination from '../../shared/Pagination/Pagination';

@observer
class TeamsListContainer extends React.Component {
  componentDidMount() {
    TeamsStore.fetchTeamsList();
  }

  getTeams = () => {
    const teams = [];
    const { teamsList } = TeamsStore;
    if (teamsList.data) {
      teamsList.data.forEach((team) => {
        teams.push(team);
      });
    }
    return teams;
  }

  render() {
    return (
      <div style={{ marginBottom: '50px' }}>
        <NavBar title="组队信息" showAddIcon />
        <SearchBar store="teamsStore" />
        <OrderingSwitchContainer />
        <TeamsList teams={this.getTeams()} />
        <List>
          <List.Item>
            <Pagination
            current={TeamsStore.page}
            hasNext={TeamsStore.hasMore && !TeamsStore.error}
            onChange={(v) => { TeamsStore.changePage(v); }}
            />
          </List.Item>
        </List>
      </div>
    );
  }
}

export default TeamsListContainer;

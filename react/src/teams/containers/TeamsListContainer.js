import React from 'react';
import { observer } from 'mobx-react';
import TeamsList from '../components/TeamsList';
import OrderingSwitchContainer from './OrderingSwitchContainer';
import TeamsStore from '../stores/TeamsStore';
import NavBar from '../../shared/NavBar/TopNavBar';
import SearchBar from '../../shared/SearchBar/SearchBar';

@observer
class TeamsListContainer extends React.Component {
  componentDidMount() {
    TeamsStore.teamsListInit();
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
      <div>
        <NavBar title="组队信息" showAddIcon />
        <SearchBar />
        <OrderingSwitchContainer />
        <TeamsList teams={this.getTeams()} />
      </div>
    );
  }
}

export default TeamsListContainer;

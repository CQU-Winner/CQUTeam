import React from 'react';
import { observer } from 'mobx-react';
import TeamsList from '../components/TeamsList';
import TeamsStore from '../stores/TeamsStore';

@observer
class TeamsContainer extends React.Component {
  componentDidMount() {
    TeamsStore.teamsListInit();
  }

  render() {
    return (
      <TeamsList />
    );
  }
}

export default TeamsContainer;

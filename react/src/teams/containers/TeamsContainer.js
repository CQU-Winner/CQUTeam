import React from 'react';
import { observer } from 'mobx-react';
import TeamsStore from '../stores/TeamsStore';

@observer
class TeamsContainer extends React.Component {
  componentDidMount() {
    TeamsStore.teamsListInit();
  }

  render() {
    return (
      <div>
        t
      </div>
    );
  }
}

export default TeamsContainer;

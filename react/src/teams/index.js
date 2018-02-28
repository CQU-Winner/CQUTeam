import React from 'react';
import TeamsContainer from './containers/TeamsContainer';
import TopNavBar from '../shared/NavBar/TopNavBar';
import SearchBar from '../shared/SearchBar/SearchBar';

class Teams extends React.Component {
  render() {
    return (
      <div>
        <TopNavBar title="组队信息" showAddIcon />
        <SearchBar />
        <TeamsContainer />
      </div>
    );
  }
}

export default Teams;

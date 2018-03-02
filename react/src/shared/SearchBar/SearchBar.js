import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'antd-mobile';
import TeamsStore from '../../teams/stores/TeamsStore';

class CustomSearchBar extends React.Component {
  static propTypes = {
    store: PropTypes.string.isRequired,
  }

  handleSearch = (val) => {
    switch (this.props.store) {
      case 'teamsStore':
        TeamsStore.changeWd(val);
        break;
      default:
    }
  }

  handleClear = () => {
    TeamsStore.changeWd('');
  }

  render() {
    return (
      <SearchBar 
        placeholder="搜索" 
        maxLength={20} 
        onSubmit={this.handleSearch}
        onClear={this.handleClear}
      />
    );
  }
}

export default CustomSearchBar;


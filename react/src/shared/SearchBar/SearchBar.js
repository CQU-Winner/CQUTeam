import React from 'react';
import { SearchBar } from 'antd-mobile';

class CustomSearchBar extends React.Component {
  render() {
    return (
      <SearchBar placeholder="搜索" maxLength={8} />
    );
  }
}

export default CustomSearchBar;


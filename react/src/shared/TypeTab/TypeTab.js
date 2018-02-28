import React from 'react';
import PropTypes from 'prop-types';
import './TypeTab.less';

class TypeTab extends React.Component {
  static propTypes = {
    ordering: PropTypes.string,
    switchOrdering: PropTypes.func.isRequired,
  }

  static defaultProps = {
    ordering: 'hot',
  }

  render() {
    return (
      <div className="tab-wrapper">
        <div 
          className={
          `${this.props.ordering === 'hot' ? 'hot-selected' : 'hot'}`}
          // satisfy eslint
          onClick={() => {}}
          onKeyUp={() => { this.props.switchOrdering('hot'); }}
        />
        <div 
          className={
          `${this.props.ordering === 'time' ? 'time-selected' : 'time'}`}
          // satisfy eslint
          onClick={() => {}}
          onKeyUp={() => { this.props.switchOrdering('time'); }}
        />
      </div>
    );
  }
}

export default TypeTab;

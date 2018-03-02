import React from 'react';
import { observer } from 'mobx-react';
import TypePicker from './TypePicker';
import TeamsStore from '../stores/TeamsStore';
import '../style/OrderingSwitch.less';

@observer
class OrderingSwitchContainer extends React.Component {
  renderOrderingSwitch = () => {
    return (
      [<div 
        key="hot"
        className={
        `${TeamsStore.ordering === 'hot' ? 'hot-selected' : 'hot'}`}
        // compatibility
        onClick={() => { TeamsStore.switchOrdering('hot'); }}
        onKeyUp={() => {}}
      />,
        <div 
          key="time"
          className={
          `${TeamsStore.ordering === 'late' ? 'time-selected' : 'time'}`}
          // compatibility
          onClick={() => { TeamsStore.switchOrdering('late'); }}
          onKeyUp={() => {}}
        />,
        <TypePicker key="type" />,
      ]
    );
  }

  render() {
    return (
      <div className="tab-wrapper">
        {this.renderOrderingSwitch()}
      </div>
    );
  }
}

export default OrderingSwitchContainer;

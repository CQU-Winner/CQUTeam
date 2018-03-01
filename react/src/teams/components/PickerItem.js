import React from 'react';

const PickerItem = props => (
  <div
    onClick={props.onClick}
    onKeyUp={() => {}}
    className={props.IconName}
  />
);

export default PickerItem;

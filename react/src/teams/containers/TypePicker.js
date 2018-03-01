import React from 'react';
import { observer } from 'mobx-react';
import { Picker } from 'antd-mobile';
import TeamsStore from '../stores/TeamsStore';
import PickerItem from '../components/PickerItem';

const data = [
  {
    label: '全部',
    value: '全部',
  },
  {
    label: '应用开发',
    value: '应用开发',
  },
];

@observer
class TypePicker extends React.Component {
  renderTypeIcon = () => (
    TeamsStore.teamType[0] === '全部' ? 'type' : 'type-selected'
  )

  render() {
    return (
      <Picker 
        data={data} 
        cols={1} 
        title="选择比赛类型" 
        value={TeamsStore.teamType}
        onOk={(val) => {
          TeamsStore.changeTeamType(val); 
        }}
      >
        <PickerItem IconName={this.renderTypeIcon()} />
      </Picker>
    );
  }
} 

export default TypePicker;

import React from 'react';
import { observer } from 'mobx-react';
import { Picker } from 'antd-mobile';
import TeamsStore from '../stores/TeamsStore';
import PickerItem from '../components/PickerItem';
import { competitionType } from '../../utils/data';

@observer
class TypePicker extends React.Component {
  renderTypeIcon = () => (
    TeamsStore.teamType[0] === '' ? 'type' : 'type-selected'
  )

  render() {
    return (
      <Picker 
        data={competitionType} 
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

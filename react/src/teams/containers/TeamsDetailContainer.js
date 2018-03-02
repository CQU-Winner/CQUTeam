import React from 'react';
import { observer } from 'mobx-react';
import TeamsDetailStore from '../stores/TeamsDetailStore';
import TeamsDetail from '../components/TeamsDetail';

@observer
class TeamsDetailContainer extends React.Component {
  componentDidMount() {
    const detailId = this.props.match.params.teamId;
    TeamsDetailStore.fetchDetail(detailId);
  }

  render() {
    return (
      <TeamsDetail detail={TeamsDetailStore.detail.data} /> 
    );
  }
}

export default TeamsDetailContainer;

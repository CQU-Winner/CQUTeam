import React from 'react';
import { observer } from 'mobx-react';
import Loader from '../../shared/Loader/loader';
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
      TeamsDetailStore.loading ? 
      <div style={{ 
        position: 'ralative',
        minHeight: '100vh',
        paddingTop: '30vh', 
        backgroundColor: '#fff' }}>
        <Loader />
      </div> : <TeamsDetail detail={TeamsDetailStore.detail.data} /> 
    );
  }
}

export default TeamsDetailContainer;

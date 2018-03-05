import React from 'react';
import { observer } from 'mobx-react';
import AccountsStore from '../stores/AccountsStore';
import AccountsProfile from '../components/AccountsProfile';
import Authentication from '../../shared/Authentication/Authentication';

@observer
class AccountsContainer extends React.Component {
  componentDidMount() {
    AccountsStore.fetchUserProfile(this.props.match.params.userID);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userID !== this.props.match.params.userID) {
      AccountsStore.fetchUserProfile(this.props.match.params.userID);
    }
  }

  render() {
    return (
      <div>
        {AccountsStore.userProfile ? <AccountsProfile /> 
        : <Authentication />}
      </div>
    );
  }
}

export default AccountsContainer;

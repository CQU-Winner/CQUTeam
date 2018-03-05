import { observable, action } from 'mobx';
import axios from 'axios';

class AccountsStore {
  @observable userProfile = {};
  @observable historyList = [];
  @observable profileLoading = false;
  @observable listLoading = false;

  @action fetchUserProfile(userID) {
    this.profileLoading = true;
    const url = userID === 'self' ? 'http://www.cquwinner.com/api/self'
      : `http://www.cquwinner.com/api/users/${userID}`;
    axios.get(url).then((res) => {
      this.profileLoading = false;
      this.userProfile = res.data.data;
      if (res.data.data) {
        axios.get(`http://www.cquwinner.com/api/users/${this.userProfile.id}/groups`)
          .then((list) => {
            this.historyList = list.data.data;
          });
      }
    });
  }
}

export default new AccountsStore();

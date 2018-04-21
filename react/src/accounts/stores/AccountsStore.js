import { observable, action } from 'mobx';
import axios from 'axios';
import { apiRoute } from '../../shared/consts';

class AccountsStore {
  @observable userProfile = {};
  @observable historyList = [];
  @observable profileLoading = false;
  @observable listLoading = false;

  @action fetchUserProfile(userID) {
    this.profileLoading = true;
    const url = userID === 'self' ? `${apiRoute}self`
      : `${apiRoute}users/${userID}`;
    axios.get(url).then((res) => {
      this.profileLoading = false;
      this.userProfile = res.data.data;
      console.log(res.data.data);
      if (res.data.data) {
        axios.get(`${apiRoute}users/${this.userProfile.id}/groups`)
          .then((list) => {
            this.historyList = list.data.data;
          });
      } else {
        window.location.href = `${apiRoute}wechat/login/accounts/self`;
      }
    });
  }

  @action updateUserInf(inf) {
    const { name, resume } = inf;
    const url = `${apiRoute}self`;
    axios.put(url, {
      name,
      resume,
    }).then(() => {
      this.userProfile.name = name;
      this.userProfile.resume = resume;
    });
  }
  
  // @observable greetingsType = '已发送';
  // @observable reqGreetings = [];
  // @observable resGreetings = [];
  // @observable greetings = [];
  // @action changeGreetingsType(type) {
  //   if (type === '已发送') {
  //     this.greetingsType = '已发送';
  //   } else {
  //     this.greetingsType = '待处理';
  //   }
  // }
}

export default new AccountsStore();

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
        const { greetings } = this;
        this.reqGreetings = greetings.filter(greeting => greeting.req);
        this.resGreetings = greetings.filter(greeting => greeting.res);
        if (userID === 'self') {
          console.log('test');
        }
        axios.get(`http://www.cquwinner.com/api/users/${this.userProfile.id}/groups`)
          .then((list) => {
            this.historyList = list.data.data;
          });
      } else {
        axios.get('http://www.cquwinner.com/api/wechat/login/');
      }
    });
  }

  // Greetings
  @observable greetingsType = '发送';
  @observable reqGreetings = [];
  @observable resGreetings = [];
  @observable greetings = [
    {
      req: {  
        id: 'test',
        avatar: 'http://img02.fs.yiban.cn/8467105/avatar/user/200',
        name: '姚欲欣',
        status: '待通过',
        contact: '手机:123&微信:12312&qq:123',
      },
    },
    {
      res: { 
        id: 'test',
        avatar: 'http://img02.fs.yiban.cn/8467105/avatar/user/200',
        name: '甘宇廷',
        status: '待通过',
      },
    },
  ];
  @action changeGreetingsType(type) {
    if (type === '发送') {
      this.greetingsType = '发送';
    } else {
      this.greetingsType = '接收';
    }
  }
}

export default new AccountsStore();

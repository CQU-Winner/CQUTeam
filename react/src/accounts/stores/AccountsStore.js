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
      if (res.data.data) {
        const { greetings } = this;
        this.reqGreetings = greetings.filter(greeting => greeting.req);
        this.resGreetings = greetings.filter(greeting => greeting.res);
        if (userID === 'self') {
          console.log('test');
        }
        axios.get(`${apiRoute}users/${this.userProfile.id}/groups`)
          .then((list) => {
            this.historyList = list.data.data;
          });
      } else {
        axios.get(`${apiRoute}wechat/login/`)
        .catch((err) => {
          console.log(err);
        });
      }
    });
  }

  // Greetings
  @observable greetingsType = '已发送';
  @observable reqGreetings = [];
  @observable resGreetings = [];
  @observable greetings = [
    {
      req: {  
        id: '2VNN85X5M3HE3PYPP824FDXXR6',
        avatar: 'http://img02.fs.yiban.cn/8467105/avatar/user/200',
        name: '姚欲欣',
        status: 'pending',
        contact: '手机:123&微信:12312&qq:123',
      },
    },
    {
      res: { 
        id: 'test',
        avatar: 'http://img02.fs.yiban.cn/8467105/avatar/user/200',
        name: '甘宇廷',
        status: 'pending',
      },
    },
    {
      req: {  
        id: '2VNN85X5M3HE3PYPP824FD2XXR6',
        avatar: 'http://img02.fs.yiban.cn/8467105/avatar/user/200',
        name: '姚欲欣',
        status: 'pending',
        contact: '手机:123&微信:12312&qq:123',
      },
    },
  ];
  @action changeGreetingsType(type) {
    if (type === '已发送') {
      this.greetingsType = '已发送';
    } else {
      this.greetingsType = '待处理';
    }
  }
}

export default new AccountsStore();

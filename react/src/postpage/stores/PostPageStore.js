import { observable, action } from 'mobx';
import axios from 'axios';

class PostPageStore {
  @observable postData = {};

  @action genPostData(data) {
    this.postData.title = data.title;
    this.postData.compet = {
      name: data.cname,
      type: data.ctype,
      url: data.curl,
      ddl: data.cddl,
    };
    this.postData.intro = data.demand;
    this.postData.demand = data.demand;
    this.postData.members = this.members.map(member => member.id);
    this.postData.contact = `${data.phone}&${data.qq}&${data.wechat}`;
  }

  // Groups Store
  @observable members = [];

  @action changeMembers(members) {
    this.members = members;
  }

  @action pushMember(member) {
    this.members.push(member);
  }

  @observable membersSearched = [];

  @action searchingMembers(name) {
    const url = 'http://www.cquwinner.com/api/users';
    axios.get(url, {
      params: {
        name,
      },
    }).then((res) => {
      this.membersSearched = res.data.data;
    });
  }

  // Control Modal 
  @observable modal = false;

  @action closeModal() {
    this.modal = false;
  }

  @action openModal() {
    this.modal = true;
  }
}

export default new PostPageStore();

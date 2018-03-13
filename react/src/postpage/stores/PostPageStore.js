import { observable, action } from 'mobx';
import axios from 'axios';

class PostPageStore {
  @observable postData = {};


  // Groups Store
  @observable members = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
    name: '',
    resume: '',
  }];

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

import { observable, action } from 'mobx';
import axios from 'axios';

class TeamsDetailStore {
  @observable loading = false;
  @observable error = false;
  @observable detail = {};

  @action fetchDetail(id) {
    const url = `http://www.cquwinner.com/api/groups/${id}`;
    axios.get(url).then((res) => {
      this.detail = res.data;
    }).catch(() => {
      this.error = true;
    });
  }
}

export default new TeamsDetailStore();

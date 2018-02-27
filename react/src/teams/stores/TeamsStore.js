import { observable, action } from 'mobx';
import axios from 'axios';

class TeamsStore {
  url = 'http://www.cquwinner.com/api/groups';
  @observable loading = false;
  @observable error = false;
  @observable teamsList = [];

  @action teamsListInit() {
    this.loading = true;
    axios.get(this.url)
      .then((res) => {
        this.teamsList = res.data;
        this.loading = false;
      }).catch(() => {
        this.error = true;
      });
  }
}

export default new TeamsStore();

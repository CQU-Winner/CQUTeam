import { observable, action } from 'mobx';
import axios from 'axios';

class TeamsStore {
  url = 'http://www.cquwinner.com/api/groups';
  @observable loading = false;
  @observable error = false;
  @observable ordering = 'hot';
  @observable teamType = ['全部'];
  @observable teamsList = [];

  @action changeTeamType(type) {
    this.teamType = type;
  }

  @action switchOrdering(type) {
    this.ordering = type;
  }

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

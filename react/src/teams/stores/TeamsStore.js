import { observable, action } from 'mobx';
import axios from 'axios';

class TeamsStore {
  url = 'http://www.cquwinner.com/api/groups';
  @observable loading = false;
  @observable error = false;
  @observable ordering = 'hot';
  @observable wd='';
  @observable page = 0;
  @observable teamType = [''];
  @observable teamsList = [];

  @action changeTeamType(teamtype) {
    this.teamType = teamtype;
    this.fetchTeamsList();
  }

  @action switchOrdering(sort) {
    this.ordering = sort;
    this.fetchTeamsList();
  }

  @action changeWd(wd) {
    this.wd = wd;
    this.fetchTeamsList();
  }

  @action fetchTeamsList() {
    this.loading = true;
    const [wd, sort, type, page] = [this.wd, this.ordering, this.teamType[0], this.page];
    axios.get(this.url, {
      params: {
        wd,
        sort,
        type,
        page,
      },
    })
      .then((res) => {
        this.teamsList = res.data;
        this.loading = false;
      }).catch(() => {
        this.error = true;
      });
  }
}

export default new TeamsStore();

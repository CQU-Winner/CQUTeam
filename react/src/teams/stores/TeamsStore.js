import { observable, action } from 'mobx';
import axios from 'axios';
import { Observable } from 'rx';

class TeamsStore {
  url = 'http://www.cquwinner.com/api/groups';
  @observable loading = false;
  @observable error = false;
  @observable ordering = 'hot';
  @Observable page = 0;
  @observable teamType = ['全部'];
  @observable teamsList = [];

  @action changeTeamType(type) {
    this.teamType = type;
    this.fetchTeamsList(this.ordering, this.page, type);
  }

  @action switchOrdering(sort) {
    this.ordering = sort;
    this.fetchTeamsList();
  }

  @action fetchTeamsList(sort = 'late', page = 0, ...other) {
    this.loading = true;
    const params = {};
    for (const i of other) {
      params.i = i;
    }
    axios.get(this.url, {
      params: {
        sort,
        page,
        ...params,
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

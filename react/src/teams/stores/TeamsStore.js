import { observable, action, computed } from 'mobx';
import axios from 'axios';
import { Promise } from 'core-js';
import { apiRoute } from '../../shared/consts';

class TeamsStore {
  url = `${apiRoute}groups`;
  @observable loading = false;
  @observable error = false;
  @observable ordering = 'hot';
  @observable wd='';
  @observable page = 1;
  @observable teamType = [''];
  @observable teamsList = [];

  @computed get hasMore() {
    return this.teamsList.data && this.teamsList.data.length > 10;
  }

  @action changePage(page) {
    this.page = page;
    this.fetchTeamsList();
  }

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

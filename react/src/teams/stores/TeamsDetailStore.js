import { observable, action } from 'mobx';
import axios from 'axios';
import { apiRoute } from '../../shared/consts';

class TeamsDetailStore {
  @observable loading = false;
  @observable error = false;
  @observable detail = {};

  @action fetchDetail(id) {
    const url = `${apiRoute}groups/${id}`;
    axios.get(url).then((res) => {
      this.detail = res.data;
    }).catch(() => {
      this.error = true;
    });
  }

  @action deletePost(teamId) {
    const url = `${apiRoute}groups/${teamId}`;
    return axios.delete(url);
  }
}

export default new TeamsDetailStore();

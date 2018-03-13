import { observable } from 'mobx';

class PostPageStore {
  @observable postData = {};
}

export default new PostPageStore();

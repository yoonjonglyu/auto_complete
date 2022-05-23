import Axios from 'axios';

class HackerNewsApi {
  apiUri: string;
  constructor() {
    this.apiUri = 'https://hn.algolia.com/api/v1/';
  }
  async getSearchItem(id: string){
    const res = await Axios.get(`${this.apiUri}item/${id}`);

    return res;
  }
  async getSearchKeyword(keyword: string){
    const res = await Axios.get(`${this.apiUri}search?query=${keyword}`);

    return res;
  }
}

export default HackerNewsApi;

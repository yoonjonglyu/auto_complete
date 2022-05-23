import Axios from 'axios';

class HackerNewsApi {
  apiUri: string;
  constructor() {
    this.apiUri = 'https://hn.algolia.com/api/v1/';
  }
  async getSearchItem(id: string) {
    const { data } = await Axios.get(`${this.apiUri}items/${id}`);

    return data;
  }
  async getSearchKeyword(keyword: string) {
    const { data } = await Axios.get(`${this.apiUri}search?query=${keyword}`);

    return data.hits || [];
  }
}

export default HackerNewsApi;

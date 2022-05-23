import _ from 'underscore';

import SearchApi from '../api/search';

export const debounsSearch = _.debounce(
  async (keyword: string, callback: Function) => {
    const Api = new SearchApi();
    const data = await Api.getSearchKeyword(keyword);
    callback(data);
  },
  300
);
export const debounsItem = _.debounce(
  async (currentIdx: string, callback: Function) => {
    const Api = new SearchApi();
    const data = await Api.getSearchItem(currentIdx);
    callback(data);
  },
  200
);

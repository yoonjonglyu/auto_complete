import { atom } from 'recoil';

const SearchKeywordState = atom({
  key: 'searchKeyword',
  default: [],
});

export default SearchKeywordState;
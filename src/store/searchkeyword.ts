import { atom } from 'recoil';

const SearchKeywordState = atom<any>({
  key: 'searchKeyword',
  default: [],
});

export default SearchKeywordState;

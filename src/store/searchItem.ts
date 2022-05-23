import { atom } from 'recoil';

const SearchItemState = atom<any>({
  key: 'searchItem',
  default: {},
});

export default SearchItemState;

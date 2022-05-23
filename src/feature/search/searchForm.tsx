import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import SearchKeywordState from '../../store/searchkeyword';
import SearchItemState from '../../store/searchItem';

import { debounsSearch, debounsItem } from '../../lib/hooks/search';

interface SearchFormProps {
  currentIdx: number;
  handleSelectIdx: (value: 'up' | 'down' | 'reset') => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  currentIdx,
  handleSelectIdx,
}) => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(SearchKeywordState);
  const setSearchItem = useSetRecoilState(SearchItemState);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchKeyword[currentIdx]) {
      await debounsItem(searchKeyword[currentIdx].objectID, setSearchItem);
    }
  };
  const handleSearchKeyword = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    await debounsSearch(e.target.value, setSearchKeyword);
    handleSelectIdx('reset');
  };
  const handleSelectItem = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      handleSelectIdx('up');
    } else if (e.key === 'ArrowDown') {
      handleSelectIdx('down');
    } else if (e.key === 'Enter') {
      if (searchKeyword[currentIdx]) {
        await debounsItem(searchKeyword[currentIdx].objectID, setSearchItem);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={handleSearchKeyword}
        onKeyUp={handleSelectItem}
      />
    </form>
  );
};

export default SearchForm;

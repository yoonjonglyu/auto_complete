import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Styled from 'styled-components';

import SearchKeywordState from '../../store/searchkeyword';
import SearchItemState from '../../store/searchItem';

import { debounsSearch, debounsItem } from '../../lib/hooks/search';

const Form = Styled.form`
  width: 90%;
  margin: 0 auto;
`;
const SearchBox = Styled.input`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  font-size: 1.2rem;
`

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
    <Form onSubmit={onSubmit}>
      <SearchBox
        type="text"
        onChange={handleSearchKeyword}
        onKeyUp={handleSelectItem}
      />
    </Form>
  );
};

export default SearchForm;

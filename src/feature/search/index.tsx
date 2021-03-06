import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Styled from 'styled-components';

import SearchKeywordState from '../../store/searchkeyword';

import SearchForm from './searchForm';
import SearchKeyword from './searchKeyword';
import SearchResult from './searchResult';

const Main = Styled.main`
  width: 80%;
  margin: 0 auto;
`;
const Title = Styled.h1`
  text-align: center;
`;

interface SearchFeatureProps {}

const SearchFeature: React.FC<SearchFeatureProps> = () => {
  /** 이부분 커스텀훅으로 뺴도 이상 없어보인다. */
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const searchkeywords = useRecoilValue(SearchKeywordState);

  const handleCurrentIdx = (value: 'up' | 'down' | 'reset') => {
    if (value === 'reset') {
      setCurrentKeyword(0);
    } else if (value === 'up') {
      setCurrentKeyword(prev =>
        prev - 1 > -1 ? prev - 1 : searchkeywords.length - 1
      );
    } else {
      setCurrentKeyword(prev =>
        prev + 1 < searchkeywords.length ? prev + 1 : 0
      );
    }
  };

  return (
    <Main>
      <Title>검색 콤보 박스</Title>
      <SearchForm
        currentIdx={currentKeyword}
        handleSelectIdx={handleCurrentIdx}
      />
      <SearchKeyword
        currentIdx={currentKeyword}
        handleCurrentIdx={setCurrentKeyword}
      />
      <SearchResult />
    </Main>
  );
};

export default SearchFeature;

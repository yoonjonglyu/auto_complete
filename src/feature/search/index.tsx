import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import searchKeywordState from '../../store/searchkeyword';

import SearchForm from './searchForm';
import SearchKeyword from './searchKeyword';

interface SearchFeatureProps {}

const SearchFeature: React.FC<SearchFeatureProps> = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const searchkeywords = useRecoilValue(searchKeywordState);
  
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
    <main>
      <h1>검색 콤보 박스</h1>
      <SearchForm handleSelectIdx={handleCurrentIdx} />
      <SearchKeyword currentIdx={currentKeyword} />
    </main>
  );
};

export default SearchFeature;

import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import SearchKeywordState from '../../store/searchkeyword';

import SearchForm from './searchForm';
import SearchKeyword from './searchKeyword';

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
    <main>
      <h1>검색 콤보 박스</h1>
      <SearchForm
        currentIdx={currentKeyword}
        handleSelectIdx={handleCurrentIdx}
      />
      <SearchKeyword currentIdx={currentKeyword} />
    </main>
  );
};

export default SearchFeature;

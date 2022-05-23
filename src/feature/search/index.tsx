import React, { useState } from 'react';

import SearchForm from './searchForm';
import SearchKeyword from './searchKeyword';

interface SearchFeatureProps {}

const SearchFeature: React.FC<SearchFeatureProps> = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);

  const handleCurrentIdx = (value: number) => {
    setCurrentKeyword(value);
  };

  return (
    <main>
      <h1>검색 콤보 박스</h1>
      <SearchForm />
      <SearchKeyword />
    </main>
  );
};

export default SearchFeature;

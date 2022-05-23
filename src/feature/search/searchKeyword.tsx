import React from 'react';
import { useRecoilState } from 'recoil';

import searchKeywordState from '../../store/searchkeyword';

interface SearchKeywordProps {}

const SearchKeywordForm: React.FC<SearchKeywordProps> = () => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  return (
    <section>
      <ul>
        {searchKeyword.map((keyword, idx) => (
          <li key={idx}>{keyword}</li>
        ))}
      </ul>
    </section>
  );
};

export default SearchKeywordForm;

import React from 'react';
import { useRecoilState } from 'recoil';

import searchKeywordState from '../../store/searchkeyword';

interface SearchKeywordProps {
  currentIdx: number;
}

const SearchKeywordForm: React.FC<SearchKeywordProps> = ({ currentIdx }) => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  return (
    <section>
      <ul>
        {searchKeyword.map((keyword, idx) => (
          <li
            key={idx}
            style={{ background: currentIdx === idx ? 'cyan' : '' }}
          >
            {keyword}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchKeywordForm;

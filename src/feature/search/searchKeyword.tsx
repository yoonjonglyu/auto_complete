import React from 'react';
import { useRecoilValue } from 'recoil';

import searchKeywordState from '../../store/searchkeyword';

interface SearchKeywordProps {
  currentIdx: number;
}

const SearchKeyword: React.FC<SearchKeywordProps> = ({ currentIdx }) => {
  const searchKeyword = useRecoilValue(searchKeywordState);

  return (
    <section>
      <ul>
        {searchKeyword.map((keyword: any, idx: number) => (
          <li
            key={idx}
            style={{ background: currentIdx === idx ? 'cyan' : '' }}
            dangerouslySetInnerHTML={{
              __html: keyword._highlightResult.title.value,
            }}
          ></li>
        ))}
      </ul>
    </section>
  );
};

export default SearchKeyword;

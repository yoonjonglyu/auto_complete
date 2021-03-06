import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Styled, { createGlobalStyle } from 'styled-components';

import SearchKeywordState from '../../store/searchkeyword';
import SearchItemState from '../../store/searchItem';

import { debounsItem } from '../../lib/hooks/search';

const KeywordStyle = createGlobalStyle`
  em {
    background: yellow;
  }
`;
const Ul = Styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style: none;
`;
const Li = Styled.li`
  padding: 3px;
  border-bottom: 1px solid gray;
`;

interface SearchKeywordProps {
  currentIdx: number;
  handleCurrentIdx: (value: number) => void;
}

const SearchKeyword: React.FC<SearchKeywordProps> = ({
  currentIdx,
  handleCurrentIdx,
}) => {
  const searchKeyword = useRecoilValue(SearchKeywordState);
  const setSearchItem = useSetRecoilState(SearchItemState);

  const handleItem = async (id: string, idx: number) => {
    handleCurrentIdx(idx);
    await debounsItem(id, setSearchItem);
  };

  return (
    <section>
      <KeywordStyle />
      <Ul>
        {searchKeyword.map((keyword: any, idx: number) => (
          <Li
            key={idx}
            style={{ background: currentIdx === idx ? 'cyan' : '' }}
            dangerouslySetInnerHTML={{
              __html: keyword._highlightResult.title.value,
            }}
            onClick={() => handleItem(keyword.objectID, idx)}
          />
        ))}
        {searchKeyword.length === 0 && <Li>매칭 되는 검색 결과가 없습니다.</Li>}
      </Ul>
    </section>
  );
};

export default SearchKeyword;

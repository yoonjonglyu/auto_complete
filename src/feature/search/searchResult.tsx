import React from 'react';
import { useRecoilValue } from 'recoil';

import SearchItemState from '../../store/searchItem';

interface SearchResultProps {}

const SearchResult: React.FC<SearchResultProps> = () => {
  const searchItem = useRecoilValue(SearchItemState);
  
  return (
    <section>
      {searchItem.id && (
        <ul>
          <li>
            <a href={searchItem.url} target="_blank">
              title: {searchItem.title}
            </a>
          </li>
          <li>author: {searchItem.author}</li>
          <li>points: {searchItem.points}</li>
          <li>
            1st depth comments:{' '}
            {searchItem.children.length > 0 ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: searchItem.children[0].text,
                }}
              ></span>
            ) : (
              <span>Null</span>
            )}
          </li>
        </ul>
      )}
    </section>
  );
};

export default SearchResult;

import React, { useState } from 'react';

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = () => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
  };
  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSelectItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      console.log('up');
    } else if (e.key === 'ArrowDown') {
      console.log('down');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleSearchKeyword}
        onKeyUp={handleSelectItem}
      />
    </form>
  );
};

export default SearchForm;

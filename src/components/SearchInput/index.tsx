import { useState } from 'react';
import { Container } from './styles';

interface SearchInputProps {
  setSearchInput: (value: string) => void;
  searchValue: string;
  placeholderLabel: string;
}

function SearchInput({ searchValue, setSearchInput, placeholderLabel }: SearchInputProps) {

  return (
    <Container
      placeholder={placeholderLabel}
      placeholderTextColor="#FFF"
      value={searchValue}
      onChangeText={setSearchInput}
    />
  );
};

export default SearchInput;

import { useState } from 'react';
import { Container } from './styles';

interface SearchInputProps {
  setSearchInput: (value: string) => void;
  searchValue: string;
}

function SearchInput({ searchValue, setSearchInput }: SearchInputProps) {

  return (
    <Container
      placeholder='Busque pelo nome da série'
      placeholderTextColor="#FFF"
      value={searchValue}
      onChangeText={setSearchInput}
    />
  );
};

export default SearchInput;

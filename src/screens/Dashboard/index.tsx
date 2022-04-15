import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { TVShowsDataResponse } from '../../global/interfaces/tvshowdata';
import api from '../../services/api';

import {
  Container,
  Footer,
  AmountOfTvShows,
  PaginationContent,
  PaginationButton,
  PaginationLabel,
} from './styles';

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [tvShows, setTvShows] = useState<TVShowsDataResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await api.get<TVShowsDataResponse[]>(`shows?page=${currentPage}`);
      setTvShows(results.data);

      fetchHasNextData();
    }

    const fetchHasNextData = async () => {
      const hasNextResults = await api.get<TVShowsDataResponse[]>(`shows?page=${currentPage + 1}`);

      setHasNext(!!hasNextResults);
    }

    fetchData();
  }, [])

  return (
    <Container>
      <Header />
      <SearchInput />

      <FlatList
        data={tvShows}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CardTvShowItem data={item} key={item.id} />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Footer>
        <AmountOfTvShows>{tvShows.length} series</AmountOfTvShows>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationButton>
              <PaginationLabel>Voltar</PaginationLabel>
            </PaginationButton>
          )}
          {hasNext && (
            <PaginationButton>
              <PaginationLabel>Avançar</PaginationLabel>
            </PaginationButton>
          )}
        </PaginationContent>
      </Footer>
    </Container>
  );
};

export default Dashboard;

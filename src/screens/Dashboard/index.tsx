import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { TVShowsDataResponse, TVShowSearchDataResponse } from '../../global/interfaces/tvshowdata';
import api from '../../services/api';

import {
  Container,
  Footer,
  AmountOfTvShows,
  PaginationContent,
  PaginationButton,
  PaginationLabel,
  SearchBox,
  CleanButton,
} from './styles';

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [tvShows, setTvShows] = useState<TVShowsDataResponse[]>([]);

  useEffect(() => {
    setTvShows([]);

    const fetchData = async () => {
      const results = await api.get<TVShowsDataResponse[]>(`shows?page=${currentPage}`);

      const formattedData = results.data.map(item => ({
        id: item.id,
        url: item.url,
        name: item.name,
        genres: item.genres,
        status: item.status,
        image: item.image,
        averageRuntime: item.averageRuntime,
      }))

      setTvShows(formattedData);
      fetchHasNextData();
    }

    const fetchHasNextData = async () => {
      const hasNextResults = await api.get<TVShowsDataResponse[]>(`shows?page=${currentPage + 1}`);


      const formattedData = hasNextResults.data.map(item => ({
        id: item.id,
        url: item.url,
        name: item.name,
        genres: item.genres,
        status: item.status,
        image: item.image,
        averageRuntime: item.averageRuntime,
      }))

      setHasNext(!!formattedData);
    }

    const fetchDataBySearchValue = async () => {
      const value = searchValue.toLocaleLowerCase();

      const results = await api.get<TVShowSearchDataResponse[]>(`search/shows?q=${value}&page=${currentPage}`);

      const formattedData = results.data.map(item => ({
        id: item.show.id,
        url: item.show.url,
        name: item.show.name,
        genres: item.show.genres,
        status: item.show.status,
        image: item.show.image,
        averageRuntime: item.show.averageRuntime,
      }));

      setTvShows(formattedData);
      setHasNext(false);
    }

    if (searchValue === "") {
      fetchData();
    } else {
      setCurrentPage(1);

      fetchDataBySearchValue();
    }
  }, [currentPage, searchValue])

  function handleSetPreviousPage() {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  }

  function handleSetNextPage() {
    setCurrentPage(currentPage + 1)
  }

  function handleClearSearchInput() {
    setCurrentPage(1);
    setSearchValue("");
  }

  return (
    <Container>
      <Header
        title="Olá, seja bem-vindo(a), 🤞"
        subtitle="Aqui você organiza as suas séries da melhor forma"
      />
      <SearchBox>
        <SearchInput
          searchValue={searchValue}
          setSearchInput={setSearchValue}
          placeholderLabel="Busque pelo nome da série"
        />
        <CleanButton onPress={handleClearSearchInput}>
          <MaterialIcons name="clear" size={20} color="#FFF" />
        </CleanButton>
      </SearchBox>

      {
        tvShows && (
          <FlatList
            data={tvShows}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <CardTvShowItem data={item} key={item.id} />
            )}
            showsVerticalScrollIndicator={false}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={50}
          />
        )
      }

      <Footer>
        <AmountOfTvShows>{tvShows.length} series</AmountOfTvShows>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationButton onPress={handleSetPreviousPage}>
              <PaginationLabel>Voltar</PaginationLabel>
            </PaginationButton>
          )}
          {hasNext && (
            <PaginationButton onPress={handleSetNextPage}>
              <PaginationLabel>Avançar</PaginationLabel>
            </PaginationButton>
          )}
        </PaginationContent>
      </Footer>
    </Container>
  );
};

export { Dashboard };

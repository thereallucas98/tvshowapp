import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import { TVShowsDataResponse } from '../../global/interfaces/tvshowdata';
import api from '../../services/api';

import { Container, MainList } from './styles';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [tvShows, setTvShows] = useState<TVShowsDataResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await api.get<TVShowsDataResponse[]>(`shows?page=${currentPage}`);

      console.log("results", results);
    }

    fetchData();
  }, [])

  return (
    <Container>
      <Header />
      <SearchInput />

      <CardTvShowItem />

      {/* <MainList 
        data={tvShows}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      /> */}
    </Container>
  );
};

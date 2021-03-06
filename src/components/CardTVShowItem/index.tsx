import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TVShowsDataResponse } from '../../global/interfaces/tvshowdata';
import { Container, ImageBackgroundContent, InfoContent, Title, Genre, GenreLabel, Duration } from './styles';

interface CardTvShowItemProps {
  data: TVShowsDataResponse;
}

function CardTvShowItem({ data }: CardTvShowItemProps) {
  const navigation = useNavigation();

  function handleNavigateToDetail(id: number) {
    // Problemas com Versão do React Navigation V6 com React Navitve V63 ou superior
    navigation.navigate('Show' as never, { id } as never);
  }
  return (
    <Container onPress={() => handleNavigateToDetail(data.id)}>
      {
        data?.image?.original ? (
          <ImageBackgroundContent source={{ uri: data?.image?.original }} resizeMode="cover" />
        ) : data?.image?.medium ? (
          <ImageBackgroundContent source={{ uri: data?.image?.medium }} resizeMode="cover" />
        ) : (
          <ImageBackgroundContent
            source={{
              uri: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }} resizeMode="cover"
          />
        )
      }
      <InfoContent>
        <Title>{data.name}</Title>
        <FlatList
          horizontal
          data={data.genres}
          keyExtractor={item => item}
          renderItem={({ item }) => {
            return (
              <Genre>
                <GenreLabel>{item}</GenreLabel>
              </Genre>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
        <Duration>{data.averageRuntime} minutes</Duration>
      </InfoContent>
    </Container>
  );
};

export default CardTvShowItem;

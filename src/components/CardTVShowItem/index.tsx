import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { TVShowsDataResponse } from '../../global/interfaces/tvshowdata';
import { Container, ImageBackgroundContent, InfoContent, Title, Genre, GenreLabel, Duration } from './styles';

interface CardTvShowItemProps {
  data: TVShowsDataResponse;
}

function CardTvShowItem({ data }: CardTvShowItemProps) {
  return (
    <Container>
      <ImageBackgroundContent source={{ uri: data.image.original }} resizeMode="cover" />
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

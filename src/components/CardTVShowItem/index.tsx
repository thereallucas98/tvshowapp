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
      {
        data?.image?.original ? (
          <ImageBackgroundContent source={{ uri: data?.image?.original }} resizeMode="cover" />
        ) : data?.image?.medium ? (
          <ImageBackgroundContent source={{ uri: data?.image?.medium }} resizeMode="cover" />
        ) : (
          <ImageBackgroundContent source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_image_available.svg&psig=AOvVaw00ae7OIZ8Tqy6nQPah8GQS&ust=1650201135801000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDQj7rUmPcCFQAAAAAdAAAAABAJ" }} resizeMode="cover" />
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

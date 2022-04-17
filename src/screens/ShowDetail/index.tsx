import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, Text } from 'react-native';

import {
  EpisodeData,
  SeasonData,
  TVShowByIndexData
} from '../../global/interfaces/tvshowdata';

import SeasonItem from '../../components/SeasonItem';
import api from '../../services/api';

import { useFavoriteTvShows } from '../../store/useFavoriteShows';

import {
  Container,
  ImageBackgroundContent,
  Main,
  InfoContent,
  InfoGroup,
  InfoLabel,
  InfoDescription,
  FlatListContent,
  Genre,
  GenreLabel,
  FavoriteButton,
  FavoriteText
} from './styles';

interface Params {
  id: number;
}


function ShowDetail() {
  const [isMyFavorite, setIsMyFavorite] = useState(false);
  const [show, setShow] = useState<TVShowByIndexData>();
  const [seasons, setSeasons] = useState<SeasonData[]>([]);

  const { favorites, favoriteTvShow } = useFavoriteTvShows();

  const route = useRoute();

  const { id } = route.params as Params;

  useEffect(() => {
    const fetchShowData = async () => {
      const response = await api.get<TVShowByIndexData>(`shows/${id}`);

      const formattedData = {
        id: response.data.id,
        url: response.data.url,
        name: response.data.name,
        genres: response.data.genres,
        status: response.data.status,
        image: response.data.image,
        averageRuntime: response.data.averageRuntime,
        rating: response.data.rating,
        schedule: response.data.schedule,
        summary: response.data.summary,
      }

      setShow(formattedData);

      if (favorites) {
        const isFavorited = favorites.find(item => item.id === formattedData.id);
        setIsMyFavorite(!!isFavorited);
      }
    }

    const fetchSeasonsData = async () => {
      const response = await api.get<EpisodeData[]>(`shows/${id}/episodes`);

      const formattedData: SeasonData[] = response.data.reduce((acc, item) => {
        const index = acc.findIndex(accItem => accItem.season === item.season);

        if (index !== -1) {
          acc[index].episodes = [
            ...acc[index].episodes,
            {
              id: item.id,
              name: item.name,
              image: item.image,
              number: item.number,
              url: item.url,
              rating: item.rating,
              summary: item.summary,
              runtime: item.runtime,
              season: item.season,
            }
          ]
        } else {
          acc = [
            ...acc,
            {
              season: item.season,
              episodes: [{
                id: item.id,
                name: item.name,
                image: item.image,
                number: item.number,
                url: item.url,
                rating: item.rating,
                summary: item.summary,
                runtime: item.runtime,
                season: item.season,
              }]
            }
          ]
        }

        return acc;
      }, [] as SeasonData[]);

      setSeasons(formattedData);
    }

    fetchShowData();
    fetchSeasonsData();
  }, [])

  function handleToFavorite(data: TVShowByIndexData) {
    favoriteTvShow(data);
    setIsMyFavorite(!isMyFavorite);
  }

  return (
    <Container>
      {
        show && seasons && (
          <>
            {
              show?.image.original ? (
                <ImageBackgroundContent source={{ uri: show?.image.original }} resizeMode="cover" />
              ) : show?.image.medium ? (
                <ImageBackgroundContent source={{ uri: show?.image.medium }} resizeMode="cover" />
              ) : (
                <ImageBackgroundContent
                  source={{
                    uri: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  }} resizeMode="cover"
                />
              )
            }

            <Main>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Nome</InfoLabel>
                  <InfoDescription>{show.name}</InfoDescription>
                </InfoGroup>
              </InfoContent>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Status</InfoLabel>
                  <InfoDescription>{show.status}</InfoDescription>
                </InfoGroup>
              </InfoContent>
            </Main>

            <InfoGroup>
              <InfoLabel>Resumo</InfoLabel>
              <InfoDescription>{show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</InfoDescription>
            </InfoGroup>

            {
              isMyFavorite ? (
                <FavoriteButton onPress={() => handleToFavorite(show)}>
                  <MaterialIcons name="favorite" size={32} color="#A370F7" />
                  <FavoriteText>Retirar da Lista de Favoritos</FavoriteText>
                </FavoriteButton>
              ) : (
                <FavoriteButton onPress={() => handleToFavorite(show)}>
                  <MaterialIcons name="favorite-border" size={32} color="#A370F7" />
                  <FavoriteText>Adiconar à Lista de Favoritos</FavoriteText>
                </FavoriteButton>
              )
            }

            <Main>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Nota</InfoLabel>
                  <InfoDescription>{show.rating.average ? show.rating.average : "Unkown"}</InfoDescription>
                </InfoGroup>
              </InfoContent>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Duração P/ Episódio</InfoLabel>
                  <InfoDescription>{show.averageRuntime}</InfoDescription>
                </InfoGroup>
              </InfoContent>
            </Main>

            <FlatListContent>
              <InfoLabel>Gênero</InfoLabel>
              <FlatList
                horizontal
                data={show.genres}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                  return (
                    <Genre>
                      <GenreLabel>{item}</GenreLabel>
                    </Genre>
                  );
                }}
                showsHorizontalScrollIndicator={false}
              />
            </FlatListContent>

            <FlatListContent>
              <InfoLabel>Exibido às {show.schedule.time} nos dias:</InfoLabel>
              <FlatList
                horizontal
                data={show.schedule.days}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                  return (
                    <Genre>
                      <GenreLabel>{item}</GenreLabel>
                    </Genre>
                  );
                }}
                showsHorizontalScrollIndicator={false}
              />
            </FlatListContent>

            {
              seasons.map(item => (
                <SeasonItem data={item} key={item.season} />
              ))
            }
          </>
        )
      }
    </Container>
  );
};

export default ShowDetail;

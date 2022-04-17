import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native';

import { EpisodeData } from '../../global/interfaces/tvshowdata';
import api from '../../services/api';

import { Container, GoBackToHomeButton, GoBackToHomeText, ImageBackgroundContent, InfoContent, InfoDescription, InfoGroup, InfoLabel, Main } from './styles';

interface Params {
  id: number;
}

function EpisodeDetail() {
  const [episode, setEpisode] = useState<EpisodeData>();

  const route = useRoute();

  const { id } = route.params as Params;

  const navigation = useNavigation();

  function handleNavigateToTop() {
    // Problemas com Versão do React Navigation V6 com React Navitve V63 ou superior
    navigation.dispatch(StackActions.popToTop());
  }

  useEffect(() => {
    const fetchEpisodeData = async () => {
      const response = await api.get<EpisodeData>(`episodes/${id}`);

      const formattedData = {
        id: response.data.id,
        url: response.data.url,
        name: response.data.name,
        season: response.data.season,
        number: response.data.number,
        runtime: response.data.runtime,
        rating: response.data.rating,
        image: response.data.image,
        summary: response.data.summary,
      }

      setEpisode(formattedData);
    }
    fetchEpisodeData();

  }, [])

  return (
    <Container>
      {
        episode && (
          <>
            {
              episode?.image.original ? (
                <ImageBackgroundContent source={{ uri: episode?.image.original }} resizeMode="cover" />
              ) : episode?.image.medium ? (
                <ImageBackgroundContent source={{ uri: episode?.image.medium }} resizeMode="cover" />
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
                  <InfoDescription>{episode.name}</InfoDescription>
                </InfoGroup>
              </InfoContent>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Duração</InfoLabel>
                  <InfoDescription>{episode.runtime} minutes</InfoDescription>
                </InfoGroup>
              </InfoContent>
            </Main>

            <InfoGroup>
              <InfoLabel>Resumo</InfoLabel>
              <InfoDescription>{episode.summary.replace(/<\/?[^>]+(>|$)/g, "")}</InfoDescription>
            </InfoGroup>

            <Main>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Nota</InfoLabel>
                  <InfoDescription>{episode.rating.average ? episode.rating.average : "Unkown"}</InfoDescription>
                </InfoGroup>
              </InfoContent>
            </Main>

            <GoBackToHomeButton onPress={handleNavigateToTop}>
              <GoBackToHomeText>Voltar</GoBackToHomeText>
            </GoBackToHomeButton>
          </>
        )
      }
    </Container>
  );
};

export default EpisodeDetail;

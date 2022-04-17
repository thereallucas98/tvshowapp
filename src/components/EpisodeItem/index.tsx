import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { EpisodeData } from '../../global/interfaces/tvshowdata';

import {
  Container,
  LabelEpisode,
  GoToDetailEpisodeButton,
  GoToDetailEpisodeText
} from './styles';

interface EpisodeItemProps {
  data: EpisodeData;
}

function EpisodeItem({ data }: EpisodeItemProps) {
  const navigation = useNavigation();

  function handleNavigateToDetail(id: number) {
    // Problemas com Versão do React Navigation V6 com React Navitve V63 ou superior
    navigation.navigate('Episode' as never, { id } as never);
  }

  return (
    <Container>
      {/* {
        data.image.original ? (
          <ImageBackgroundEpisode source={{ uri: data.image.original }} resizeMode="cover" />
        ) : data.image.medium ? (
          <ImageBackgroundEpisode source={{ uri: data.image.medium }} resizeMode="cover" />
        ) : (
          <ImageBackgroundEpisode
            source={{
              uri: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }} resizeMode="cover"
          />
        )
      } */}
      <LabelEpisode>{data.number} - {data.name}</LabelEpisode>
      <GoToDetailEpisodeButton onPress={() => handleNavigateToDetail(data.id)}>
        <GoToDetailEpisodeText>Ver Mais!</GoToDetailEpisodeText>
      </GoToDetailEpisodeButton>
    </Container>
  );
};

export default EpisodeItem;

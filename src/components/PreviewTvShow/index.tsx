import { useNavigation } from '@react-navigation/native';
import { ShowData } from '../../global/interfaces/peopledata';

import { Container, ImageBackgroundContent, Name } from './styles';

interface PreviewTvShowProps {
  data: ShowData;
}

function PreviewTvShow({ data }: PreviewTvShowProps) {
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
      <Name>{data.name}</Name>
    </Container>
  );
};

export default PreviewTvShow;

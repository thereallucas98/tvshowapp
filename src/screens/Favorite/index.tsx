import { FlatList, Text } from 'react-native';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
import { useFavoriteTvShows } from '../../store/useFavoriteShows';
import { Container, EmojiIcon, HasNoFavoritesShow, TextDescription, Title } from './styles';

function Favorite() {
  const { favorites, favoriteTvShow } = useFavoriteTvShows();

  return (
    <Container>
      <Header
        title='Your Favorites'
        subtitle='Aqui você terá as suas séries favoritas'
      />

      {favorites && favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CardTvShowItem data={item} key={item.id} />
          )}
        />
      ) : (
        <HasNoFavoritesShow>
          <EmojiIcon>😳</EmojiIcon>
          <TextDescription>Não há Séries favoritadas</TextDescription>
        </HasNoFavoritesShow>
      )}
    </Container>
  );
};

export { Favorite };

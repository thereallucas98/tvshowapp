import { FlatList } from 'react-native';
import { TVShowByIndexData } from '../../global/interfaces/tvshowdata';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { Container, EmojiIcon, HasNoFavoritesShow, TextDescription } from './styles';

function Favorite() {
  const tvShowsFavorites = useSelector<RootState, TVShowByIndexData[]>(state => state.tvShow.items);
  return (
    <Container>
      <Header
        title='Your Favorites'
        subtitle='Aqui você terá as suas séries favoritas'
      />

      {tvShowsFavorites && tvShowsFavorites.length > 0 ? (
        <FlatList
          data={tvShowsFavorites}
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

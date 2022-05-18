import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
import { TVShowByIndexData } from '../../global/interfaces/tvshowdata';
import { IState } from '../../store';
import { useFavoriteTvShows } from '../../store/useFavoriteShows';
import { Container, EmojiIcon, HasNoFavoritesShow, TextDescription } from './styles';

function Favorite() {
  const tvShowsFavorites = useSelector<IState, TVShowByIndexData[]>(state => state.tvShows.items);

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

import { FlatList } from 'react-native';
// import { TVShowByIndexData } from '../../global/interfaces/tvshowdata';
import CardTvShowItem from '../../components/CardTVShowItem';
import { Header } from '../../components/Header';
// import { useSelector } from 'react-redux';
// import { RootState } from "../../redux/store";
import { Container, EmojiIcon, HasNoFavoritesShow, TextDescription } from './styles';
import { tvShowStore } from '../../mobx/tvShows';
import { observer } from 'mobx-react';

function Favorite() {
  // const tvShowsFavorites = useSelector<RootState, TVShowByIndexData[]>(state => state.tvShow.items);
  return (
    <Container>
      <Header
        title='Meus Favoritos'
        subtitle='Aqui você terá as suas séries favoritas'
      />

      {tvShowStore.getFavoriteTvShows() && tvShowStore.getFavoriteTvShows().length > 0 ? (
        <FlatList
          data={tvShowStore.getFavoriteTvShows()}
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

export default observer(Favorite);

import { TVShowsDataResponse } from '../../global/interfaces/tvshowdata';
import { Container, ImageBackgroundContent, Title, Genre, Duration } from './styles';

function CardTvShowItem({ name, genres, image, id, averageRuntime, status, url }: TVShowsDataResponse) {
  return (
    <Container>
      <ImageBackgroundContent source={{ uri: image.original }} resizeMode="cover" />

    </Container>
  );
};

export default CardTvShowItem;

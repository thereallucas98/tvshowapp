import { ShowData } from '../../global/interfaces/peopledata';

import { Container, ImageBackgroundContent, Name } from './styles';

interface PreviewTvShowProps {
  data: ShowData;
}

function PreviewTvShow({ data }: PreviewTvShowProps) {
  return (
    <Container>
      <ImageBackgroundContent source={{ uri: data?.image.original }} resizeMode="center" />
      <Name>{data.name}</Name>
    </Container>
  );
};

export default PreviewTvShow;

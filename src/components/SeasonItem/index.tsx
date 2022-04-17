import { SafeAreaView } from 'react-native';
import { SeasonData } from '../../global/interfaces/tvshowdata';
import EpisodeItem from '../EpisodeItem';

import { Container, LabelSeason } from './styles';

interface SeasonItemProps {
  data: SeasonData;
}

function SeasonItem({ data }: SeasonItemProps) {
  return (
    <Container>
      <LabelSeason>Temporada - {data.season}</LabelSeason>
      {
        data.episodes && (
          <SafeAreaView>
            {
              data.episodes.map(item => (
                <EpisodeItem data={item} key={item.id} />
              ))
            }
            {/* <FlatList
              data={data.episodes}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <EpisodeItem data={item} key={item.id} />
              )}

              showsVerticalScrollIndicator={false}
              maxToRenderPerBatch={10}
              updateCellsBatchingPeriod={50}
            /> */}
          </SafeAreaView>
        )
      }
    </Container>
  );
};

export default SeasonItem;

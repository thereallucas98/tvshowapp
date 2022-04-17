import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';


import { PeopleDataResponse, TVShowSearchDataResponse } from '../../global/interfaces/peopledata';
import { Header } from '../../components/Header';
import SearchInput from '../../components/SearchInput';

import {
  Container,
  SearchBox,
  CleanButton,
  NotFoundPoeple,
  EmojiIcon,
  TextDescription,
  Footer,
  AmountOfTvShows
} from './styles';
import api from '../../services/api';
import { FlatList } from 'react-native';
import CardPeopleItem from '../../components/CardPeopleItem';

function People() {
  const [searchValue, setSearchValue] = useState("");
  const [people, setPeople] = useState<PeopleDataResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const value = searchValue.toLocaleLowerCase();

      const results = await api.get<TVShowSearchDataResponse[]>(`search/people?q=${value}`);

      const formattedData = results.data.map(item => ({
        id: item.person.id,
        url: item.person.url,
        name: item.person.name,
        birthday: item.person.birthday,
        gender: item.person.gender,
        image: item.person.image,
      }));

      setPeople(formattedData);
    }

    fetchData();
  }, [people])


  function handleClearSearchInput() {
    setSearchValue("");
    setPeople([]);
  }

  return (
    <Container>
      <Header
        title="Hora de conhecer eles 😜"
        subtitle="Conheça os atores que fazem parte da sua série favorita"
      />

      <SearchBox>
        <SearchInput
          searchValue={searchValue}
          setSearchInput={setSearchValue}
          placeholderLabel="Busque pelo nome do ator ou atriz"
        />
        <CleanButton onPress={handleClearSearchInput}>
          <MaterialIcons name="clear" size={20} color="#FFF" />
        </CleanButton>
      </SearchBox>

      {
        people.length === 0 ? (
          <NotFoundPoeple>
            <EmojiIcon>
              😬
            </EmojiIcon>
            <TextDescription>Não conseguimos encontrar a pessoa que procura</TextDescription>
          </NotFoundPoeple>
        ) : (
          <>
            <FlatList
              data={people}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <CardPeopleItem data={item} key={item.id} />
              )}
              showsVerticalScrollIndicator={false}
              maxToRenderPerBatch={10}
              updateCellsBatchingPeriod={50}
            />

            <Footer>
              <AmountOfTvShows>{people.length} people</AmountOfTvShows>
            </Footer>
          </>
        )
      }

    </Container>
  );
};

export { People };

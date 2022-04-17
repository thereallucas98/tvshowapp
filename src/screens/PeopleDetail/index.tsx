import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PreviewTvShow from '../../components/PreviewTvShow';
import {
  ShowData,
  ShowsByPeopleIndex,
  TVPeopleIndexDataResponse
} from '../../global/interfaces/peopledata';

import api from '../../services/api';

import {
  Container,
  ImageBackgroundContent,
  InfoContent,
  InfoDescription,
  InfoGroup,
  InfoLabel,
  Main
} from './styles';

interface Params {
  id: number;
}

function PeopleDetail() {
  const [person, setPerson] = useState<TVPeopleIndexDataResponse>();
  const [showsByPerson, setShowsByPerson] = useState<ShowData[]>([]);

  const route = useRoute();

  const { id } = route.params as Params;

  const navigation = useNavigation();

  useEffect(() => {
    const fetchPersonData = async () => {
      const response = await api.get<TVPeopleIndexDataResponse>(`people/${id}`);

      const formattedData: TVPeopleIndexDataResponse = {
        id: response.data.id,
        name: response.data.name,
        birthday: response.data.birthday,
        gender: response.data.gender,
        image: response.data.image,
        country: response.data.country,
        url: response.data.url,
      }

      setPerson(formattedData);
    }

    const fetchShowsByPersonId = async () => {
      const response = await api.get<ShowsByPeopleIndex[]>(`people/${id}/castcredits?embed=show`);

      const formattedData: ShowData[] = response.data.map(item => ({
        id: item._embedded.show.id,
        name: item._embedded.show.name,
        image: item._embedded.show.image,
        url: item._embedded.show.url,
      }));

      setShowsByPerson(formattedData);
    }

    fetchPersonData();
    fetchShowsByPersonId();
  }, []);

  return (
    <Container>
      {
        person && (
          <>
            {
              person?.image.original ? (
                <ImageBackgroundContent source={{ uri: person?.image.original }} resizeMode="cover" />
              ) : person?.image.medium ? (
                <ImageBackgroundContent source={{ uri: person?.image.medium }} resizeMode="cover" />
              ) : (
                <ImageBackgroundContent
                  source={{
                    uri: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  }} resizeMode="cover"
                />
              )
            }

            <Main>
              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Nome</InfoLabel>
                  <InfoDescription>{person?.name ? person.name : "Unkown"}</InfoDescription>
                </InfoGroup>
                <InfoGroup>
                  <InfoLabel>Data de Nascimento</InfoLabel>
                  <InfoDescription>
                    {person?.birthday ?
                      new Date(person.birthday).toLocaleDateString()
                      : "Unkown"}
                  </InfoDescription>
                </InfoGroup>
              </InfoContent>

              <InfoContent>
                <InfoGroup>
                  <InfoLabel>Gênero</InfoLabel>
                  <InfoDescription>{person?.gender ? person?.gender : "Unkown"}</InfoDescription>
                </InfoGroup>
                <InfoGroup>
                  <InfoLabel>País</InfoLabel>
                  <InfoDescription>{person?.country.name ? person?.country.name : "Unkown"}</InfoDescription>
                </InfoGroup>
              </InfoContent>
            </Main>

            {
              showsByPerson && (
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={showsByPerson}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item }) => (
                    <PreviewTvShow data={item} key={item.id} />
                  )}
                />
              )
            }
          </>
        )
      }
    </Container>
  );
};

export default PeopleDetail;

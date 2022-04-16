import { PeopleDataResponse } from '../../global/interfaces/peopledata';

import { Container, ImageBackgroundContent, InfoContent, InfoDescription, InfoGroup, InfoLabel } from './styles';

interface CardPeopleItemProps {
  data: PeopleDataResponse;
}

function CardPeopleItem({ data }: CardPeopleItemProps) {
  return (
    <Container>
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

      <InfoContent>
        <InfoGroup>
          <InfoLabel>Nome</InfoLabel>
          <InfoDescription>{data.name ? data.name : "Unkown"}</InfoDescription>
        </InfoGroup>
        <InfoGroup>
          <InfoLabel>Data de Nascimento</InfoLabel>
          <InfoDescription>
            {data.birthday ?
              new Date(data.birthday).toLocaleDateString()
              : "Unkown"}
          </InfoDescription>
        </InfoGroup>
      </InfoContent>
      <InfoContent>
        <InfoGroup>
          <InfoLabel>Gênero</InfoLabel>
          <InfoDescription>{data.gender ? data.gender : "Unkown"}</InfoDescription>
        </InfoGroup>
      </InfoContent>
    </Container>
  );
};

export default CardPeopleItem;

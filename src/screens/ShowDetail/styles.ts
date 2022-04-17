import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px 8px;
`;

const ImageBackgroundContent = styled.Image`
  height: 300px;
  width: 100%;

  border-radius: 4px;
`;

const Main = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const InfoContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
`;

const InfoGroup = styled.View`
  width: 100%;
  display: flex;
  padding: 10px;
`;

const InfoLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #ffff;

  margin-bottom: 6px;
`;

const InfoDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #ffff;
`;

const FlatListContent = styled.View`
  padding: 16px;
`;

const Genre = styled.View`
  height: 32px;
  min-width: 60px;

  padding: 6px;
  margin-right: 6px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GenreLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export {
  Container,
  ImageBackgroundContent,
  Main,
  InfoContent,
  InfoGroup,
  InfoLabel,
  InfoDescription,
  FlatListContent,
  Genre,
  GenreLabel,
};

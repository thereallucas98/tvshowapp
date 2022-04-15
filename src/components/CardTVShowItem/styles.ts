import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const Container = styled.View`
  height: 300px;
  background-color: ${({ theme }) => theme.colors.background_light};

  border-radius: 4px;

  margin: 22px 0;
`;

const ImageBackgroundContent = styled.Image`
  height: 200px;
  width: 100%;

  border-radius: 4px;
`;

const InfoContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px;
`;

const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #ffff;
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

const Duration = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export {
  Container,
  ImageBackgroundContent,
  InfoContent,
  Title,
  Genre,
  GenreLabel,
  Duration,
};

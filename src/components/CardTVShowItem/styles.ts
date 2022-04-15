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

const Title = styled.Text``;

const Genre = styled.Text``;

const Duration = styled.Text``;

export { Container, ImageBackgroundContent, Title, Genre, Duration };

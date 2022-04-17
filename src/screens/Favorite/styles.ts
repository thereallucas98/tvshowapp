import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 32px 8px 0;
`;

const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

const HasNoFavoritesShow = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmojiIcon = styled.Text`
  font-size: ${RFValue(50)}px;
`;

const TextDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export { Container, Title, HasNoFavoritesShow, EmojiIcon, TextDescription };

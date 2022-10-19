import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const EmptyListWrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmojiIcon = styled.Text`
  font-size: ${RFValue(50)}px;
`;

export const TextDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
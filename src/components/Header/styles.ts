import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const Container = styled.View``;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  margin-bottom: 4px;
`;

const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(12)}px;
`;

export { Container, Title, SubTitle };

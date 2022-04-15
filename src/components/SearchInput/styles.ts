import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const Container = styled.TextInput`
  height: 58px;
  margin-top: 32px;
  margin-bottom: 12px;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export { Container };

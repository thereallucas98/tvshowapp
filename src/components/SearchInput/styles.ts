import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const Container = styled.TextInput`
  width: 82%;
  height: 58px;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;

export { Container };

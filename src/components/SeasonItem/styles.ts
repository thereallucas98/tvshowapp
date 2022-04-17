import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 0 8px;
`;

const LabelSeason = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #ffff;
`;

export { Container, LabelSeason };

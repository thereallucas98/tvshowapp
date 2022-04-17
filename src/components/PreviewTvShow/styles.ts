import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  height: 150px;
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBackgroundContent = styled.Image`
  height: 200px;
  width: 100%;

  border-radius: 4px;
`;

const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #ffff;
`;

export { Container, ImageBackgroundContent, Name };

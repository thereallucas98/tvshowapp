import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  height: 450px;
  background-color: ${({ theme }) => theme.colors.background_light};

  border-radius: 4px;

  margin: 22px 0;
`;

const ImageBackgroundContent = styled.Image`
  height: 280px;
  width: 100%;

  border-radius: 4px;
`;

const InfoContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 6px;
`;

const InfoGroup = styled.View`
  /* height: 50px; */
  padding: 10px;
`;

const InfoLabel = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #ffff;
`;

const InfoDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #ffff;
`;

export {
  Container,
  ImageBackgroundContent,
  InfoContent,
  InfoGroup,
  InfoLabel,
  InfoDescription,
};

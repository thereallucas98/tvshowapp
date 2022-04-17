import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 32px 8px 0;
`;

const ImageBackgroundContent = styled.Image`
  height: 350px;
  width: 100%;

  border-radius: 4px;
`;

const Main = styled.View`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const InfoContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
`;

const InfoGroup = styled.View`
  width: 100%;
  display: flex;
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
  Main,
  InfoGroup,
  InfoLabel,
  InfoDescription,
};

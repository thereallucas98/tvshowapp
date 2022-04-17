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

const Main = styled.View`
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

const GoToDetail = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.success};
`;

const GoToDetailText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #ffff;
`;

export {
  Container,
  ImageBackgroundContent,
  Main,
  InfoContent,
  InfoGroup,
  InfoLabel,
  InfoDescription,
  GoToDetail,
  GoToDetailText,
};

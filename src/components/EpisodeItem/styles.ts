import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const ImageBackgroundEpisode = styled.Image`
  height: 300px;
  width: 100%;

  border-radius: 4px;
`;

const LabelEpisode = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #ffff;
`;

const GoToDetailEpisodeButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.success};

  border-radius: 4px;
`;

const GoToDetailEpisodeText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: #ffff;
`;

export {
  Container,
  ImageBackgroundEpisode,
  LabelEpisode,
  GoToDetailEpisodeButton,
  GoToDetailEpisodeText,
};

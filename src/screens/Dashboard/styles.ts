import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 32px 8px 0;
`;

const SearchBox = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
  margin-bottom: 12px;

  flex-direction: row;
`;

const CleanButton = styled.TouchableOpacity`
  width: 58px;
  height: 58px;

  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.attention};
`;

const Footer = styled.View`
  height: 54px;
  background-color: ${({ theme }) => theme.colors.background_light};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 10px;

  margin-top: 20px;
`;

const AmountOfTvShows = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

const PaginationContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const PaginationButton = styled.TouchableOpacity`
  width: 60px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.success};

  border-radius: 4px;

  margin-left: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export {
  Container,
  SearchBox,
  CleanButton,
  Footer,
  AmountOfTvShows,
  PaginationContent,
  PaginationButton,
  PaginationLabel,
};

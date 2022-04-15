import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 32px 8px;
`;

const MainList = styled.FlatList``;

export { Container, MainList };

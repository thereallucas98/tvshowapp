import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import CardTvShowItem from "../../components/CardTVShowItem";
import { EmptyList } from "../../components/EmptyList";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import SearchInput from "../../components/SearchInput";

import { useGetTvShowList } from "./hooks/useGetTvShowsQuery";

import {
  Container,
  Footer,
  AmountOfTvShows,
  PaginationContent,
  PaginationButton,
  PaginationLabel,
  SearchBox,
  CleanButton,
} from "./styles";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [selectionParams, setSelectionParams] = useState({
    page: currentPage,
    serieValue: searchValue,
  });

  const {
    tvShows,
    isLoadingTvShows,
    tvShowsBySearch,
    isLoadingTvShowsBySearch,
  } = useGetTvShowList(selectionParams);

  useEffect(() => {
    setSelectionParams((prevState) => ({
      ...prevState,
      serieValue: searchValue,
    }));
  }, [searchValue]);

  function handleSetPreviousPage() {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  }

  function handleSetNextPage() {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 === 259) {
      setHasNext(false);
    }
  }

  function handleClearSearchInput() {
    setCurrentPage(1);
    setSearchValue("");
  }

  return (
    <Container>
      <Header
        title="Olá, seja bem-vindo(a), 🤞"
        subtitle="Aqui você organiza as suas séries da melhor forma"
      />
      <SearchBox>
        <SearchInput
          searchValue={searchValue}
          setSearchInput={setSearchValue}
          placeholderLabel="Busque pelo nome da série"
        />
        <CleanButton onPress={handleClearSearchInput}>
          <MaterialIcons name="clear" size={20} color="#FFF" />
        </CleanButton>
      </SearchBox>

      {(isLoadingTvShows || isLoadingTvShowsBySearch) &&
      (!tvShows || !tvShowsBySearch) ? (
        <Loading />
      ) : (
        <FlatList
          data={searchValue.length > 0 ? tvShowsBySearch : tvShows}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardTvShowItem data={item} key={item.id} />
          )}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          contentContainerStyle={
            (tvShows?.length === 0 || tvShowsBySearch?.length === 0) && {
              flex: 1,
            }
          }
          ListEmptyComponent={() => (
            <EmptyList message="Não encontramos séries" />
          )}
        />
      )}

      <Footer>
        <AmountOfTvShows>
          {searchValue.length > 0 ? tvShowsBySearch?.length : tvShows?.length}{" "}
          series
        </AmountOfTvShows>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationButton onPress={handleSetPreviousPage}>
              <PaginationLabel>Voltar</PaginationLabel>
            </PaginationButton>
          )}
          {hasNext && (
            <PaginationButton onPress={handleSetNextPage}>
              <PaginationLabel>Avançar</PaginationLabel>
            </PaginationButton>
          )}
        </PaginationContent>
      </Footer>
    </Container>
  );
}

export { Dashboard };

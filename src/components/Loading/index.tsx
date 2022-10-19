import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

import { LoadingWrapper } from "./styles";

export function Loading() {
  const { colors } = useTheme();

  return (
    <LoadingWrapper>
      <ActivityIndicator size="large" color={colors.primary} />
    </LoadingWrapper>
  )
}
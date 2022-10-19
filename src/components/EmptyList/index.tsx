import { EmojiIcon, EmptyListWrapper, TextDescription } from "./styles";

interface EmptyListProps {
  message: string;
}

export function EmptyList({ message }: EmptyListProps) {
  return (
    <EmptyListWrapper>
      <EmojiIcon>😬</EmojiIcon>
      <TextDescription>{message}</TextDescription>
    </EmptyListWrapper>
  );
}

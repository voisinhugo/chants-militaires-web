import React from "react";
import styled from "styled-components";
import { MusicItem } from "./components";
import songs from "../../data";
import theme from "../../theme";

const sortedSongs = Object.values(songs).sort((a, b) => a.title > b.title);

const Container = styled.div`
  background-color: ${theme.color.background};
`;

export const MusicList = ({ navigation }) => {
  return (
    <Container>
      <ul>
        {sortedSongs.map(item => (
          <MusicItem key={item.id.toString()} item={item} />
        ))}
      </ul>
    </Container>
  );
};

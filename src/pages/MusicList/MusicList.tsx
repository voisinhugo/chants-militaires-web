import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { MusicItem } from "./components";
import songs from "../../data";
import theme from "../../theme";
import { Header } from "../../components";
import { Song } from "../../react-app-env";
import { HEADER_HEIGHT } from "../../components/Header";

const sortedSongs = Object.values(songs).sort((a: Song, b: Song) =>
  a.title > b.title ? 1 : -1
);

const ListContainer = styled.div`
  background-color: ${theme.color.background};
  padding-top: ${theme.margin.x1 + HEADER_HEIGHT}px;
  padding-bottom: ${theme.margin.x1}px;
`;

export const MusicList: FunctionComponent = () => {
  return (
    <>
      <Header title="Liste des chants" />
      <ListContainer>
        {sortedSongs.map((item: Song) => (
          <MusicItem key={item.id.toString()} song={item} />
        ))}
      </ListContainer>
    </>
  );
};

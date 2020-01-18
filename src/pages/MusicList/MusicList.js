import React from "react";
import styled from "styled-components";
import { MusicItem } from "./components";
import songs from "../../data";
import theme from "../../theme";
import { Header } from "../../components";

const sortedSongs = Object.values(songs).sort((a, b) => a.title > b.title);

const ListContainer = styled.div`
  background-color: ${theme.color.background};
  padding-top: ${theme.margin.x1}px;
  padding-bottom: ${theme.margin.x1}px;
`;

export const MusicList = () => {
  return (
    <>
      <Header title="Liste des chants" />
      <ListContainer>
        {sortedSongs.map(item => (
          <MusicItem key={item.id.toString()} item={item} />
        ))}
      </ListContainer>
    </>
  );
};

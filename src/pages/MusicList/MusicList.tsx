import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { MusicItem, SearchBar } from "./components";
import songs from "../../data";
import theme from "../../theme";
import { Header } from "../../components";
import { Song } from "../../react-app-env";
import { HEADER_HEIGHT } from "../../components/Header";
import { PATHS, getPath } from "../../navigation/utils";

const sortedSongs = Object.values(songs).sort((a: Song, b: Song) =>
  a.title > b.title ? 1 : -1
);

const ListContainer = styled.div`
  background-color: ${theme.color.background};
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${theme.margin.x1}px;
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.color.header};
`;

const options = Object.keys(songs)
  .map(songId => ({
    value: songId,
    label: songs[songId].title
  }))
  .sort((a, b) => (a.label > b.label ? 1 : -1));

export const MusicList: FunctionComponent = () => {
  const history = useHistory();

  const onSongSelect = (songId: string) => {
    const path = `${PATHS.song}/${songId}`;
    history.push(`${getPath(path)}`);
  };

  return (
    <>
      <Header title="Liste des chants" leftComponent="burger-menu" />
      <ListContainer>
        <SearchBar options={options} onFieldSelect={onSongSelect} />
        <Separator />
        {sortedSongs.map((item: Song) => (
          <MusicItem key={item.id.toString()} song={item} />
        ))}
      </ListContainer>
    </>
  );
};

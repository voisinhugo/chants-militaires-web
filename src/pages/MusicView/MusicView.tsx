import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import songs from "../../data";
import theme from "../../theme";
import { Header, HEADER_HEIGHT } from "../../components/Header/Header";
import { AudioPlayer } from "../../components/AudioPlayer";

const Container = styled.div`
  background-color: ${theme.color.background};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-top: ${HEADER_HEIGHT}px;
`;

const Lyrics = styled.p`
  padding: ${theme.margin.x2}px;
  font-size: ${theme.fontSize.body}px;
  color: ${theme.color.white};
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: ${theme.margin.x2}px;
  padding-block-end: ${theme.margin.x2}px;
  white-space: pre-wrap;
`;

export const MusicView: FunctionComponent = () => {
  const { songId } = useParams();

  if (!songId || !songs[songId]) {
    return null;
  }

  const { title, lyrics, url } = songs[songId];

  return (
    <>
      <Header title={title} leftComponent="go-back" />
      <Container>
        <Lyrics>{lyrics}</Lyrics>
        {url && <AudioPlayer url={url} />}
      </Container>
    </>
  );
};

import React from "react";
import styled from "styled-components";
import songs from "../../data";
import theme from "../../theme";
import { Header } from "../../components";

const Container = styled.div`
  background-color: ${theme.color.background};
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

export const MusicView = ({ match }) => {
  const musicId = match.params.songId;

  return (
    <>
      <Header title={songs[musicId].title} />
      <Container>
        <Lyrics>{songs[musicId].lyrics}</Lyrics>
      </Container>
    </>
  );
};

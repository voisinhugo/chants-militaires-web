import React from "react";
import styled from "styled-components";
import songs from "../../data";
import theme from "../../theme";

const Container = styled.div`
  background-color: ${theme.color.background};
`;

const Lyrics = styled.p`
  margin: ${theme.margin.x2};
  font-size: ${theme.fontSize.body};
  color: ${theme.color.white};
`;

export const MusicView = ({ match }) => {
  const musicId = match.params.songId;
  console.log("musicId: ", musicId);

  return (
    <Container>
      <Lyrics>{songs[musicId].lyrics}</Lyrics>
    </Container>
  );
};

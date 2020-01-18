import React from "react";
import theme from "../../../theme";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${theme.color.background};
`;

const MusicText = styled.p`
  margin-left: ${theme.margin.x2};
  margin-vertical: ${theme.margin.x1};
  color: ${theme.color.white};
  font-size: ${theme.fontSize.heading};
`;

export const MusicItem = ({ item }) => {
  const onItemPress = () => {
    const musicId = item.id;
    console.log("musicId", musicId);
    // navigation.navigate("MusicView", { musicId });
  };

  return (
    <Container onClick={onItemPress}>
      <MusicText>{item.title}</MusicText>
    </Container>
  );
};

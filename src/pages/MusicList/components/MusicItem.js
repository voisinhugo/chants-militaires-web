import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";
import { getPath, PATHS } from "../../../navigation/utils";

const Container = styled.div`
  background-color: ${theme.color.background};
`;

const MusicText = styled.p`
  margin-left: ${theme.margin.x2}px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: ${theme.margin.x1}px;
  padding-block-end: ${theme.margin.x1}px;
  color: ${theme.color.white};
  font-size: ${theme.fontSize.heading}px;
`;

export const MusicItem = ({ item }) => (
  <Route
    render={({ history }) => {
      const onItemPress = () => {
        const musicId = item.id;
        const path = `${PATHS.song}/${musicId}`;
        history.push(`${getPath(path)}`);
      };

      return (
        <Container onClick={onItemPress}>
          <MusicText>{item.title}</MusicText>
        </Container>
      );
    }}
  />
);

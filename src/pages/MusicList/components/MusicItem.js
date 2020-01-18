import React from "react";
import theme from "../../../theme";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { getPath, PATHS } from "../../../navigation/utils";

const Container = styled.div`
  background-color: ${theme.color.background};
`;

const MusicText = styled.p`
  margin-left: ${theme.margin.x2};
  margin-vertical: ${theme.margin.x1};
  color: ${theme.color.white};
  font-size: ${theme.fontSize.heading};
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

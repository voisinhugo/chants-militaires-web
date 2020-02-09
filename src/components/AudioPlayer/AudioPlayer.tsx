import React from "react";
import Player from "react-player";
import theme from "../../theme";
import styled from "styled-components";

interface Props {
  url: string;
}

const PLAYER_WIDTH = window.innerWidth - theme.margin.x2 * 2;
const PLAYER_HEIGHT = 160;

const StyledPlayer = styled(Player).attrs({
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT
})`
  margin: ${theme.margin.x2}px;
`;

export const AudioPlayer = ({ url }: Props) => (
  <StyledPlayer
    url={url}
    soundcloudConfig={{
      options: {
        auto_play: false,
        color: theme.color.background,
        show_artwork: false,
        show_playcount: false,
        show_user: false,
        buying: false,
        sharing: false,
        download: false
      }
    }}
  />
);

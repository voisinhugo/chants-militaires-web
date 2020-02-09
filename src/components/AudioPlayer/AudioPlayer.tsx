import React from "react";
import Player from "react-player";
import theme from "../../theme";

interface Props {
  url: string;
}

export const AudioPlayer = ({ url }: Props) => (
  <Player
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

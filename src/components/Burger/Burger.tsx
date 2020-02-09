import React, { useState } from "react";
import { useHistory } from "react-router";
import { slide as Menu, State } from "react-burger-menu";
import styled from "styled-components";
import theme from "../../theme";
import { getPath, PATHS } from "../../navigation/utils";
import { getRandomSong } from "./utils";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: `${theme.margin.x2}px`,
    top: `${theme.margin.x2}px`
  },
  bmBurgerBars: {
    background: theme.color.white
  },
  bmBurgerBarsHover: {},
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: theme.color.white
  },
  bmMenuWrap: {
    top: "0",
    left: "0",
    bottom: "0"
  },
  bmMenu: {
    background: theme.color.background,
    padding: "1.5em 1em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: theme.color.background
  },
  bmItemList: {
    color: theme.color.white,
    padding: "0.8em"
  },
  bmItem: {},
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const MenuItem = styled.h3``;

export const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  const onStateChange = ({ isOpen }: State) => {
    setIsMenuOpen(isOpen);
  };

  const onMusicListFieldClick = () => {
    setIsMenuOpen(false);
  };

  const onRandomSongClick = () => {
    const songId = getRandomSong();
    const path = `${PATHS.song}/${songId}`;
    history.push(`${getPath(path)}`);
  };

  return (
    <Menu isOpen={isMenuOpen} onStateChange={onStateChange} styles={styles}>
      <MenuItem onClick={onMusicListFieldClick}>Liste des chants</MenuItem>
      <MenuItem onClick={onRandomSongClick}>Chant aléatoire</MenuItem>
    </Menu>
  );
};

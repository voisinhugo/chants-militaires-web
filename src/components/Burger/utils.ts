import songs from "../../data";

export const getRandomSong = () =>
  Math.floor(Math.random() * Object.keys(songs).length);

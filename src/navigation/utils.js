const BASE_PATH = "/chants-militaires-web";

export const PATHS = {
  song: "/song"
};

export const getPath = (path = "") => `${BASE_PATH}${path}`;

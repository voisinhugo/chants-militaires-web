import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MusicList } from "../MusicList";
import { renderPage } from "../../../tests/utils";

const song0Id = 0;
const song0Title = "toto";
jest.mock("../../../data/index", () => ({
  "0": { id: 0, title: "toto" },
  "1": { id: 1, title: "tata" }
}));

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe("MusicList", () => {
  it("should render", () => {
    const musicList = renderPage(<MusicList />);

    expect(musicList).toMatchSnapshot();
  });
  it("should navigate to lyric page", () => {
    const { getByText } = render(<MusicList />);

    const itemButton = getByText(song0Title);
    fireEvent.click(itemButton);

    const expectedPath = `/chants-militaires-web/song/${song0Id}`;
    expect(mockHistoryPush).toHaveBeenCalledWith(expectedPath);
  });
});

import React from "react";
import { MusicView } from "../MusicView";
import { renderPage } from "../../../tests/utils";

jest.mock("../../../data/index", () => ({
  "0": {
    id: 0,
    title: "toto",
    lyrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
  },
  "1": { id: 1, title: "tata", lyrics: "" }
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ songId: 0 })
}));

describe("MusicView", () => {
  it("should render", () => {
    const musicView = renderPage(<MusicView />);

    expect(musicView).toMatchSnapshot();
  });
});

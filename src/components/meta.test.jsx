import React from "react";
import renderer from "react-test-renderer";

import Meta from "./meta";

const data = ["a", "b"];

describe("Tags", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Meta popularity={4} reliability={80} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";

import Tags from "./tags";

const data = ["a", "b"];

describe("Tags", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Tags data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

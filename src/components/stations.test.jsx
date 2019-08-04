import React from "react";
import renderer from "react-test-renderer";

import Stations from "./stations";

describe("Stations", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Stations />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

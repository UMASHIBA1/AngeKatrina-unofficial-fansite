import React from "react";
import CloseButton from "../CloseButton";
import renderer from "react-test-renderer";

test("sample", () => {
  const component = renderer.create(<CloseButton />);
  const tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});

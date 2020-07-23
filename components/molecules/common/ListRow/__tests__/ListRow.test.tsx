import React from "react";
import ListRow from "../ListRow";
import renderer from "react-test-renderer";

describe("snapshot test", () => {
  test("pass minimum props", () => {
    const component = renderer.create(
      <ListRow mainText="sample" bgColor={"#FFFFFF"} textColor={"#000000"} />
    );
    const tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });

  test("pass cursor: pointer prop", () => {
    const component = renderer.create(
      <ListRow
        cursor="pointer"
        mainText="sample"
        bgColor={"#FFFFFF"}
        textColor={"#000000"}
      />
    );
    const tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });

  test("pass cursor: default prop", () => {
    const component = renderer.create(
      <ListRow
        cursor="default"
        mainText="sample"
        bgColor={"#FFFFFF"}
        textColor={"#000000"}
      />
    );
    const tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });
});

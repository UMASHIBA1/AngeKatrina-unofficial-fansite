import React from "react";
import ListRow from "../ListRow";
import renderer from "react-test-renderer";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

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

describe("related event test", () => {
  let container: HTMLElement | null = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  test("test: run onClickFC when clicked", () => {
    let isRun = false;
    const mockFn = jest.fn(() => (isRun = true));
    act(() => {
      render(
        <ListRow
          onClickFC={mockFn}
          mainText="sample"
          bgColor={"#FFFFFF"}
          textColor={"#000000"}
        />,
        container
      );
    });

    const listRow = document.querySelector("[data-testid=list-row]");
    expect(isRun).toBe(false);
    if (listRow !== null) {
      act(() => {
        listRow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    }
    expect(isRun).toBe(true);
  });
});

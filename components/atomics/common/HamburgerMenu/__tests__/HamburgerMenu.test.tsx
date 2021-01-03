import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import HamburgerMenu from "../HamburgerMenu";

describe("functional test", () => {
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
      render(<HamburgerMenu onClickFC={mockFn} />, container);
    });

    const menu = document.querySelector("[data-testid=hamburger-menu]");
    expect(isRun).toBe(false);
    if (menu !== null) {
      act(() => {
        menu.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    }
    expect(isRun).toBe(true);
  });
});

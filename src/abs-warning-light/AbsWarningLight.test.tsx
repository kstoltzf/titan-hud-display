import { render, screen } from "@testing-library/react";
import AbsWarningLight from "./AbsWarningLight";
import { Provider } from "react-redux";
import { setAbsWarningLightIsActive } from "./AbsWarningLightSlice";
import store from "../app/Store";

describe("abs warning light", () => {
  test("does not render when state is not active", async () => {
    render(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );
    const absWarningLightElement = screen.queryByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    store.dispatch(setAbsWarningLightIsActive(true));

    render(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );

    const absWarningLightElement = screen.getByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toBeInTheDocument();
  });
});

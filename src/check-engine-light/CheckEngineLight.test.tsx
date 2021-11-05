import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import CheckEngineLight from "./CheckEngineLight";
import { setCheckEngineLightIsActive } from "./CheckEngineLightSlice";

describe("check engine light", () => {
  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <CheckEngineLight />
      </Provider>
    );
    const checkEngineLightElement = screen.findByAltText(
      "checkEngineLightIcon"
    );
    expect(checkEngineLightElement).toMatchObject({});
  });

  test("renders when state is active", () => {
    store.dispatch(setCheckEngineLightIsActive(true));

    render(
      <Provider store={store}>
        <CheckEngineLight />
      </Provider>
    );
    const checkEngineLightElement = screen.getByAltText("checkEngineLightIcon");
    expect(checkEngineLightElement).toBeInTheDocument();
  });
});

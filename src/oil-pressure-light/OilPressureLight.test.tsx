import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import OilPressureLight from "./OilPressureLight";
import { setOilPressureLightIsActive } from "./OilPressureLightSlice";

describe("oil pressure light", () => {
  test("does not render when state is not active", () => {
    store.dispatch(setOilPressureLightIsActive(false));

    render(
      <Provider store={store}>
        <OilPressureLight />
      </Provider>
    );

    const oilPressureLightElement = screen.queryByAltText(
      "oilPressureLightIcon"
    );
    expect(oilPressureLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    store.dispatch(setOilPressureLightIsActive(true));

    render(
      <Provider store={store}>
        <OilPressureLight />
      </Provider>
    );

    const oilPressureLightElement = screen.getByAltText("oilPressureLightIcon");
    expect(oilPressureLightElement).toBeInTheDocument();
  });
});

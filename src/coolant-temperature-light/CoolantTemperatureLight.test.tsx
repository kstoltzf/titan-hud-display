import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import CoolantTemperatureLight from "./CoolantTemperatureLight";
import { setCoolantTemperatureLightIsActive } from "./CoolantTemperatureLightSlice";

describe("coolant temperature light", () => {
  test("does not render when state is not active", () => {
    store.dispatch(setCoolantTemperatureLightIsActive(false));

    render(
      <Provider store={store}>
        <CoolantTemperatureLight />
      </Provider>
    );

    const coolantTemperatureLightElement = screen.queryByAltText(
      "coolantTemperatureLightIcon"
    );
    expect(coolantTemperatureLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    store.dispatch(setCoolantTemperatureLightIsActive(true));

    render(
      <Provider store={store}>
        <CoolantTemperatureLight />
      </Provider>
    );

    const coolantTemperatureLightElement = screen.getByAltText(
      "coolantTemperatureLightIcon"
    );
    expect(coolantTemperatureLightElement).toBeInTheDocument();
  });
});

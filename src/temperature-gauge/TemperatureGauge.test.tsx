import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import TemperatureGauge from "./TemperatureGauge";
import { setCurrentTemperature } from "./TemperatureGaugeSlice";


describe("temperature gauge", () => {
  test("renders correct initial temperature", () => {
    store.dispatch(setCurrentTemperature(0));

    render(
      <Provider store={store}>
        <TemperatureGauge />
      </Provider>
    );

    const temperatureGaugeLabel = screen.getByText("Coolant Temperature");
    expect(temperatureGaugeLabel).toBeInTheDocument();

    const temperatureGaugeValue = screen.getByText("0° F");
    expect(temperatureGaugeValue).toBeInTheDocument();
  });

  test("renders correct updated temperature", () => {
    store.dispatch(setCurrentTemperature(35));

    render(
      <Provider store={store}>
        <TemperatureGauge />
      </Provider>
    );

    const temperatureGaugeLabel = screen.getByText("Coolant Temperature");
    expect(temperatureGaugeLabel).toBeInTheDocument();

    const temperatureGaugeValue = screen.getByText("35° F");
    expect(temperatureGaugeValue).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import FuelGauge from "./FuelGauge";
import { setCurrentFuelLevelPercent } from "./FuelGaugeSlice";

describe("fuel gauge", () => {
  test("renders correct initial fuel level", () => {
    store.dispatch(setCurrentFuelLevelPercent(0));

    render(
      <Provider store={store}>
        <FuelGauge />
      </Provider>
    );

    const fuelGaugeLabel = screen.getByText("Fuel");
    expect(fuelGaugeLabel).toBeInTheDocument();

    const fuelGaugeBar = screen.getByLabelText("fuelGaugeBar");
    expect(fuelGaugeBar).toBeInTheDocument();

    const fuelGaugeValue = screen.getByText("0%");
    expect(fuelGaugeValue).toBeInTheDocument();
  });

  test("renders correct updated fuel level", () => {
    store.dispatch(setCurrentFuelLevelPercent(55));

    render(
      <Provider store={store}>
        <FuelGauge />
      </Provider>
    );

    const fuelGaugeLabel = screen.getByText("Fuel");
    expect(fuelGaugeLabel).toBeInTheDocument();

    const fuelGaugeBar = screen.getByLabelText("fuelGaugeBar");
    expect(fuelGaugeBar).toBeInTheDocument();

    const fuelGaugeValue = screen.getByText("55%");
    expect(fuelGaugeValue).toBeInTheDocument();
  });
});

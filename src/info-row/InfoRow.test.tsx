import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import { setCurrentFuelLevelPercent } from "../fuel-gauge/FuelGaugeSlice";
import { setCurrentSpeed } from "../speedometer/SpeedometerSlice";
import { setCurrentRpms } from "../tachometer/TachometerSlice";
import { setCurrentTemperature } from "../temperature-gauge/TemperatureGaugeSlice";
import InfoRow from "./InfoRow";

describe("info row", () => {
  test("renders correctly with initial state", () => {
    store.dispatch(setCurrentRpms(0));
    store.dispatch(setCurrentSpeed(0));
    store.dispatch(setCurrentTemperature(0));
    store.dispatch(setCurrentFuelLevelPercent(0));

    render(
      <Provider store={store}>
        <InfoRow />
      </Provider>
    );

    const tachometerText = screen.getByText("0 RPMs");
    expect(tachometerText).toBeInTheDocument();

    const tachometerBar = screen.getByLabelText("tachometerBar");
    expect(tachometerBar).toBeInTheDocument();

    const actualSpeed = screen.getByText("0 MPH");
    expect(actualSpeed).toBeInTheDocument();

    const temperatureGaugeLabel = screen.getByText("Coolant Temperature");
    expect(temperatureGaugeLabel).toBeInTheDocument();

    const temperatureGaugeValue = screen.getByText("0° F");
    expect(temperatureGaugeValue).toBeInTheDocument();

    const fuelGaugeLabel = screen.getByText("Fuel");
    expect(fuelGaugeLabel).toBeInTheDocument();

    const fuelGaugeBar = screen.getByLabelText("fuelGaugeBar");
    expect(fuelGaugeBar).toBeInTheDocument();

    const fuelGaugeValue = screen.getByText("0%");
    expect(fuelGaugeValue).toBeInTheDocument();
  });

  test("renders correctly with updated state", () => {
    store.dispatch(setCurrentRpms(4200));
    store.dispatch(setCurrentSpeed(45));
    store.dispatch(setCurrentTemperature(35));
    store.dispatch(setCurrentFuelLevelPercent(55));

    render(
      <Provider store={store}>
        <InfoRow />
      </Provider>
    );

    const tachometerText = screen.getByText("4200 RPMs");
    expect(tachometerText).toBeInTheDocument();

    const tachometerBar = screen.getByLabelText("tachometerBar");
    expect(tachometerBar).toBeInTheDocument();

    const actualSpeed = screen.getByText("45 MPH");
    expect(actualSpeed).toBeInTheDocument();

    const temperatureGaugeLabel = screen.getByText("Coolant Temperature");
    expect(temperatureGaugeLabel).toBeInTheDocument();

    const temperatureGaugeValue = screen.getByText("35° F");
    expect(temperatureGaugeValue).toBeInTheDocument();

    const fuelGaugeLabel = screen.getByText("Fuel");
    expect(fuelGaugeLabel).toBeInTheDocument();

    const fuelGaugeBar = screen.getByLabelText("fuelGaugeBar");
    expect(fuelGaugeBar).toBeInTheDocument();

    const fuelGaugeValue = screen.getByText("55%");
    expect(fuelGaugeValue).toBeInTheDocument();
  });
});

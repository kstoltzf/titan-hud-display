import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import Speedometer from "./Speedometer";
import { setCurrentSpeed } from "./SpeedometerSlice";

describe("speedometer", () => {
  test("renders correct initial speed", () => {
    store.dispatch(setCurrentSpeed(0));

    render(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );

    const actualSpeed = screen.getByText("0 MPH");
    expect(actualSpeed).toBeInTheDocument();
  });

  test("renders correct updated speed", () => {
    store.dispatch(setCurrentSpeed(45));

    render(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );

    const actualSpeed = screen.getByText("45 MPH");
    expect(actualSpeed).toBeInTheDocument();
  });
});

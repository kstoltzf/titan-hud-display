import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import Tachometer from "./Tachometer";
import { setCurrentRpms } from "./TachometerSlice";

describe("tachometer", () => {
  test("renders correct initial speed", () => {
    store.dispatch(setCurrentRpms(0));

    render(
      <Provider store={store}>
        <Tachometer />
      </Provider>
    );

    const actualTachometerText = screen.getByText("0 RPMs");
    expect(actualTachometerText).toBeInTheDocument();

    const actualTachometerBar = screen.getByLabelText("tachometerBar");
    expect(actualTachometerBar).toBeInTheDocument();
  });

  test("renders correct updated speed", () => {
    store.dispatch(setCurrentRpms(4200));

    render(
      <Provider store={store}>
        <Tachometer />
      </Provider>
    );

    const actualTachometerText = screen.getByText("4200 RPMs");
    expect(actualTachometerText).toBeInTheDocument();

    const actualTachometerBar = screen.getByLabelText("tachometerBar");
    expect(actualTachometerBar).toBeInTheDocument();
  });
});

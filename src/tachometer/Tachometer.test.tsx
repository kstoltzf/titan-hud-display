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

    const tachometerText = screen.getByText("0 RPMs");
    expect(tachometerText).toBeInTheDocument();

    const tachometerBar = screen.getByLabelText("tachometerBar");
    expect(tachometerBar).toBeInTheDocument();
  });

  test("renders correct updated speed", () => {
    store.dispatch(setCurrentRpms(4200));

    render(
      <Provider store={store}>
        <Tachometer />
      </Provider>
    );

    const tachometerText = screen.getByText("4200 RPMs");
    expect(tachometerText).toBeInTheDocument();

    const tachometerBar = screen.getByLabelText("tachometerBar");
    expect(tachometerBar).toBeInTheDocument();
  });
});

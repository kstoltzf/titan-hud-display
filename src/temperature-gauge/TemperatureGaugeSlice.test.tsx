import temperatureGaugeReducer, {
  setCurrentTemperature,
  TemperatureGaugeState,
} from "./TemperatureGaugeSlice";

describe("temperature gauge slice reducer", () => {
  const initialState: TemperatureGaugeState = {
    currentTemperature: 0,
  };

  it("should handle initial state", () => {
    expect(temperatureGaugeReducer(undefined, { type: "unknown" })).toEqual({
      currentTemperature: 0,
    });
  });

  it("should handle setCurentTemperature", () => {
    const actual = temperatureGaugeReducer(
      initialState,
      setCurrentTemperature(35)
    );
    expect(actual.currentTemperature).toBe(35);
  });
});

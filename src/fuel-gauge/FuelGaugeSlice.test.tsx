import fuelGaugeReducer, {
  setCurrentFuelLevelPercent,
  FuelGaugeState,
} from "./FuelGaugeSlice";

describe("fuel gauge slice reducer", () => {
  const initialState: FuelGaugeState = {
    currentFuelLevelPercent: 0,
  };

  it("should handle initial state", () => {
    expect(fuelGaugeReducer(undefined, { type: "unknown" })).toEqual({
      currentFuelLevelPercent: 0,
    });
  });

  it("should handle setCurrentFuelLevelPercent", () => {
    const actual = fuelGaugeReducer(
      initialState,
      setCurrentFuelLevelPercent(55)
    );
    expect(actual.currentFuelLevelPercent).toBe(55);
  });
});

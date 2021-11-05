import lowFuelLightReducer, {
  LowFuelLightState,
  setLowFuelLightIsActive,
} from "./LowFuelLightSlice";

describe("low fuel light slice reducer", () => {
  const initialState: LowFuelLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(lowFuelLightReducer(undefined, { type: "unknown" })).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = lowFuelLightReducer(
      initialState,
      setLowFuelLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy;
  });
});

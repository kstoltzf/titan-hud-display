import speedometerReducer, {
  setCurrentSpeed,
  SpeedometerState,
} from "./SpeedometerSlice";

describe("speedometer slice reducer", () => {
  const initialState: SpeedometerState = {
    currentSpeed: 0,
  };

  it("should handle initial state", () => {
    expect(speedometerReducer(undefined, { type: "unknown" })).toEqual({
      currentSpeed: 0,
    });
  });

  it("should handle setCurrentSpeed", () => {
    const actual = speedometerReducer(initialState, setCurrentSpeed(45));
    expect(actual.currentSpeed).toBe(45);
  });
});

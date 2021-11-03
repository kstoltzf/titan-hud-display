import brakeWarningLightReducer, {
  BrakeWarningLightState,
  setIsActive,
} from "./BrakeWarningLightSlice";

describe("brake warning light slice reducer", () => {
  const initialState: BrakeWarningLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(brakeWarningLightReducer(undefined, { type: "unknown" })).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = brakeWarningLightReducer(initialState, setIsActive(true));
    expect(actual.isActive).toBeTruthy;
  });
});

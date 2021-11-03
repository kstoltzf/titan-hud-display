import batteryLightReducer, {
  BatteryLightState,
  setIsActive,
} from "./BatteryLightSlice";

describe("battery light slice reducer", () => {
  const initialState: BatteryLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(batteryLightReducer(undefined, { type: "unknown" })).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = batteryLightReducer(initialState, setIsActive(true));
    expect(actual.isActive).toBeTruthy;
  });
});

import batteryLightReducer, {
  BatteryLightState,
  setBatteryLightIsActive,
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
    const actual = batteryLightReducer(
      initialState,
      setBatteryLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy();
  });
});

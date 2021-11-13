import coolantTemperatureLightReducer, {
  CoolantTemperatureLightState,
  setCoolantTemperatureLightIsActive,
} from "./CoolantTemperatureLightSlice";

describe("coolant temperature light slice reducer", () => {
  const initialState: CoolantTemperatureLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(
      coolantTemperatureLightReducer(undefined, { type: "unknown" })
    ).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = coolantTemperatureLightReducer(
      initialState,
      setCoolantTemperatureLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy();
  });
});

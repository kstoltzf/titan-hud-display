import coolantTemperatureLightReducer, {
  CoolantTemperatureLightState,
  setIsActive,
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
      setIsActive(true)
    );
    expect(actual.isActive).toBeTruthy;
  });
});

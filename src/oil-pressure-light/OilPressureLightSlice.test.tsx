import oilPressureLightReducer, {
  OilPressureLightState,
  setOilPressureLightIsActive,
} from "./OilPressureLightSlice";

describe("oil pressure light slice reducer", () => {
  const initialState: OilPressureLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(oilPressureLightReducer(undefined, { type: "unknown" })).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = oilPressureLightReducer(
      initialState,
      setOilPressureLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy();
  });
});

import tractionControlLightReducer, {
  TractionControlLightState,
  setTractionControlLightIsActive,
} from "./TractionControlLightSlice";

describe("traction control light slice reducer", () => {
  const initialState: TractionControlLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(tractionControlLightReducer(undefined, { type: "unknown" })).toEqual(
      {
        isActive: false,
      }
    );
  });

  it("should handle setIsActive", () => {
    const actual = tractionControlLightReducer(
      initialState,
      setTractionControlLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy;
  });
});

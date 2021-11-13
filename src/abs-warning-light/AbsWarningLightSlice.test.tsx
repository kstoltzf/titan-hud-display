import absWarningLightReducer, {
  AbsWarningLightState,
  setAbsWarningLightIsActive,
} from "./AbsWarningLightSlice";

describe("abs warning light slice reducer", () => {
  const initialState: AbsWarningLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(absWarningLightReducer(undefined, { type: "unknown" })).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = absWarningLightReducer(
      initialState,
      setAbsWarningLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy();
  });
});

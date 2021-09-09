import absWarningLightReducer, {
  AbsWarningLightState,
  setIsActive,
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
    const actual = absWarningLightReducer(initialState, setIsActive(true));
    expect(actual.isActive).toBeTruthy;
  });
});

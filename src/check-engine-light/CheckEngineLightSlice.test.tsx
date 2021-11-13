import checkEngineLightReducer, {
  CheckEngineLightState,
  setCheckEngineLightIsActive,
} from "./CheckEngineLightSlice";

describe("check engine light slice reducer", () => {
  const initialState: CheckEngineLightState = {
    isActive: false,
  };

  it("should handle initial state", () => {
    expect(checkEngineLightReducer(undefined, { type: "unknown" })).toEqual({
      isActive: false,
    });
  });

  it("should handle setIsActive", () => {
    const actual = checkEngineLightReducer(
      initialState,
      setCheckEngineLightIsActive(true)
    );
    expect(actual.isActive).toBeTruthy();
  });
});

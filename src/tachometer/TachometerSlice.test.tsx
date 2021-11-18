import tachometerReducer, {
  setCurrentRpms,
  TachometerState,
} from "./TachometerSlice";

describe("tachometer slice reducer", () => {
  const initialState: TachometerState = {
    currentRpms: 0,
  };

  it("should handle initial state", () => {
    expect(tachometerReducer(undefined, { type: "unknown" })).toEqual({
      currentRpms: 0,
    });
  });

  it("should handle setCurrentRpms", () => {
    const actual = tachometerReducer(initialState, setCurrentRpms(4200));
    expect(actual.currentRpms).toBe(4200);
  });
});

import { testMe } from "./test-me";

describe('testMe"', () => {
  it("should return 10", () => {
    expect(testMe()).toEqual(10);
  });
});

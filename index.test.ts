import { assert } from "chai";
import { isValidName } from "./is-valid-name";

describe("isValidName", () => {
  it("should return false if inputting empty string", () => {
    const actual = isValidName("");
    const expected = false;

    assert.strictEqual(actual, expected);
  });
  it("should return true if input is a string", () => {
    const actual = isValidName("Bob");
    const expected = true;

    assert.strictEqual(actual, expected);
  });
  it("should return false if input is a number", () => {
    const actual = isValidName("123");

    assert.isFalse(actual);
  });
  it("should allow Elon Musk's kid", () => {
    const actual = isValidName("X Æ A-12");

    assert.isTrue(actual);
  });
});

import InvalidValue from "../../../main/domain/InvalidValueError";
import Longitude from "../../../main/domain/location/Longitude";

describe("Longitude", () => {
  test("can be created", () => {
    const result = Longitude.create(23.43234);
    expect(result.value).toBe(23.43234);
  });

  test("cannot be more than 180", () => {
    expect(() => Longitude.create(181)).toThrow(InvalidValue);
  });

  test("cannot be lower than -180", () => {
    expect(() => Longitude.create(-181)).toThrow(InvalidValue);
  });

  test("cannot be null", () => {
    expect(() => Longitude.create(null)).toThrow(InvalidValue);
  });

  test("cannot be undefined", () => {
    expect(() => Longitude.create(undefined)).toThrow(InvalidValue);
  });
});

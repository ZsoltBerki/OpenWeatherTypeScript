import InvalidValue from "../../../../main/application/domain/InvalidValueError";
import Latitude from "../../../../main/application/domain/location/Latitude";

describe("Longitude", () => {
  test("can be created", () => {
    const result = Latitude.create(23.43234);
    expect(result.value).toBe(23.43234);
  });

  test("cannot be more than 90", () => {
    expect(() => Latitude.create(91)).toThrow(InvalidValue);
  });

  test("cannot be lower than -90", () => {
    expect(() => Latitude.create(-91)).toThrow(InvalidValue);
  });

  test("cannot be null", () => {
    expect(() => Latitude.create(null)).toThrow(InvalidValue);
  });

  test("cannot be undefined", () => {
    expect(() => Latitude.create(undefined)).toThrow(InvalidValue);
  });
});

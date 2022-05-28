import InvalidValue from "../../../../main/application/domain/InvalidValueError";
import TimeZone from "../../../../main/application/domain/time/TimeZone";

describe("TimeZone", () => {
  test("can be created", () => {
    const result = TimeZone.create("Europe/Helsinki", 10800);

    expect(result.name).toBe("Europe/Helsinki");
    expect(result.offset).toBe(10800);
    expect(result.offsetMs).toBe(10800000);
  });

  test("cannot be created with missing name", () => {
    expect(() => {
      TimeZone.create(null, 10800);
    }).toThrow(InvalidValue);

    expect(() => {
      TimeZone.create(undefined, 10800);
    }).toThrow(InvalidValue);

    expect(() => {
      TimeZone.create("", 10800);
    }).toThrow(InvalidValue);
  });

  test("cannot be created with missing offset", () => {
    expect(() => {
      TimeZone.create("Europe/Helsinki", null);
    }).toThrow(InvalidValue);

    expect(() => {
      TimeZone.create("Europe/Helsinki", undefined);
    }).toThrow(InvalidValue);
  });
});

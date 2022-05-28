import InvalidValue from "../../../../main/application/domain/InvalidValueError";
import TimeThere from "../../../../main/application/domain/time/TimeThere";
import TimeZone from "../../../../main/application/domain/time/TimeZone";

describe("TimeThere", () => {
  // UTC Sunday, 1 May 2022 01:44:23
  // "timezone":"Europe/Helsinki","timezone_offset":10800
  // time there: Sunday, 1 May 2022 04:44:23 GMT+03:00 DST

  const epochSeconds = 1651369463;
  const timeZone = TimeZone.create("Europe/Helsinki", 10800);

  test("can be created", () => {
    const result = TimeThere.create(epochSeconds, timeZone);

    expect(result.year).toBe(2022);
    expect(result.month).toBe(4);
    expect(result.date).toBe(1);
    expect(result.day).toBe(0);
    expect(result.hours).toBe(4);
    expect(result.minutes).toBe(44);
    expect(result.seconds).toBe(23);
  });

  test("can return ISO date and time", () => {
    const result = TimeThere.create(epochSeconds, timeZone);

    expect(result.isoDate).toBe("2022-05-01");
    expect(result.isoTime).toBe("04:44:23");
  });

  test("cannot be created without epochSeconds", () => {
    expect(() => {
      TimeThere.create(null, timeZone);
    }).toThrow(InvalidValue);
  });

  test("created with UTC without TimeZone", () => {
    const result = TimeThere.create(epochSeconds);

    expect(result.isoDate).toBe("2022-05-01");
    expect(result.isoTime).toBe("01:44:23");
  });
});

import CurrentWeather from "../../../main/application/domain/CurrentWeather";
import Temperature from "../../../main/application/domain/Temperature";
import TimeThere from "../../../main/application/domain/time/TimeThere";
import TimeZone from "../../../main/application/domain/time/TimeZone";
import Unit from "../../../main/application/domain/Unit";

// GMT: Sunday, 1 May 2022 08:53:21
const time_epochSeconds = 1651395201;

// GMT: Sunday, 1 May 2022 01:44:23
const sunrise_epochSeconds = 1651369463;

// GMT: Sunday, 1 May 2022 18:12:00
const sunset_epochSeconds = 1651428720;

const timeZone = TimeZone.create("Europe/Helsinki", 10800);

describe("CurrentWeather", () => {
  test("can be created", () => {
    const timeThere = TimeThere.create(time_epochSeconds, timeZone);
    const sunRise = TimeThere.create(sunrise_epochSeconds, timeZone);
    const sunSet = TimeThere.create(sunset_epochSeconds, timeZone);

    const temperature = Temperature.create(27, Unit.metric);
    const feelsLike = Temperature.create(25, Unit.metric);

    const result = CurrentWeather.create(
      timeThere,
      sunRise,
      sunSet,
      temperature,
      feelsLike
    );

    expect(result.time.hours).toBe(11);
    expect(result.sunrise.hours).toBe(4);
    expect(result.sunset.hours).toBe(21);
    expect(result.temperature.inCelsius).toBe(27);
    expect(result.feelsLike.inCelsius).toBe(25);
  });
});

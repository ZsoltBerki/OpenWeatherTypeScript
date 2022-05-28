import { isMissing } from "../FieldValidationUtils";
import InvalidValue from "./InvalidValueError";
import Temperature from "./Temperature";
import TimeThere from "./time/TimeThere";
import { ValueObject } from "./ValueObject";

interface CurrentWeatherProps {
  time: TimeThere;
  sunrise: TimeThere;
  sunset: TimeThere;
  temperature: Temperature;
  feelsLike: Temperature;
}

class CurrentWeather extends ValueObject<CurrentWeatherProps> {
  private constructor(props: CurrentWeatherProps) {
    super(props);
  }

  get time(): TimeThere {
    return this.props.time;
  }

  get sunrise(): TimeThere {
    return this.props.sunrise;
  }

  get sunset(): TimeThere {
    return this.props.sunset;
  }

  get temperature(): Temperature {
    return this.props.temperature;
  }

  get feelsLike(): Temperature {
    return this.props.feelsLike;
  }

  public static create(
    time: TimeThere,
    sunrise: TimeThere,
    sunset: TimeThere,
    temperature: Temperature,
    feelsLike: Temperature
  ): CurrentWeather {
    if (isMissing(time)) {
      throw new InvalidValue("CurrentWeather must have a(n) time parameter");
    }

    if (isMissing(sunrise)) {
      throw new InvalidValue("CurrentWeather must have a(n) sunrise parameter");
    }

    if (isMissing(sunset)) {
      throw new InvalidValue("CurrentWeather must have a(n) sunset parameter");
    }

    if (isMissing(temperature)) {
      throw new InvalidValue(
        "CurrentWeather must have a(n) temperature parameter"
      );
    }

    if (isMissing(feelsLike)) {
      throw new InvalidValue(
        "CurrentWeather must have a(n) feelsLike parameter"
      );
    }

    return new CurrentWeather({
      time,
      sunrise,
      sunset,
      temperature,
      feelsLike,
    });
  }
}

export default CurrentWeather;

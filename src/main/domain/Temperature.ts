import { isMissing } from "../FieldValidationUtils";
import InvalidValue from "./InvalidValueError";
import Unit, { DEFAULT_UNIT } from "./Unit";
import { ValueObject } from "./ValueObject";

// C = K - 273.15
// K = C + 273.15
// C = (F - 32) % 1.8
// F = (C * 1.8) + 32
const kelvinToCelsius = (value: number) => value - 273.15;
const celsiusToKelvin = (value: number) => value + 273.15;
const fahrenheitToCelsius = (value: number) => (value - 32) / 1.8;
const celsiusToFahrenheit = (value: number) => value * 1.8 + 32;

interface TemperatureProps {
  valueInCelsius: number;
}

class Temperature extends ValueObject<TemperatureProps> {
  private constructor(props: TemperatureProps) {
    super(props);
  }

  get inCelsius() {
    return this.props.valueInCelsius;
  }

  get inKelvin() {
    return celsiusToKelvin(this.props.valueInCelsius);
  }

  get inFahrenheit() {
    return celsiusToFahrenheit(this.props.valueInCelsius);
  }

  public static create(value: number, unit: Unit) {
    if (isMissing(value)) {
      throw new InvalidValue("Time must have an epochSeconds parameter");
    }

    unit = unit || DEFAULT_UNIT;

    switch (unit) {
      // Imperial uses Fahrenheit
      case Unit.imperial:
        return new Temperature({ valueInCelsius: fahrenheitToCelsius(value) });
      // Metric uses Celsius
      case Unit.metric:
        return new Temperature({ valueInCelsius: value });
      // Standard uses Kelvin
      case Unit.standard:
        return new Temperature({ valueInCelsius: kelvinToCelsius(value) });
    }
  }
}

export default Temperature;

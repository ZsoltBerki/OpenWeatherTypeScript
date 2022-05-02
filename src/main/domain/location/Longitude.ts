import InvalidValue from "../InvalidValueError";
import { ValueObject } from "../ValueObject";

interface LongitudeProps {
  value: number;
}

class Longitude extends ValueObject<LongitudeProps> {
  get value(): number {
    return this.props.value;
  }

  private constructor(props: LongitudeProps) {
    super(props);
  }

  public static create(longitude: number): Longitude {
    if (
      longitude === undefined ||
      longitude === null ||
      longitude < -180 ||
      longitude > 180
    ) {
      throw new InvalidValue("Longitude must be between -180 and +180");
    } else {
      return new Longitude({ value: longitude });
    }
  }
}

export default Longitude;

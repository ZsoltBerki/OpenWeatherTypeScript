import InvalidValue from "../InvalidValueError";
import { ValueObject } from "../ValueObject";

interface LatitudeProps {
  value: number;
}

class Latitude extends ValueObject<LatitudeProps> {
  get value(): number {
    return this.props.value;
  }

  private constructor(props: LatitudeProps) {
    super(props);
  }

  public static create(latitude: number): Latitude {
    if (
      latitude === undefined ||
      latitude === null ||
      latitude < -90 ||
      latitude > 90
    ) {
      throw new InvalidValue("Latitude must be between -90 and +90");
    } else {
      return new Latitude({ value: latitude });
    }
  }
}

export default Latitude;

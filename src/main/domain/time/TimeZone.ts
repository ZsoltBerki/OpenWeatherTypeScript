import { isEmpty, isMissing } from "../../FieldValidationUtils";
import InvalidValue from "../InvalidValueError";
import { ValueObject } from "../ValueObject";

interface TimeZoneProps {
  name: string;
  offset: number;
}

class TimeZone extends ValueObject<TimeZoneProps> {
  get name(): string {
    return this.props.name;
  }

  /**
   * Returns the offset is seconds
   */
  get offset(): number {
    return this.props.offset;
  }

    /**
   * Returns the offset is miliseconds
   */
     get offsetMs(): number {
      return this.props.offset * 1000;
    }

  private constructor(props: TimeZoneProps) {
    super(props);
  }

  public static create(name: string, offset: number) {
    if (isEmpty(name)) {
      throw new InvalidValue("TimeZone must have name");
    }

    if (isMissing(offset)) {
      throw new InvalidValue("TimeZone must have offset");
    }

    return new TimeZone({ name, offset });
  }
}

export default TimeZone;

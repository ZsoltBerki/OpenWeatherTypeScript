import { isMissing } from "../../FieldValidationUtils";
import InvalidValue from "../InvalidValueError";
import { ValueObject } from "../ValueObject";
import TimeZone from "./TimeZone";

interface TimeProps {
  timeZone: TimeZone;
  epochSeconds: number;
}

class TimeThere extends ValueObject<TimeProps> {
  private dateThere: Date;

  private constructor(props: TimeProps) {
    super(props);

    this.dateThere = new Date();
    this.dateThere.setTime((props.epochSeconds + props.timeZone.offset) * 1000);

    this.dateThere.toLocaleDateString;
  }

  get year() {
    return this.dateThere.getUTCFullYear();
  }
  get month() {
    return this.dateThere.getUTCMonth();
  }
  get date() {
    return this.dateThere.getUTCDate();
  }
  get day() {
    return this.dateThere.getUTCDay();
  }
  get hours() {
    return this.dateThere.getUTCHours();
  }
  get minutes() {
    return this.dateThere.getUTCMinutes();
  }
  get seconds() {
    return this.dateThere.getUTCSeconds();
  }

  get isoDate() {
    return this.dateThere.toISOString().split("T")[0];
  }

  get isoTime() {
    return this.dateThere.toISOString().split("T")[1].split(".")[0];
  }

  public static create(epochSeconds: number, timeZone?: TimeZone): TimeThere {
    if (isMissing(epochSeconds)) {
      throw new InvalidValue("Time must have an epochSeconds parameter");
    }

    return new TimeThere({
      epochSeconds: epochSeconds,
      timeZone: timeZone || TimeZone.create("UTC", 0),
    });
  }
}

export default TimeThere;

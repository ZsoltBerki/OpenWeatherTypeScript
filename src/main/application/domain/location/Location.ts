import InvalidValue from "../InvalidValueError";
import { ValueObject } from "../ValueObject";
import Latitude from "./Latitude";
import Longitude from "./Longitude";

interface LocationProps {
  latitude: Latitude;
  longitude: Longitude;
}

class Location extends ValueObject<LocationProps> {
  get longitude(): Longitude {
    return this.props.longitude;
  }

  get latitude(): Latitude {
    return this.props.latitude;
  }

  private constructor(props: LocationProps) {
    super(props);
  }

  public static create(longitude: Longitude, latitude: Latitude) {
    if (longitude === undefined || longitude === null) {
      throw new InvalidValue("Location must have longitude");
    }

    if (latitude === undefined || latitude === null) {
      throw new InvalidValue("Location must have latitude");
    }

    return new Location({ longitude, latitude });
  }
}

export default Location;

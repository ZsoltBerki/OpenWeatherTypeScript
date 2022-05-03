import ParsingError from "./ParsingError";
import Location from "../domain/location/Location";
import Longitude from "../domain/location/Longitude";
import Latitude from "../domain/location/Latitude";
import { isNumber, isObject } from "./ParserUtils";

class LocationParser {
  private static LONGITUDE_FIELD = "lon";
  private static LATITUDE_FIELD = "lat";

  public static parse(object: any): Location {
    if (!isObject(object)) {
      throw new ParsingError("LocationParser must receive object");
    }

    const longitude = (object as Object)[LocationParser.LONGITUDE_FIELD];
    const latitude = (object as Object)[LocationParser.LATITUDE_FIELD];

    if (!isNumber(longitude)) {
      throw new ParsingError(
        "LocationParser must receive number in field " +
          LocationParser.LONGITUDE_FIELD
      );
    }

    if (!isNumber(latitude)) {
      throw new ParsingError(
        "LocationParser must receive number in field " +
          LocationParser.LATITUDE_FIELD
      );
    }

    return Location.create(
      Longitude.create(longitude),
      Latitude.create(latitude)
    );
  }
}

export default LocationParser;

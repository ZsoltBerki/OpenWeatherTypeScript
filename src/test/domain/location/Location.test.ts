import InvalidValue from "../../../main/domain/InvalidValueError";
import Latitude from "../../../main/domain/location/Latitude";
import Location from "../../../main/domain/location/Location";
import Longitude from "../../../main/domain/location/Longitude";

describe("Location", () => {
  test("can be created", () => {
    const result = Location.create(
      Longitude.create(23.3323),
      Latitude.create(41.2345)
    );

    expect(result.longitude.value).toBe(23.3323);
    expect(result.latitude.value).toBe(41.2345);
  });

  test("cannot be created with null longitude", () => {
    expect(() => {
      Location.create(null, Latitude.create(41.2345));
    }).toThrow(InvalidValue);
  });

  test("cannot be created with undefined longitude", () => {
    expect(() => {
      Location.create(undefined, Latitude.create(41.2345));
    }).toThrow(InvalidValue);
  });

  test("cannot be created with null latitude", () => {
    expect(() => {
      Location.create(Longitude.create(41.2345), null);
    }).toThrow(InvalidValue);
  });

  test("cannot be created with undefined latitude", () => {
    expect(() => {
      Location.create(Longitude.create(41.2345), undefined);
    }).toThrow(InvalidValue);
  });
});

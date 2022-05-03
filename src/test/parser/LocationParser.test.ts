import LocationParser from "../../main/parser/LocationParser";
import ParsingError from "../../main/parser/ParsingError";

describe("LocationParser", () => {
  test("can be parsed", () => {
    const testData =
      '{"lat":62.6164,"lon":29.709,"timezone":"Europe/Helsinki"}';
    const location = LocationParser.parse(JSON.parse(testData));

    expect(location.latitude.value).toBe(62.6164);
    expect(location.longitude.value).toBe(29.709);
  });

  test("fails if does not receive object", () => {
    const testData =
      '{"lat":62.6164,"lon":29.709,"timezone":"Europe/Helsinki"}';

    expect(() => {
      LocationParser.parse(testData);
    }).toThrow(ParsingError);
  });

  test("fails if lat is missing", () => {
    const testData = '{"lon":29.709,"timezone":"Europe/Helsinki"}';

    expect(() => {
      LocationParser.parse(JSON.parse(testData));
    }).toThrow(ParsingError);
  });

  test("fails if lat is not a number", () => {
    const testData =
      '{"lat":"62.6164","lon":29.709,"timezone":"Europe/Helsinki"}';

    expect(() => {
      LocationParser.parse(JSON.parse(testData));
    }).toThrow(ParsingError);
  });

  test("fails if lon is missing", () => {
    const testData = '{"lat":62.6164,"timezone":"Europe/Helsinki"}';

    expect(() => {
      LocationParser.parse(JSON.parse(testData));
    }).toThrow(ParsingError);
  });

  test("fails if lon is not a number", () => {
    const testData =
      '{"lat":62.6164,"lon":"29.709","timezone":"Europe/Helsinki"}';

    expect(() => {
      LocationParser.parse(JSON.parse(testData));
    }).toThrow(ParsingError);
  });
});

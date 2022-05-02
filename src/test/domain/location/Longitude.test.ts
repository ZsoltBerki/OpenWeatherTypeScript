import Longitude from "../../../main/domain/location/Longitude";

describe("Longitude", () => {
  test("can be created", () => {
    const result = Longitude.create(23.43234);
    expect(result.value).toBe(23.43234);
  });
});

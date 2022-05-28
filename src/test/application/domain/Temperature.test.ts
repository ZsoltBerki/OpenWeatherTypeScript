import InvalidValue from "../../../main/application/domain/InvalidValueError";
import Temperature from "../../../main/application/domain/Temperature";
import Unit from "../../../main/application/domain/Unit";

describe("Temperature", () => {
  test("can be created", () => {
    const result = Temperature.create(10, Unit.metric);
    expect(result.inCelsius).toBe(10);
  });

  test("created with Kelvin by default", () => {
    const result = Temperature.create(10, undefined);
    expect(result.inKelvin).toBe(10);
  });

  test("cannot be created without a value", () => {
    expect(() => {
      Temperature.create(null, Unit.metric);
    }).toThrow(InvalidValue);

    expect(() => {
      Temperature.create(undefined, Unit.imperial);
    }).toThrow(InvalidValue);
  });

  test("conversations work", () => {
    const createdAsMetric = Temperature.create(10, Unit.metric);

    expect(createdAsMetric.inCelsius).toBe(10);
    expect(createdAsMetric.inFahrenheit).toBe(50);
    expect(createdAsMetric.inKelvin).toBe(283.15);

    const createdAsImperial = Temperature.create(50, Unit.imperial);

    expect(createdAsImperial.inCelsius).toBe(10);
    expect(createdAsImperial.inFahrenheit).toBe(50);
    expect(createdAsImperial.inKelvin).toBe(283.15);

    const createdAsStandard = Temperature.create(283.15, Unit.standard);

    expect(createdAsStandard.inCelsius).toBe(10);
    expect(createdAsStandard.inFahrenheit).toBe(50);
    expect(createdAsStandard.inKelvin).toBe(283.15);
  });
});

export const isObject = (o) =>
  typeof o === "object" && !Array.isArray(o) && o !== null;

export const isNumber = (o) => typeof o === "number" && o !== null;

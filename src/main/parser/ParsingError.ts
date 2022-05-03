class ParsingError extends Error {
  constructor(...rest) {
    super(...rest);
    Object.setPrototypeOf(this, ParsingError.prototype);
  }
}

export default ParsingError;

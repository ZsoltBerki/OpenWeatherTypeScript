class InvalidValue extends Error {
  constructor(...rest) {
    super(...rest);
    Object.setPrototypeOf(this, InvalidValue.prototype);
  }
}

export default InvalidValue;

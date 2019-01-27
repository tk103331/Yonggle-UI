const validators = {
  oneOf(items) {
    return val => {
      return items.indexOf(val) > -1;
    };
  },
  oneOfWidth(val) {
    return this.oneOf(["xs", "sm", "md", "lg"]);
  }
};

export default validators;

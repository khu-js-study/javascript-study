class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add1(arr) {
    return arr.map(function (item) {
      return this.prefix + item;
    });
  }

  add2(arr) {
    const that = this;
    return arr.map(function (item) {
      return that.prefix + item;
    });
  }

  add3(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("-webkit");

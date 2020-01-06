class Expect {
  constructor(expected = null) {
    this.expected = expected;
  }

  toBe = (actual) => {
    if (this.expected === actual) {
      console.log('.');
      return true;
    } else {
      console.log('F')
      return false;
    };
  }
}

const expect = (expected) => {
  return new Expect(expected);
}

class Expect {
  constructor(expected = null) {
    this.expected = expected;
  }

  toBe = actual => {
    if (!actual && !this.expected) { throw new Error('No assertion made') };
    if (!actual) { throw new Error('No actual value given in this assertion') };
    if (!this.expected) { throw new Error('No expected value given in this assertion') };
    if (this.expected === actual) {
      console.log('.');
      return true;
    } else {
      console.log('F')
      return false;
    };
  }

  toEqual = actual => {
    if (!actual && !this.expected) { throw new Error('No assertion made') };
    if (!actual) { throw new Error('No actual value given in this assertion') };
    if (!this.expected) { throw new Error('No expected value given in this assertion') };
    if (this.expected == actual) {
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

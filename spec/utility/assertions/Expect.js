class Expect {
  constructor(expected = null) {
    this.expected = expected;
  }

  toBe = actual => {
    validateAssertion(this.expected, actual);
    if (this.expected === actual) {
      console.log('.');
      return true;
    } else {
      console.log('F')
      return false;
    };
  }

  toEqual = actual => {
    validateAssertion(this.expected, actual);
    if (this.expected == actual) {
      console.log('.');
      return true;
    } else {
      console.log('F')
      return false;
    };
  }

  toContain = actual => {
    validateAssertion(this.expected, actual);
    let result = true;
    if (typeof actual === 'object') {
      try {
        actual.forEach(el => {
          result = result && this.expected.includes(el);
        });
        if (result) { console.log('.'); return true; }
      } catch (e) {
        throw new Error('Invalid assertion')
      }
    } else if (this.expected.includes(actual)) { 
      console.log('.'); return true;
    };

    console.log('F'); return false;
  }

  toAllBe(actual) {
    validateAssertion(this.expected, actual);
    let result = true;
    try {
      this.expected.forEach(el => {
        result = result && el === actual;
      });
      if (result) { console.log('.'); return true; }
    } catch (e) {
      throw new Error('Invalid assertion')
    }
    console.log('F'); return false;
  }
}

const expect = (expected) => {
  return new Expect(expected);
}

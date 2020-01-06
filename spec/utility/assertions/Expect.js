class Expect {
  constructor(expected = null) {
    this.expected = expected;
  }

  toBe = actual => {
    validateAssertion(this.expected, actual);
    if (this.expected === actual) {
      console.log(`    expected ${this.expected} to be ${actual} :: Test Passed`);
      console.log(' ');
      return true;
    } else {
      console.log(`    expected ${this.expected} to be ${actual} :: Test Failed`);
      console.log(' ');
      return false;
    };
  }

  toEqual = actual => {
    validateAssertion(this.expected, actual);
    if (this.expected == actual) {
      console.log(`    expected ${this.expected} to equal ${actual} :: Test Passed`);
      console.log(' ');
      return true;
    } else {
      console.log(`    expected ${this.expected} to equal ${actual} :: Test Failed`);
      console.log(' ');
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
        if (result) { 
          console.log(`    expected ${this.expected} to contain ${actual} :: Test Passed`); 
          console.log(' '); return true; };
      } catch (e) {
        throw new Error('Invalid assertion')
      }
    } else if (this.expected.includes(actual)) { 
      console.log(`    expected ${mapArrayToString(this.expected)} to contain ${actual} :: Test Passed`); 
      console.log(' '); return true;
    };

    console.log(`    expected ${mapArrayToString(this.expected)} to contain ${actual} :: Test Failed`); 
    console.log(' '); return false;
  }

  toAllBe(actual) {
    validateAssertion(this.expected, actual);
    let result = true;
    try {
      this.expected.forEach(el => {
        result = result && el === actual;
      });
      if (result) { 
        console.log(`    expected ${mapArrayToString(this.expected)} to all be ${actual} :: Test Passed`); 
        console.log(' '); return true; }
    } catch (e) {
      throw new Error('Invalid assertion')
    }
    console.log(`    expected ${mapArrayToString(this.expected)} to all be ${actual} :: Test Failed`); 
    console.log(' '); return false;
  }
}

const expect = (expected) => {
  return new Expect(expected);
}

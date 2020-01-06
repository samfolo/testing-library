describe('toBe', () => {
  it('deeply compares (===) an actual and expected value', () => {
    expect(5).toBe(5); // should be true
    expect(4).toBe('4'); //should be false
    expect('two').toBe(2); // to be false
    expect('six').toBe('six'); // should be true
  });

  it('is validates that 1 + 1 is 2', () => {
    expect(1 + 1).toBe(2);
  });
});

try { expect().toBe(true) } catch (e) { console.log('error as expected, F'); } // should throw error NO_ACTUAL
try { expect(true).toBe() } catch (e) { console.log('error as expected, F'); } // should throw error NO_EXPECTED
try { expect().toBe() } catch (e) { console.log('error, as expected, F'); } // should throw error NO_ASSERTION

describe('toEqual', () => {
  it('lightly compares (==) an actual and expected value', () => {
    expect(5).toEqual('5'); // should be true
    expect([]).toEqual([]); // should be false
    expect(1 + 1).toEqual(2); //should be true
    expect(1 + 1).toEqual(3); // should be false
  });
});

try { expect().toEqual('x') } catch (e) { console.log('error as expected, F'); } // should throw error NO_ACTUAL
try { expect({ a: 'b'}).toEqual() } catch (e) { console.log('error as expected, F'); } // should throw error NO_EXPECTED
try { expect().toEqual() } catch (e) { console.log('error, as expected, F'); } // should throw error NO_ASSERTION

describe('toContain', () => {
  it('checks if an element or elements (all) exist(s) within the expected array', () => {
    expect([3, 2, 1]).toContain([1, 2, 3]); // should be true
    expect(['4', '3', '2', '1']).toContain('4'); // should be true
    expect(['4', '3', '2', '1']).toContain(4); // should be false
    expect([(() => { return 4 * 4})(), '6']).toContain(16); // should be true
  });

  it("can validate the contents of ['this', 'that', 'the other']", () => {
    expect(['this', 'that', 'the other']).toContain('this');
    expect(['this', 'that', 'the other']).toContain('that');
    expect(['this', 'that', 'the other']).toContain('the other');
  });
});

try { expect(1, 2, 3, 4).toContain(3) } catch (e) { console.log('error, as expected, F'); } // should throw error INVALID_ASSERTION
try { expect().toContain(4 % 2) } catch (e) { console.log('error as expected, F'); } // should throw error NO_ACTUAL
try { expect(JSON.stringify('this')).toContain() } catch (e) { console.log('error as expected, F'); } // should throw error NO_EXPECTED
try { expect().toContain() } catch (e) { console.log('error, as expected, F'); } // should throw error NO_ASSERTION

describe('toAllBe', () => {
  it('checks if all elements within the expected array evaluate to a particular value', () => {
    expect([true, true, true]).toAllBe(true); // should be true
    expect([true, false, true]).toAllBe(true); // should be false
    expect([1 + 1, 2 + 2, 5]).toAllBe(5); // should be false
    expect([typeof 'woof', typeof 'meow']).toAllBe('string'); // should be true
  });
});

describe('toThrowError', () => {
  it('anticipates an error held in a function', () => {
    expect(() => { throw new Error }).toThrowError();
    expect(() => { 1 - 'teeth' }).toThrowError();
  });
});

try { expect().toAllBe('number') } catch (e) { console.log('error as expected, F'); } // should throw error NO_ACTUAL
try { expect(...Array(10)).toAllBe() } catch (e) { console.log('error as expected, F'); } // should throw error NO_EXPECTED
try { expect().toAllBe() } catch (e) { console.log('error, as expected, F'); } // should throw error NO_ASSERTION

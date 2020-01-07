describe('toBe', () => {
  it('deeply compares (===) an actual and expected value', () => {
    expect(5).toBe(5);
    expect(4).not.toBe('4');
    expect('two').not.toBe(2);
    expect('six').toBe('six');
  });

  it('is validates that 1 + 1 is 2', () => {
    expect(1 + 1).toBe(2);
  });
});

try { expect().toBe(true) } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect(true).toBe() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect().toBe() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }

describe('toEqual', () => {
  it('lightly compares (==) an actual and expected value', () => {
    expect(5).toEqual('5');
    expect([]).not.toEqual([]);
    expect(1 + 1).toEqual(2);
    expect(1 + 1).toEqual(3);
  });
});

try { expect().toEqual('x') } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect({ a: 'b'}).toEqual() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect().toEqual() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }

describe('toContain', () => {
  it('checks if an element or elements (all) exist(s) within the expected array', () => {
    expect([3, 2, 1]).toContain([1, 2, 3]);
    expect(['4', '3', '2', '1']).toContain('4');
    expect(['4', '3', '2', '1']).not.toContain(4);
    expect([(() => { return 4 * 4})(), '6']).toContain(16);
  });

  it("can validate the contents of ['this', 'that', 'the other']", () => {
    expect(['this', 'that', 'the other']).toContain('this');
    expect(['this', 'that', 'the other']).toContain('that');
    expect(['this', 'that', 'the other']).toContain('the other');
  });
});

try { expect(1, 2, 3, 4).toContain(3) } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect().toContain(4 % 2) } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect(JSON.stringify('this')).toContain() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect().toContain() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }

describe('toAllBe', () => {
  it('checks if all elements within the expected array evaluate to a particular value', () => {
    expect([true, true, true]).toAllBe(true);
    expect([true, false, true]).not.toAllBe(true);
    expect([1 + 1, 2 + 2, 5]).not.toAllBe(5);
    expect([typeof 'woof', typeof 'meow']).toAllBe('string');
  });
});

describe('toThrowError', () => {
  it('anticipates an error held in a function', () => {
    expect(() => { throw new Error }).toThrowError();
    expect(() => { throw 'something' }).toThrowError();
    expect(() => { return ':)' }).not.toThrowError();
  });
});

try { expect().toAllBe('number') } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect(...Array(10)).toAllBe() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }
try { expect().toAllBe() } catch (e) { console.log('[Caught Error], Invalid assertion handled'); }

describe('toBeTruthy()', () => {
  it('returns true when passed a truthy value', () => {
    expect(' ').toBeTruthy();
    expect(10).toBeTruthy();
    expect('\'false\'').toBeTruthy();
    expect(null).not.toBeTruthy();
    expect(false).not.toBeTruthy();
  });
});

describe('toBeFalsy()', () => {
  it('returns true when passed a truthy value', () => {
    expect('').toBeFalsy()
    expect(0).toBeFalsy();
    expect(true).not.toBeFalsy();
    expect(null).toBeFalsy();
    expect('Sam' - 'Sam').toBeFalsy();
    expect(undefined).toBeFalsy();
  });
});

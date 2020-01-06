describe('one plus one', () => {
  it('is equal to two', () => {
    expect(1 + 1).toBe(2);
  })
});

describe("an array of ['this', 'that', 'the other']", () => {
  it("contains 'this'", () => {
    expect(['this', 'that', 'the other']).toContain('this');
    expect(['this', 'that', 'the other']).toContain('that');
    expect(['this', 'that', 'the other']).toContain('the other');
  })
});

describe('an explicitly thrown error', () => {
  it('is anticipated by the assertion', () => {
    expect(() => {
      throw new Error
    }).toThrowError();
  })
})
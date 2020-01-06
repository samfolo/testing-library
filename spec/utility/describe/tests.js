describe('one plus one', () => {
  it('is equal to two', () => {
    expect(1 + 1).toBe(2);
  })
});

describe("an array of ['this', 'that', 'the other']", () => {
  it("contains 'this'", () => {
    expect(['this', 'that', 'the other']).toContain('this');
  })
});
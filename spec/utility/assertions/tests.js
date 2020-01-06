// 'toBe':
expect(5).toBe(5); // should be true
expect(4).toBe('4'); //should be false
expect('two').toBe(2); // to be false
expect('six').toBe('six'); // should be true
try { expect().toBe(true) } catch (e) { console.log('error as expected, F'); } // should throw error NO_ACTUAL
try { expect(true).toBe() } catch (e) { console.log('error as expected, F'); } // should throw error NO_EXPECTED
try { expect().toBe() } catch (e) { console.log('error, as expected, F'); } // should throw error NO_ASSERTION

const validateAssertion = (expected, actual) => {
  if (!actual && !expected) { throw new Error('No assertion made') };
  if (!actual) { throw new Error('No actual value given in this assertion') };
  if (!expected) { throw new Error('No expected value given in this assertion') };
}

const mapArrayToString = (arr) => {
  if (!arr) {
    return arr;
  }

  if (typeof arr === 'object' && arr.length < 1) {
    return JSON.stringify(arr);
  } else if (typeof arr === 'object' && arr.length > 1) {
    return '[' + arr.join(', ') + ']';
  } else {
    try { return `${arr.pop}` } catch (e) { return arr };
  } 
}

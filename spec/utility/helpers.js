const validateAssertion = (expected, actual) => {
  if (!actual && !expected) { throw new Error('No assertion made') };
  if (!actual) { throw new Error('No actual value given in this assertion') };
  if (!expected) { throw new Error('No expected value given in this assertion') };
}

const mapArrayToString = (arr) => {
  if (arr.length > 1) {
    return '[' + arr.join(', ') + ']';
  } else {
    return `${arr.pop}`;
  } 
}

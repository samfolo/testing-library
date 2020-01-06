class SamTest {
  static describe = (description, assertion) => {
    console.log('Describe ' + description + ": ");
    assertion();
    console.log(' ')
  };
}

const describe = (description, assertion) => {
  return SamTest.describe(description, assertion);
}
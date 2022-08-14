const sum = (a, b) => {
  return a + b;
};

const inOneHour = () => {
  /**
   * Instead of: const now = Date.now(); 
     use a unit:  const now = 10;
     because who will test the function Date.now() is a test for it.
   */
  const now = Date.now();
  const oneHourInMili = 1 * 60 * 60 * 1000;
  return now + oneHourInMili;
};

export { sum, inOneHour };

/**
 * Forma informal de testes, comumente utilizado por nos
 */
// console.log(sum(1, 4));
// console.log(inOneHour());

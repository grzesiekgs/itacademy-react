const addTwo = (num) => {
  console.log('addTwo');

  return num + 2;
};
const multiplayByTwo = (num) => {
  console.log('multiplayByTwo');

  return num * 2;
};
const logValue = (value) => {
  console.log('logValue', value);
  return value;
};
const throwError = (value) => {
  console.log(value);
  throw new Error(`Final result ${value}`);
};

/* 
const executePromise = new Promise((resolve, reject) => {
  console.log('creating promise');

  setTimeout(() => {
    resolve(2);
  }, 2000);
});
console.log('after promise creation');

executePromise
  .then(multiplayByTwo)
  .then(throwError)
  .then(addTwo)
  .then(logValue)
  .catch((error) => console.log('error occurred', error));

console.log('after everything');
 */

const createPromise = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Resolve after', timeout);
      resolve();
    }, timeout);
  });
};

Promise.all([
  createPromise(500),
  createPromise(1000),
  createPromise(1500),
]).then(() => {
  console.log('promises finished');
});

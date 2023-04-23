
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let depositsGreaterThanOneHundred = [];
  for (let index = 0; index < array.length; index++) {
    const account = array[index];
    if (typeof account.deposits !== 'undefined') {
      for (let index = 0; index < account.deposits.length; index++) {
        if (account.deposits[index] > 100) {
          depositsGreaterThanOneHundred.push(account.deposits[index])
        }
      }
    }
    } return depositsGreaterThanOneHundred;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

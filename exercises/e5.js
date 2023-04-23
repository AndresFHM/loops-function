
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

export function getAllClientNames(array) {
  // Your code goes here...
  let accountNames = []
  function BankAccount(id, name) {
    this.id = id;
    this.name = name;      
  }
  for (let index = 0; index < array.length; index++) {
    const account = new BankAccount(array[index].id, array[index].name)
    accountNames.push(account.name)
  }return accountNames
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

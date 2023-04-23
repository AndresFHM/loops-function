// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(array) {
  // Your code goes here...
  let accountNames = []
  function BankAccount(id, name, balance) {
    this.id = id;
    this.name = name;  
    this.balance = balance;
  }
  for (let index = 0; index < array.length; index++) {
    const account = new BankAccount(array[index].id, array[index].name, array[index].balance)
    if (array[index].balance === 0) {
      accountNames.push(account.name)
    }

  }return accountNames
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

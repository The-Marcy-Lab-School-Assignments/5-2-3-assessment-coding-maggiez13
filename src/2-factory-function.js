const bankAccountFactory = (initialBalance = 0) => {
  let balance = initialBalance;

  return {
    checkBalance() {
      return balance;
    },
    add(amount) {
      balance += amount;
      console.log(`$${amount} added.`);
    },
    subtract(amount) {
      balance -= amount;
      console.log(`$${amount} subtracted.`);
    }
  }
};

module.exports = {
  bankAccountFactory,
};

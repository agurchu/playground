// create bank class with withdraw(), Deposit() and properties like balance

class Bank {
  constructor(accHolder, balance, accNum, cellNum) {
    (this.account_holder = accHolder),
      (this.balance = balance),
      (this.account_number = accNum),
      (this.phone_number = cellNum);
  }

  withdraw(amount) {
    if (this.balance - amount <= 0) {
      return (this.balance = "Insuffient Amount");
    } else {
      this.balance -= amount;
      console.log(`withdrew: R${amount}`);
      console.log(`Balance: R${this.balance}`);
      document.getElementById("balance-display").innerText = this.balance;
    }
  }
  deposit(amount) {
    if (amount <= 0 || amount > this.balance) {
      return (document.getElementById("balance-display").innerText =
        this.balance);
    } else {
      console.log(`Deposited: R${amount}`);
      this.balance += amount;
      console.log(`Balance: R${this.balance}`);
      document.getElementById("balance-display").innerText = this.balance;
    }
  }
}

const person1 = new Bank("katlego", 100, "133 53 888", "063 734 2965");

const withdrawBtn = document.getElementById("withdraw-btn");
const depositBtn = document.getElementById("deposit-btn");
const withdrawInput = document.getElementById("withdraw-input");
const depositInput = document.getElementById("deposit-input");

depositBtn.onclick = () => {
  person1.deposit(Number(depositInput.value));
};
withdrawBtn.onclick = () => {
  person1.withdraw(Number(withdrawInput.value));
};

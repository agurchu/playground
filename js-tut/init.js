/**Math Operators
 * Multiply *
 * Divide /
 * Exponent **
 * Modulo/reimander % (5%2=1)
 */

/**MAth Methods
 
 *Floor - rounds down (5.7 => 5) Math.floor(5.7)
 *ceil - round up (5.7 => 6) Math.ceil(5.7)
 *Random - gives a random number btween 0 & 1 (Math.random() => 0.2255636)
 */

/* App: Calulator

These are  the 3 functions to use
=================================
calculateBill()
incresePeople()
decresePeople()

All div ID's to access
======================
#1 ID "billTotalInput" = User input for bill total
#2 ID "tipInput" = user input for tip
#3 ID "numberOfPeople" = Current number of people that are splited
#4 ID "perPersonTotal" = Total dollar value owed per person
*/

const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

// get number of people from number of people
let numberOfPeople = Number(numOfPeopleDiv.innerText);

// ** Calculate the total bill per person

const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage
  const tipPercentage = Number(tipInput.value) / 100;

  // get the total tip amount

  const tipAmount = bill * tipPercentage;

  // calculate the total (tip amount + bill)

  const total = tipAmount + bill;

  // calculate total of per person ( total / number of perple)
  const totalPerPerson = total / numberOfPeople;
  perPersonTotal.innerText = `R ${totalPerPerson.toFixed(2)}`;
};

// ** splits the bill per person
const incresePeople = () => {
  // increment
  numberOfPeople++;

  numOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

const decresePeople = () => {
  // if (numberOfPeople > 1) {
  //   // decrement
  //   numberOfPeople--;
  //   numOfPeopleDiv.innerText = numberOfPeople;
  // }

  if (numberOfPeople <= 1) {
    alert("number of people can not be less than 1");
    return;
  }

  numberOfPeople--;
  numOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

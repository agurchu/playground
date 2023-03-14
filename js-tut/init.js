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
const numOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

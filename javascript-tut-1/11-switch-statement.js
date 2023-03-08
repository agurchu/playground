/**
 *  mon - 7am
 * Tue - thur - 4am
 * fri - 9am
 * sat - sun - 8am
 */

let day = "holiday";

//pass a variable ()
switch (day) {
  case "monday":
    console.log("7am");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("4am");
    break;
  case "friday":
    console.log("9am");
    break;
  case "Saturday":
  case "Sunday":
    console.log("8am");
    break;
  default:
    console.log("watch movies");
}

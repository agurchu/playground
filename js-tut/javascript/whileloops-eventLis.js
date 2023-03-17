// ** while loops
// let num = 0;

// while (num < 5) {
//   console.log("looping", num);
//   num++;
// }

const btnDiv = document.getElementById("btn");

// btnDiv.onclick = () => {
//   console.log("hello");
// };

btnDiv.addEventListener("click", () => {
  console.log("its me");
});

// document.addEventListener("keydown", () => {
//   console.log("hi"); // if press any key on the keybord it says hi
// });

document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    console.log("You pressed Q");
    document.getElementById("punch").play();
  } else {
    console.log("Not Q");
    document.getElementById("urinal").play();
  }
});

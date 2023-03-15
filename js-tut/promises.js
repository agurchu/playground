// ** Asynchronous programming

// promises

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    //isReady => condition, resolve runs if condition is true, reject runs if false
    isReady ? resolve("soup is ready") : reject("no soup today");
  }, 2000);
});

// console.log(
//   promise1
//     .then((success) => console.log({ success }))
//     .catch((error) => console.log({ error }))
// );

// Async & Await
// post request think async
// fetch think async

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data) => console.log(data)

// Rules for using async / await
// 1. must create a function to calls async
// 2. must use the keyword async
// 3. must use the word await

// const getDog = async () => {
//   const url = "https://dog.ceo/api/breeds/image/random";
//   const response = await fetch(url); //await same as .then((response) => response.json()).then((data) => ...
//   const data = await response.json();
//   console.log(data.message);
// };

// getDog();

const promiseFuntion = async () => {
  const data = { rating: null, tip: null, review: null };
  try {
    const reponse = await promise1;
    console.log(reponse);
    data.rating = 5;
    data.tip = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = 0;
    data.review = 0;

    return data;
  }
};

console.log(promiseFuntion().then((value) => console.log(value)));

const sum = async (a, b) => a + b;

console.log(sum(1, 2).then((value) => console.log(value)));

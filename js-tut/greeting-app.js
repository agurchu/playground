function greeting(name) {
  const greet = `Hi ${name}, nice to meet you! I'm Katlego J Mtimane.`;
  const intro = prompt(`${greet} What is ur fav colour`);
  const place = prompt(
    `Wow!! ${intro}, nice color! Le nna, mara for clothes only. where do you say gabotse??`
  );
  prompt(`Where in ${place}? ka gore I once been there!`);
  const meet = prompt(
    `Okay! May I pay you a visit sometime? just go go bona nje?`
  );
  if (meet === "yes") {
    const num = prompt(`Abashwe, please share your phone numbers`);
    alert(`Thanks, I'll whatsapp you on ${num}`);
  } else {
    prompt(`Come on please, Fana?`);
  }
}
const ask = prompt("hey, what is your name?");
greeting(ask);

const when = ["Today ", "This week ", "This month ", "This year "];
const what = [
  "will be the best you had in a while, ",
  "will suck! Go back to bed, ",
  "will be alright, ",
  "something good will happen, ",
];
const who = ["tiger.", "champ.", "mate.", "dude."];

let random = () => {
  return Math.floor(Math.random() * 4);
};
document.querySelector("h1").innerHTML =
  when[random()] + what[random()] + who[random()];

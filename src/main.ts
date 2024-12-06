import "./styles.css";
import {
  averageAge,
  averageNumberOfHobbies,
  mostHobbys,
  oldestAge,
  youngestAge,
  arr,
} from "./func/human";
import {
  averageMonsterAge,
  averageNumberOfTentacles,
  getAllNoWingedMonster,
  numberOfMonstersWithWings,
  prettyPrintMonster,
  monsters,
} from "./func/monster";
import { commonColor, numberOfColors, dogs } from "./func/dog";

// Fixa så funktionen gör det den ska
const printSum = (a: number, b: number) => {
  console.log(a + b);
};

printSum(1, 2);
printSum(5, 12);

console.log(`Vi har ${arr.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(arr)}`);
console.log(
  `Medelantalet hobbies per användare är ${averageNumberOfHobbies(arr)}`
);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen.
console.log(
  `Den personen med flest hobbies har ${mostHobbys(arr)} stycken hobbies`
);
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Ska de två funktionerna
console.log(
  `Den äldsta personen är ${oldestAge(arr)} och den yngsta är ${youngestAge(
    arr
  )}`
);

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(
  `Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`
);
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(
  `Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(
    monsters
  )}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonster(monsters);

console.log(
  `Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

const noWingedMonster = getAllNoWingedMonster(monsters);
console.log(noWingedMonster);

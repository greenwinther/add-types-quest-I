//utöka så alla egenskaper för monstret skrivs ut
import { monsterUser } from "../users";

export const monsters: monsterUser[] = [
  { name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
  { name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
  { name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
  { name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
  { name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
  {
    name: "Oligarnaclech",
    age: 36,
    tentacles: 675,
    eyes: 148,
    hasWings: true,
  },
  { name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
  { name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
  { name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
  { name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
  { name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: false },
];

export const prettyPrintMonster = (allUsers: monsterUser[]) => {
  allUsers.forEach((user) => {
    console.log(
      `Monster: ${user.name} Age: ${user.age} Tentacles: ${user.tentacles} Eyes: ${user.eyes} Has Wings: ${user.hasWings}`
    );
  });
};

/* export const averageMonsterAge = (allUsers: monsterUser[]): number => {
  let allAges = 0;
  allUsers.forEach((user) => {
    allAges += user.age;
  });
  return Math.round(allAges / allUsers.length);
}; */

//Optimized version
export const averageNumberOfTentacles = (allUsers: monsterUser[]): number => {
  const allTentacles = allUsers.reduce((sum, user) => sum + user.tentacles, 0);
  return Math.round(allTentacles / allUsers.length);
};

export const numberOfMonstersWithWings = (allUsers: monsterUser[]): number => {
  let wings: number = 0;
  allUsers.forEach((user) => {
    if (user.hasWings === true) {
      wings++;
    }
  });
  return wings;
};

//Optimized version
export const getAllNoWingedMonster = (allUsers: monsterUser[]): number => {
  return allUsers.filter((user) => !user.hasWings).length;
};

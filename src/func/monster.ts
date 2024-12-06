//utöka så alla egenskaper för monstret skrivs ut
import { monsterUser } from "../users";

export const prettyPrintMonster = (allUsers: monsterUser[]) => {
  allUsers.forEach((user) => {
    console.log(`Monster: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Tentacles: ${user.tentacles}`);
    console.log(`Eyes: ${user.eyes}`);
    console.log(`Has Wings: ${user.hasWings}`);
  });
};

export const averageMonsterAge = (allUsers: monsterUser[]): number => {
  let allAges = 0;
  allUsers.forEach((user) => {
    allAges += user.age;
  });
  return Math.round(allAges / allUsers.length);
};

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

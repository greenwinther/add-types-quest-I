//Imported type
import { humanUser } from "../users";

//Added type to allUsers "(allUsers: humanUser[]): number"
export const averageAge = (allUsers: humanUser[]): number => {
  let allAges = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return allAges / allUsers.length;
};

//Added type to allUsers "(allUsers: humanUser[]): number"
export const averageNumberOfHobbies = (allUsers: humanUser[]): number => {
  let AllHobbies = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return AllHobbies / allUsers.length;
};

//Loop through users
//Loop through and count amount of hobbys each user has

export const mostHobbys = (allUsers: humanUser[]): number => {
  let maxHobbys = 0;
  allUsers.forEach((user) => {
    if (user.hobby.length > maxHobbys) {
      maxHobbys = user.hobby.length;
    }
  });

  return maxHobbys;
};

/* export const mostHobbys = (allUsers: humanUser[]): number => {
  return allUsers.reduce(
    (max, allUsers) => Math.max(max, allUsers.hobby.length),
    0
  );
}; */

//Få fram yngsta och älsta personen
//Om arr.age >

export const youngestAge = (allUsers: humanUser[]): number => {
  let minAge = Infinity;
  allUsers.forEach((user) => {
    if (user.age < minAge) {
      minAge = user.age;
    }
  });

  return minAge;
};

//More optimized version
/* export const youngestAge = (allUsers: humanUser[]): number => {
  return allUsers.reduce(
    (minAge, user) => (user.age < minAge ? user.age : minAge),
    allUsers[0].age
  );
}; */

export const oldestAge = (allUsers: humanUser[]): number => {
  let maxAge = 0;
  allUsers.forEach((user) => {
    if (user.age > maxAge) {
      maxAge = user.age;
    }
  });

  return maxAge;
};

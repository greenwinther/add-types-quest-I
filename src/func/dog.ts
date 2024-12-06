import { dogUser } from "../users";

//Hundarna har "undefined" antal unika färger
//Ta reda på antalet olika strings i d.color
//Jämnföra strings för att få utt ett nummer
/* This way we have learned
  export const numberOfColors = (d: dogUser[]): number => {
  const uniqueColors: string[] = [];
  d.forEach((i) => {
    if (!uniqueColors.includes(i.color)) {
      uniqueColors.push(i.color);
    }
  });
  return uniqueColors.length;
}; */

//New optimaized version
export const numberOfColors = (dogs: dogUser[]): number => {
  // The Map method creates a new array of colors
  // The Set conductor removes all duplicates
  const uniqueColors = new Set(dogs.map((i) => i.color));
  // The size property counts all the unique strings
  return uniqueColors.size;
};

//Den vanligaste färgen bland alla hundar är: "undefined"
/* export const commonColor = (dogs: dogUser[]): string => {
  const colorCount: Record<string, number> = {};

  d.forEach((i) => {
    colorCount[i.color] = (colorCount[i.color] || 0) + 1;
  });

  let mostCommon = "";
  let maxCount = 0;

  for (const color in colorCount) {
    if (colorCount[color] > maxCount) {
      maxCount = colorCount[color];
      mostCommon = color;
    }
  }
  return mostCommon;
}; */

//New optimaized version
export const commonColor = (dogs: dogUser[]): string => {
  //The type says that the object keys are strings and the vlaues are numbers
  const colorCounts: Record<string, number> = {};

  dogs.forEach((i) => {
    colorCounts[i.color] = (colorCounts[i.color] || 0) + 1;
    console.log(i.color);
  });

  return Object.keys(colorCounts).reduce((mostCommon, color) => {
    return colorCounts[color] > colorCounts[mostCommon] ? color : mostCommon;
  });
};

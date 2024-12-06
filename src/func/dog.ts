import { dogUser } from "../users";

// Array of dogs
export const dogs: dogUser[] = [
  { name: "Nisse", color: "brown" },
  { name: "Fiffi", color: "white" },
  { name: "Fluffe", color: "black" },
  { name: "Hoppe", color: "beige" },
  { name: "Pluto", color: "gray" },
  { name: "Winter", color: "gray" },
  { name: "Rolf", color: "brown" },
  { name: "Benny", color: "brown" },
  { name: "Krister", color: "brown" },
];

/* Function which culculates how many different colors of the dogs there are
  export const numberOfColors = (d: dogUser[]): number => {
  const uniqueColors: string[] = [];
  d.forEach((i) => {
    if (!uniqueColors.includes(i.color)) {
      uniqueColors.push(i.color);
    }
  });
  return uniqueColors.length;
}; */

// New optimized version
export const numberOfColors = (dogs: dogUser[]): number => {
  // The Map method creates a new array of colors. The Set conductor removes all duplicates
  const uniqueColors = new Set(dogs.map((i) => i.color));
  // The size property counts all the unique strings
  return uniqueColors.size;
};

/* Function which calculates which colors of the dogs are most common
export const commonColor = (dogs: dogUser[]): string => {
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

// New optimized version
export const commonColor = (dogs: dogUser[]): string => {
  // I create an empty object and assign it the key "string" and the value "number" (It's the same as "const colorCounts: { [key: string]: number } = {};", but cleaner)
  const colorCounts: Record<string, number> = {};
  dogs.forEach((i) => {
    // Check if the current color exists. If it does, use current count. If it doesnt default 0. Add 1
    // First time. colorCounts[brown] = (colorCounts[brown] || 0) + 1.  // 0 + 1 = 1
    // Second time. colorCounts[brown] = (colorCounts[brown] || 0) + 1. // 1 + 1 = 2
    // Update colorCount. Ex. Now it has a string "brown", and a value 4
    colorCounts[i.color] = (colorCounts[i.color] || 0) + 1;
    console.log(i.color);
  });
  // Take all the keys and see which has the higher value
  return Object.keys(colorCounts).reduce((mostCommon, color) => {
    // If colorCounts[color] > colorCounts[mostCommon] update color to mostCommon
    return colorCounts[color] > colorCounts[mostCommon] ? color : mostCommon;
  });
};

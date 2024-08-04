export const generateObjects = <T>(num: number, template: () => T): T[] => {
  const objects: T[] = [];
  for (let i = 0; i < num; i++) {
    objects.push(template());
  }
  return objects;
};

export function getRandomString<T>(randomArray: Array<T>): T {
  const randomIndex = Math.floor(Math.random() * randomArray.length);
  const string = randomArray[randomIndex];
  if (!string) throw new Error("String undefined");
  return string;
}

export function getRandomStrings<T>(arr: Array<T>, num: number): T[] {
  if (num > arr.length) {
    throw new Error("number is greater than array length");
  }
  const randomIndices: T[] = [];
  const usedIndices = new Set<number>();

  while (randomIndices.length < num) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const value = arr[randomIndex];
    if (value !== undefined) {
      randomIndices.push(value);
      usedIndices.add(randomIndex);
    }
  }

  return randomIndices;
}

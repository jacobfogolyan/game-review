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

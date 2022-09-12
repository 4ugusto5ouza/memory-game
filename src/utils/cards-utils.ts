function keyGen(): string {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function duplicateArray<T>(array: T[]): T[] {
  return array.concat(array);
}

export function sortArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export function regenerateArray<T>(array: T[]): T[] {
  return array.map((item) => ({ ...item, id: keyGen() }));
}

export function duplicateRegenerateSortArray<T>(array: T[]): T[] {
  return sortArray(regenerateArray(duplicateArray(array)));
}

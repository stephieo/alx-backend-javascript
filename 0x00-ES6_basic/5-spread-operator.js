export default function concatArrays(array1, array2, string) {
  const fullArray = [...array1, ...array2, ...string];
  return fullArray;
}

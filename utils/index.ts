export const generateRandomAlphaNumeric = () => {
  const RANDOM_STRING_LENGTH = 7;
  let s = "";
  Array.from({ length: RANDOM_STRING_LENGTH }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= RANDOM_STRING_LENGTH;
  });
  return s.slice(0, RANDOM_STRING_LENGTH);
};

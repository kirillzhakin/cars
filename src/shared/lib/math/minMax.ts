export const minMax = (value: number, min: number, max: number) => {
  const res = Math.min(Math.max(value, min), max);
  return res;
};

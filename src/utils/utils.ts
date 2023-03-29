export const getDecimals = (n: number): number => {
  return parseInt(n.toString().split('.')[1]) || 0;
}
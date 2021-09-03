export const f = fn => arg => () => fn(arg);
export const tOrF = () => Boolean(Math.round(Math.random() * 100) % 2);
export const randInt = rand => Math.round(Math.random() * 100) % rand;
export const arange = stop => [...Array(stop).keys()];
export const getRandomFrom = arr =>
  arr[Math.round(Math.random() * 100) % arr.length];

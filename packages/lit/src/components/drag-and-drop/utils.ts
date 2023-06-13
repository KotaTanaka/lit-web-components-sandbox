export const generateRandomId = () => {
  const random = Math.floor(Math.random() * 1000);
  return new Date().getTime() + '' + random;
}

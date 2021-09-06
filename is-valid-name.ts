export const isValidName = (name: string): boolean => {
  return name !== "" && !Number.isInteger(parseInt(name));
};

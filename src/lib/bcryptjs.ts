import bcryptjs from "bcryptjs";

const saltRounds = 10;

export const hashPassword = async (password: string) => {
  return await bcryptjs.hash(password, saltRounds);
};

export const comparePassword = async (
  inputPassword: string,
  savedPassword: string
) => {
  return await bcryptjs.compare(inputPassword, savedPassword);
};

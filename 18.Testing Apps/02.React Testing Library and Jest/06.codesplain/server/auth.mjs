import crypto from 'crypto';
import { promisify } from 'util';
import client from './prisma/client.mjs';

const scrypt = promisify(crypto.scrypt);

export const hashPassword = async (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = (await scrypt(password, salt, 1000, 64)).toString('hex');

  return `${salt}.${hash}`;
};

export const verifyPassword = async (user, suppliedPassword) => {
  const [salt, hash] = user.password.split('.');
  const suppliedHash = (
    await scrypt(suppliedPassword, salt, 1000, 64)
  ).toString('hex');

  return suppliedHash === hash;
};

export const createUser = async (email, password) => {
  const hashedPassword = await hashPassword(password);
  const user = await client.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export const getUserByEmail = async (email) => {
  const user = await client.user.findUnique({
    where: { email },
  });

  return user;
};

import { db } from '@/db/db';

export const getUsers = async () => {
  return db.query.users.findMany();
};

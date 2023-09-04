import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

// get all user

const getAllDataFromDb = async (): Promise<User[] | null> => {
  const result = await prisma.user.findMany({
    include: {
      orders: true,
      reviews: true,
    },
  });

  return result;
};

// get a user by id

const getDataByIdFromDb = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      orders: true,
      reviews: true,
    },
  });

  return result;
};
// update user

const updateDataByIdFromDb = async (
  id: string,
  payload: Partial<User>
): Promise<User | null> => {
  const result = await prisma.user.update({
    where: {
      id,
    },

    include: {
      orders: true,
      reviews: true,
    },
    data: payload,
  });

  return result;
};

// delete user

const deleteDataFromDb = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
    include: {
      orders: true,
      reviews: true,
    },
  });

  return result;
};

export const UserService = {
  getAllDataFromDb,
  getDataByIdFromDb,
  updateDataByIdFromDb,
  deleteDataFromDb,
};

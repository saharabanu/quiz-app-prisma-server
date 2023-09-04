import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create category

const insertIntoDb = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
    include: {
      books: true,
    },
  });
  return result;
};

// get all categories

const getAllDataFromDb = async (): Promise<Category[] | null> => {
  const result = await prisma.category.findMany({
    include: {
      books: true,
    },
  });

  return result;
};

// get a category by id

const getDataByIdFromDb = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });

  return result;
};
// update category

const updateDataByIdFromDb = async (
  id: string,
  payload: Partial<Category>
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: {
      id,
    },

    include: {
      books: true,
    },
    data: payload,
  });

  return result;
};

// delete category

const deleteDataFromDb = async (id: string): Promise<Category | null> => {
  const result = await prisma.$transaction(async transactionData => {
    await transactionData.book.deleteMany({
      where: {
        categoryId: id,
      },
    });

    const result = await transactionData.category.delete({
      where: {
        id,
      },
      include: {
        books: true,
      },
    });
    return result;
  });

  return result;
};

export const CategoryService = {
  insertIntoDb,
  getAllDataFromDb,
  getDataByIdFromDb,
  updateDataByIdFromDb,
  deleteDataFromDb,
};

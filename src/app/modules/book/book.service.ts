import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create book

const insertIntoDb = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

// // get all books

// // const getAllDataFromDb = async (): Promise<Book[] | null> => {
// //   const result = await prisma.book.findMany({
// //     include: {
// //       category: true,
// //     },
// //   });

//   return result;
// };

// // get a category by id

// const getDataByIdFromDb = async (id: string): Promise<Book | null> => {
//   const result = await prisma.book.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       category: true,
//     },
//   });

//   return result;
// };
// // update category

// const updateDataByIdFromDb = async (
//   id: string,
//   payload: Partial<Book>
// ): Promise<Book | null> => {
//   const result = await prisma.book.update({
//     where: {
//       id,
//     },

//     include: {
//       category: true,
//     },
//     data: payload,
//   });

//   return result;
// };

// // delete category

// const deleteDataFromDb = async (id: string): Promise<Book | null> => {
//   const result = await prisma.$transaction(async transactionData => {
//     await transactionData.category.deleteMany({
//       where: {
//         bookId: id,
//       },
//     });

//     const result = await transactionData.book.delete({
//       where: {
//         id,
//       },
//       include: {
//         category: true,
//       },
//     });
//     return result;
//   });

//   return result;
// };

export const BookService = {
  insertIntoDb,
  // getAllDataFromDb,
  // getDataByIdFromDb,
  // updateDataByIdFromDb,
  // deleteDataFromDb,
};

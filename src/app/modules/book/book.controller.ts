import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';

import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { BookService } from './book.service';
import pick from '../../../shared/pick';
import { booksFilterableOptions } from './book.constant';

//  create category

const insertIntoDb: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await BookService.insertIntoDb(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Book created successfully',
    data: result,
  });
});

// get all categories
const getAllDataFromDb: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, booksFilterableOptions);
  const options = pick(req.query, [
    'limit',
    'page',
    'skip',
    'sortBy',
    'sortOrder',
  ]);

  const result = await BookService.getAllDataFromDb(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' All books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

// // get single category
// const getDataByIdFromDb: RequestHandler = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await CategoryService.getDataByIdFromDb(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: ' Single category retrieved successfully',
//     data: result,
//   });
// });
// const updateDataByIDFromDb: RequestHandler = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const payload = req.body;
//   const result = await CategoryService.updateDataByIdFromDb(id, payload);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: '  category Updated successfully',
//     data: result,
//   });
// });
// const deleteDataFromDb: RequestHandler = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await CategoryService.deleteDataFromDb(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: ' category deleted successfully',
//     data: result,
//   });
// });

export const BookController = {
  insertIntoDb,
  getAllDataFromDb,
  // getDataByIdFromDb,
  // updateDataByIDFromDb,
  // deleteDataFromDb,
};

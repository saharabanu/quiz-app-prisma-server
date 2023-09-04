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

// get all books
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

// get single category
const getDataByIdFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BookService.getDataByIdFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Single book retrieved successfully',
    data: result,
  });
});
const updateDataByIDFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BookService.updateDataByIdFromDb(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '  book Updated successfully',
    data: result,
  });
});
const deleteDataFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookService.deleteDataFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' book deleted successfully',
    data: result,
  });
});

// get books by category id
const getBooksByCategoryId = catchAsync(async (req, res) => {
  const options = pick(req.query, [
    'limit',
    'page',
    'skip',
    'sortBy',
    'sortOrder',
  ]);
  const result = await BookService.getBooksByCategoryId(
    req.params.categoryId,
    options
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const BookController = {
  insertIntoDb,
  getAllDataFromDb,
  getDataByIdFromDb,
  updateDataByIDFromDb,
  deleteDataFromDb,
  getBooksByCategoryId,
};

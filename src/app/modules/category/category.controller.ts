import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';

import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { CategoryService } from './category.service';

//  create category

const insertIntoDb: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await CategoryService.insertIntoDb(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Category created successfully',
    data: result,
  });
});

// get all categories
const getAllDataFromDb: RequestHandler = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllDataFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' All categories retrieved successfully',
    data: result,
  });
});

// get single category
const getDataByIdFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryService.getDataByIdFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Single category retrieved successfully',
    data: result,
  });
});
const updateDataByIDFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await CategoryService.updateDataByIdFromDb(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '  category Updated successfully',
    data: result,
  });
});
const deleteDataFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryService.deleteDataFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  insertIntoDb,
  getAllDataFromDb,
  getDataByIdFromDb,
  updateDataByIDFromDb,
  deleteDataFromDb,
};

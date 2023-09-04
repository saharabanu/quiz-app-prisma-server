import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';

import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { OrderService } from './order.service';

//  create category

const insertIntoDb: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await OrderService.createOrder(req.user, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Order created successfully',
    data: result,
  });
});

// get all categories
const getAllDataFromDb: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderService.getAllOrders();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' All Orders retrieved successfully',
    data: result,
  });
});

// get single category
const getDataByIdFromDb: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderService.getSingleOrder(req.user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Single order retrieved successfully',
    data: result,
  });
});

const getspecificOrder: RequestHandler = catchAsync(async (req, res) => {
  const { orderId } = req.params;
  const result = await OrderService.getspecificOrder(orderId, req.user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Orders retrieved successfully',
    data: result,
  });
});

export const OrderController = {
  insertIntoDb,
  getAllDataFromDb,
  getDataByIdFromDb,
  getspecificOrder,
};

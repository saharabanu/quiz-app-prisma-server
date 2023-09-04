import express from 'express';

import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

import { BookController } from './book.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidation } from './book.validation';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.insertIntoDb
);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), BookController.getAllDataFromDb);

export const BookRoutes = router;

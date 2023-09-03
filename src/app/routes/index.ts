import express from 'express';

const router = express.Router();
const abc = () => {};

const moduleRoutes = [
  // ... routes
  {
    path: '',
    route: abc,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

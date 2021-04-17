import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

router.get('/healthcheck', (req, res) => {
  return res.send('Up and Running!');
});

export { router };

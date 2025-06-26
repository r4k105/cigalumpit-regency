import express from 'express';
import { apiReady, createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/UserControllers.js';



const router = express.Router();

router.get('/', apiReady);
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


export default router;
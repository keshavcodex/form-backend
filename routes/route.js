import express from 'express';

import {
    addUser, getUsers, getOneUser, updateUser, deleteUser 
} from '../controller/formController.js';

const router = express.Router()

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
const express = require('express');

const router = express.Router();
const { addTodo, updateTodo, deleteTodo, getTodos } = require('../controllers/todoController');

router.get('/get', getTodos)

router.post('/add', addTodo);

router.put('/update/:id', updateTodo);

router.delete('/delete/:id', deleteTodo);

module. exports =  router;
const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBookData, deleteBook } = require('./book.controller');
const router = express.Router();

// frontend -> backend server => controller => book schema => database => send data to server => back to the frontend 
// post = when you submit something from frontend to database
// get = when you get something from database
// put/patch = edit or update data 
// delete = to delete from database 

// post a book
router.post('/create-book', postABook);

// get all book

router.get('/', getAllBooks);

// Single book endpoint

router.get('/:id', getSingleBook);

// Update a book endpoint

router.put('/edit/:id', updateBookData);

// delete a book 

router.delete('/:id', deleteBook);


module.exports = router;
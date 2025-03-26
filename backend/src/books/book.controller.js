const Book = require('./book.model')

const postABook = async (req,res) => {
  try {
    const newBook = await Book({...req.body});
    await newBook.save();
    res.status(200).send({message: 'Book Posted Successfully', book: newBook})
  } catch (error) {
    console.error('Error creating book', error);
    res.status(500).send({message: 'Failed to create book'})
  }
}

//get all books

const getAllBooks = async (req,res) => {
  try {
    const books = await Book.find().sort({createdAt: -1});
    res.status(200).send(books)
  } catch (error) {
    console.error('Error fetching books', error);
    res.status(500).send({message: 'Failed to fetch books'})
  }
}

const getSingleBook = async (req,res) => {
  try {
    const {id} = req.params;
    const book = await Book.findById(id);
    if(!book){
      res.status(404).send({message: 'Book not found!'})
    }
    res.status(200).send(book)
  } catch (error) {
    console.error('Error fetching book', error);
    res.status(500).send({message: 'Failed to fetch book'})
  }
}

const updateBookData = async (req,res) => {
  try {
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if(!updatedBook) {
      res.status(404).send({message: 'Book is not found'})
    }
    res.status(200).send({
      message: 'Book updated successfully',
      book: updatedBook
    })
  } catch (error) {
    console.error('Error updating a book', error);
    res.status(500).send({message: 'Failed to update a book'})
  }
}

const deleteBook = async (req,res) => {
    try {
      const {id} = req.params;
      const deleteBook = await book.findByIdAndDelete(id)
      if(!deleteBook){
        res.status(404).send({message: 'Book is not found'})
      }
      res.status(200).send({message: 'Book deleted successfully!', 
        book: deleteBook
      })
      
    } catch (error) {
      console.error('Error deleting a book', error);
    res.status(500).send({message: 'Failed to delete a book'})
    }
}

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBookData,
  deleteBook
}
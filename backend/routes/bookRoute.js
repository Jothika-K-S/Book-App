import express from 'express'
import { addBook, deleteBook, getBooks, getSingleBook, updateBook } from '../controllers/bookController.js'
const bookRoute = express.Router()


bookRoute.post('/', addBook)

bookRoute.get('/', getBooks)

bookRoute.get('/:id', getSingleBook)

bookRoute.put('/:id', updateBook)

bookRoute.delete('/:id', deleteBook)

export default bookRoute;
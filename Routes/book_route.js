const express = require('express')
const authMiddleware = require('../Middlewares/auth_middleware')
const bookController = require('../Controllers/book_controller')


const router = express.Router();



router.get('/all_books', authMiddleware.authMiddleware, bookController.getAllBooks);
router.post('/new_book', authMiddleware.authMiddleware, bookController.newBook);
router.post("/update_book",  authMiddleware.authMiddleware, bookController.updateBook);
router.post('/delete_book', authMiddleware.authMiddleware, bookController.deleteBook);






module.exports = router
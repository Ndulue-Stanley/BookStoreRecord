import { Router } from "express";
import { createBook, deleteBook, readBook, readBooksbyCategory, readBooksbyID, updateBook } from "../controller/bookController";

const router:Router = Router()

router.route('/create-book').post(createBook)
router.route('/read-books').get(readBook)
router.route('/read-book-Id/:bookID').get(readBooksbyID)
router.route('/read-book-category').get(readBooksbyCategory)
router.route('/update-book/:bookID').patch(updateBook)
router.route('/delete-book/:bookID').delete(deleteBook)


export default router;
import express from 'express'
import * as Book from '../controllers/BookController'
const router = express.Router()

router.route('/:gid/book')
      .get(Book.getAll)
      .post(Book.createOne)
router.route('/:gid/book/:bid')
      .get(Book.getOne)
      .delete(Book.getOneAndRemove)
      .put(Book.getOneAndUpdate)
      // .put(getOneAndUpdateStatus)

export default router

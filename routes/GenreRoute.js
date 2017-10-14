import express from 'express'

import * as Genre from '../controllers/GenreController'

const router = express.Router()

router.route('/')
      .get(Genre.getAll)
      .post(Genre.createOne)
router.route('/:gid')
      .get(Genre.getOne)
      .post(Genre.createOneBook)
      // .delete(Genre.getOneAndRemove)
      // .put(Genre.getOneAndUpdate)


export default router

import Genre from '../models/GenreSchema'
import Book from '../models/BookSchema'


export const getAll = (req,res) => {
    Genre.find().sort({'_id': -1}).exec((err,results) => {
      if(!err){
        res.json({results}).status(200)
      }
      else{
        res.json({'message':'err'}).status(500)
      }
    })
}


export const createOne = (req,res) => {
        var genreName = req.body.genreName
        Genre.findOne({genreName:{$regex: new RegExp(genreName)}}).exec((err,result) =>{
          if(err){
            res.json({'success':false,'message':'Err'})
          }
          else if(result){
            res.json({'success':false,'message':'already exists'})
          }
          else{
            const newGenre = new Genre(req.body)
            var newBook = new Book({book:req.body.book})
            newGenre.book = newBook.id
            newGenre.save((err,result) =>{
              if(err){
                res.json({'success':false,'message':'Err During Saving'})
              }
              else{
                res.json({'success':true,result})

              }
            })
          }
        })

}

export const getOne = (req,res) => {
  var id = req.params.gid
  Genre.findById(id).exec((err,result)=>{
    if(err){
      res.json({'success':false})
    }
      res.json({result})
  })
}


export const createOneBook = (req,res) =>{

}

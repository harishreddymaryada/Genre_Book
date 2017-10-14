import Book from '../models/BookSchema'

export const getAll = (req,res) => {
  //  .populate({path:'genreId',model:'Book'})

    Book.find({genreId:req.params.gid,status:'active'}).sort({'_id': -1}).exec((err,results) => {
      if(!err){
        res.json({results}).status(200)
      }
      else{
        res.json({'message':'err'}).status(500)
      }
    })
}
// create new book
export const createOne = (req,res) => {
        var genre = req.params.gid
        var bookName = req.body.bookName
        Book.findOne({bookName:{$regex: new RegExp(bookName)}}).populate('genreId').exec((err,result) =>{
          if(err){
            res.json({'success':false,'message':'Err'})
          }
          else if(result){
            res.json({'success':false,'message':'already exists'})
          }
          else{
            const newBook = new Book(req.body)
            newBook.genreId = genre
            newBook.save((err,result) =>{
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
// display selected
export const getOne = (req,res) => {
  var id = req.params.bid
  Book.findById(id).exec((err,result)=>{
    c(res,err,result)
  })
}
function c(res,err,result){
  if(err){
    res.json({'success':false})
  }
    res.json({result})
}
// deleted selected
export const getOneAndRemove = (req,res) => {
  var id = req.params.id
  Book.findById(id).exec((err,result) =>{
    if(err){
      res.json({'Success':false,})
    }
    result.remove()
    res.json({'success':true})
  })
}
// update all fields
export const getOneAndUpdate = (req,res) => {
  var id = req.params.id
  Book.findByIdAndUpdate(id,{$set:req.body}).exec((err,result)=>{
    if(err){
      res.json({'success':false,'message':'Error'})
    }
    res.json({'success':true,result})
  })
}
// To change the status(update status)
// export const getOneAndUpdateStatus = (req,res) => {
//   var id = req.params.id
//   Book.findByIdAndUpdate(id,{$set:{status:req.body.status}}).exec((err,result)=>{
//     if(err){
//       res.json({'success':false})
//     }
//     res.json({'success':true,result})
//   })
// }

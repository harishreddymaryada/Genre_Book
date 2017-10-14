import mongoose from 'mongoose'

var GenreSchema = mongoose.Schema({
  genreName:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now,
    required:true
  }
})

export default mongoose.model('Genre',GenreSchema)

import mongoose from 'mongoose'
import Genre from './GenreSchema'

var BookSchema = mongoose.Schema({
  genreId:{type:mongoose.Schema.Types.ObjectId,ref:'Genre'},
  bookName:{type:String,
             required:true
          },
  bookDescription:{
                    type:String,
                    required:true
                  },
  status:{type:String,
          default:'active'
        },
  createdAt :{
    type:Date,
    required:true,
    default:Date.now
  }
})

export default mongoose.model('Book',BookSchema)

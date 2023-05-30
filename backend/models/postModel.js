const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  // user_id:{
  //   type:String,
  //   required:true
  // },
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)
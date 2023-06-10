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
  // likesNumber: {
  //   type: Number,
  //   required: true
  // },
  likes: {
    type: [String], // Array of user IDs who liked the post
    default: [],
  },
  user_id:{
    type:String,
    required:true
  },
  fileURL:{
    type:String,
    //required:true

  },
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)
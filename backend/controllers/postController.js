const Post=require('../models/postModel')
const mongoose = require('mongoose')

const getPosts=async(req,res)=>{
    const user_id=req.user._id
    const posts = await Post.find({user_id}).sort({createdAt: -1})
  
    res.status(200).json(posts)
}
//feed
const getFeedPosts=async(req,res)=>{
  console.log('test')
  const posts = await Post.find().sort({createdAt: -1})

  res.status(200).json(posts)
}

// get a single Post
const getPost = async (req, res) => {

    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const post = await Post.findById(id)
  
    if (!post) {
      return res.status(404).json({error: 'No such workout'})
    }
    
    res.status(200).json(post)
  }


// create new workout
const createPost = async (req, res) => {
    const {title, message, likes} = req.body
  
    let emptyFields = []
  
    if(!title) {
      emptyFields.push('title')
    }
    if(!message) {
      emptyFields.push('load')
    }
 
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const user_id=req.user._id
      const post = await Post.create({title, message, likes,user_id})
      res.status(200).json(post)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  const deletePost = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const post = await Post.findOneAndDelete({_id: id})
  
    if (!post) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(post)
  }

  const likePost= async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
      }

    try {
      const post =await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.status(200).json(post)
    } catch (err) {
      console.log(err);
    }
  }

module.exports={
    getPosts,
    createPost,
    deletePost,
    likePost,
    getPost,
    getFeedPosts
}
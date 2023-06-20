const Post=require('../models/postModel')
const mongoose = require('mongoose')
const cloudinary=require('../middleware/cloudinary')


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
    const {title, message} = req.body
    const file = req.file;
    
    

    let emptyFields = []
  
    if(!title) {
      emptyFields.push('title')
    }
    if(!message) {
      emptyFields.push('load')
    }
    if(!file) {
      emptyFields.push('file')
    }
 
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  console.log('all filled')
    // add doc to db
    try {
      const uploadResult = await cloudinary.uploader.upload(file.path);

      const user_id=req.user._id
     //const post = await Post.create({title, message,user_id,fileURL:file.path})
     const apost = new Post({
      title,
      message,
      user_id,
      fileURL: uploadResult.secure_url // Assuming the filename is stored in the `file` object
    });

    // Save the post to the database
    const post = await apost.save();
    
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
    const user_id = req.user._id;
  const { id } = req.params;

  try {
    // Find the post by id
    const apost = await Post.findById(id);

    if (!apost) {
      return res.status(404).json({ error: 'No such post' });
    }

    // Check if the user has already liked the post
    const userIndex = apost.likes.indexOf(user_id);
    if (userIndex > -1) {
      // User has already liked, remove the like
      apost.likes.splice(userIndex, 1);
    } else {
      // User has not liked, add the like
      apost.likes.push(user_id);
    }

    // Save the updated post
    const post = await apost.save();

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};
  

module.exports={
    getPosts,
    createPost,
    deletePost,
    likePost,
    getPost,
    getFeedPosts
}
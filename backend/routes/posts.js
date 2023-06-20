const express=require('express')
const upload = require("../middleware/multer");



const requireAuth=require('../middleware/requireAuth')
const {
    getPosts,
    createPost,
    deletePost,
    likePost,
    getPost,
  
}= require('../controllers/postController')



const router=express.Router()
router.use(requireAuth)


//get post
router.get('/:id',getPost)



router.get('/',getPosts)

router.post('/',upload.single('file'),createPost)

router.delete('/:id',deletePost)

router.patch('/:id',likePost)

module.exports = router
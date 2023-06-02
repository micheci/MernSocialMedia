const express=require('express')
const requireAuth=require('../middleware/requireAuth')
const {
    getFeedPosts,
    likePost
}= require('../controllers/postController')

const router=express.Router()
router.use(requireAuth)


router.get('/',getFeedPosts)

router.patch('/:id',likePost)


module.exports = router
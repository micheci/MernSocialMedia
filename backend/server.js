require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cloudinary=require('./middleware/cloudinary')
const upload=require('./middleware/multer')


const postRoutes = require('./routes/posts')
const userRoutes=require('./routes/user')
const feedRoutes=require('./routes/feed')



// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/post', postRoutes)
app.use('/api/user',userRoutes)
app.use('/api/feed',feedRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
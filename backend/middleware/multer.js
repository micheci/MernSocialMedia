const multer = require('multer');

// Define the storage configuration for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination directory for uploaded files
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

// Configure Multer
const upload = multer({ storage });

module.exports = upload;
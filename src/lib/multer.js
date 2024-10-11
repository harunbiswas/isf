import multer from 'multer';
import path from 'path';

// Set up storage configuration for multer
const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, './public/uploads'); // Destination folder for uploads
  },
  filename: (req, file, cb) => {
    // Create a unique filename with timestamp and original name
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix + '_' + file.originalname);
  },
});

// Create multer instance
const upload = multer({ storage });

export default upload;

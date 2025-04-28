// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set storage to /video
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/video'); // Upload to /video
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Uploaded:', req.file.path);
  res.send('File uploaded successfully.');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

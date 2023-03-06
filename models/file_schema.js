const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const filePath = path.join('/uploads/files')

// file schema 
const fileSchema = new mongoose.Schema({
    name: {
        type: String
    },
    path: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// using local storage to store a file
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..' + filePath));
    },
    filename: function (req, file, cb) {
       const ext = file.mimetype.split("/")[1];
      cb(null, file.fieldname + '-' + Date.now() +"."+ext);
    }
  });


  // this is to check only csv file get uploaded 
  const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "csv") {
      cb(null, true);
    } else {
      cb(new Error("Not a csv File!!"), false);
    }
  };

// static code methods
fileSchema.statics.uploadedFile = multer({ storage: storage,
                                         fileFilter: multerFilter}).single('csv_file');
fileSchema.statics.filePath = filePath;

// creating the model of the schema 
const File = mongoose.model('File', fileSchema);

// Exporting the mongoose schema
module.exports = File;
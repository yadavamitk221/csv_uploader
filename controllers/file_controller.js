const File = require('../models/file_schema');

// controller to upload the csv file
module.exports.upload = async (req, res) => {
    try {
        File.uploadedFile(req, res, (err)=>{
            if(err){
                console.log(`1 error in uploading the file  ${err}`);
            }
            if(req.file){ 
                File.create({
                    name: req.file.filename,
                    path: File.filePath + '/' + req.file.filename
                }); 
            }   
             res.redirect('back');
        })
    } catch (err) {
        if(err){
            console.log(`2 Error uploading the file ${err}`);
            return;
        }
    }
}
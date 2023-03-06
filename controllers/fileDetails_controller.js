const path = require('path');
const File = require('../models/file_schema');
const { parse }= require('csv-parse');
const fs = require('fs');

// display the file detail page along with all the data
module.exports.fileDetails = async (req, res) => {
    try {
        const data = [];
        var count = 0;
        const csvFilePath = path.join(__dirname, '../uploads/files', req.params.name);
        fs.createReadStream(csvFilePath)
        .pipe(parse({ delimiter: ",", from_line: 1 }))
        .on("data", function (row) {
            data.push(row);
            // console.log(data[count][0]);
            
            count++;
        })
        .on("error", function (error) {
            console.log(error.message);  
        })  
        .on("end", function () {   
            console.log("finished");  
            return res.render('fileDetails', {
                datas: data, 
                file: req.params.name
            });  
        });  
        
    } catch (err) {
        console.log("Error in reading the csv file catch", err);
        return;
    }
}

// delete controller
module.exports.delete = async (req, res) => {
    const csvFilePath = path.join(__dirname, '../uploads/files', req.params.name);
    const selectedfile = File.findOne({name: req.params.name});
    if(csvFilePath){
         fs.unlink(csvFilePath, async (err)=>{
            if(err){
                console.log("error in deleting the file ", err);
                return;
            }
            if(selectedfile){ await File.deleteOne({name: req.params.name});}
        });
    } 
    return res.redirect('back');
}      
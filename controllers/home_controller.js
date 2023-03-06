const File = require('../models/file_schema');

// Home controller 
module.exports.home = async (req, res) => {
    try {
        const files = await File.find({});
        return res.render('home', {
            files : files
        });
    } catch (err) {
        console.log("error in findg the files in databse");
        return;
    }
}
const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect("mongodb+srv://sanskarsingh9999:8Rv0vqxo7MMY3w4Q@cluster0.9xyxlf9.mongodb.net/StudyNotion")
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};

const Razorpay = require("razorpay");
require('dotenv').config();


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY || "rzp_test_hlYUA90sOzvHSB",
    key_secret: process.env.RAZORPAY_SECRET,
});

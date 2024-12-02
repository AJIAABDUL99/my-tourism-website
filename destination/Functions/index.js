const fuctions =require("firebase-functions")
const admin = require("firebase-admin")
const nodemailer = require("nodemailer")
require("dotenv").config();

admin.initializeApp();
const db =admin.firestore();


const transporter = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },

}); 



// function to send emails to user after booking for a location/stay

exports.sendEmailToUser =function.firestore
.document.("userBookings/{docId}")
.onCreate(async() => {
    const tourData =snapshot.data()
    const userEmail =tourData.email()
    
    const mailoptions ={
        from: process.env,USER_EMAIL,
        to: userEmail,
        subject : "Welcome To Ajia African Travels"
        text : "Great Adventure ahead!",

    };
    try{
       await transporter.sendMail(mailoptions);
        }catch (error){
        console.log("Error sending email",error);
    }
    


});
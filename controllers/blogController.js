const Blog=require('../models/blogsModel');
const nodemailer=require('nodemailer');
require('dotenv').config();

//get all blogs
const getAllBlogs=async(req,res)=>{
    try {
        const allBlog=await Blog.find({});
        res.status(200).send(allBlog);
    } catch (error) {
        res.send(error.message)
    }
}
//get single blog
const getOneBlog=async(req,res)=>{
    try {
        const {id}=req.params;
        const oneBlog=await Blog.findById({_id:id});
        res.status(200).send(oneBlog);
    } catch (error) {
        res.send(error.message)
    }
}
//send email
const sendEmail=async(req,res)=>{
    try {
        const {email,name,phone,message}=req.body;
        let mailTranporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });
        let details={
            from:process.env.EMAIL,
            to:process.env.RECEIVEREMAIL,//receiver
            subject:`Message sent from Kiri Webite`,
            text:`Name: ${name}
                  Email Address: ${email}
                  phone No: ${phone}
                  Message: ${message}
            `
        }
        mailTranporter.sendMail(details,(err)=>{
            if(err){
                res.send(err);
            } else{
                res.send('Email sent');
            }
        })
    } catch (error) {
        res.send(error.message);
    }
}
//add a blog
const postNewBlog=async(req,res)=>{
    try {
        const {pic,title,body,author}=req.body;
        const newBlog=await Blog.create({pic,title,body,author})
        res.status(200).send(newBlog);
        
    } catch (error) {
        res.send(error.message)
    }
}

module.exports={
    postNewBlog,
    getAllBlogs,
    getOneBlog,
    sendEmail,
}
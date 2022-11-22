const express=require('express');
const router=express.Router();
const{
    postNewBlog,
    getAllBlogs,
    getOneBlog,
    sendEmail,
}=require('../controllers/blogController');

//get all blogs
router.get('/',getAllBlogs);
//get single blog
router.get('/:id',getOneBlog);

//add a new blog
router.post('/',postNewBlog);
//send email
router.post('/send',sendEmail)

module.exports=router;
const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');

const { Login, Register, Auth} = require('../controllers/auth');

const {getCategory,addCategory} = require('../controllers/category');

const {getContent,addContent,getContentByUser} = require('../controllers/content');



// Authentication Routes
router.post('/register', Register);
router.post('/login', Login);
router.get('/auth',auth, Auth);


router.post('/category',auth,addCategory);
router.get('/category',auth, getCategory);


router.post('/content',auth,addContent);
router.get('/content',getContent);
router.get('/content/:userId',getContentByUser);

module.exports = router;
const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');

const { Login, Register, Auth} = require('../controllers/auth');

const {getCategory,addCategory} = require('../controllers/category');

const {getSubCategory,addSubCategory} = require('../controllers/subcategory')

const {getContent,addContent,getContentCategory} = require('../controllers/content');



// Authentication Routes
router.post('/register', Register);
router.post('/login', Login);
router.get('/auth',auth, Auth);


router.post('/category',addCategory);
router.get('/category', getCategory);

router.post('/content',addContent);
router.get('/content',getContent);

router.get('/sub-category',getSubCategory);
router.post('/sub-category',addSubCategory);

module.exports = router;
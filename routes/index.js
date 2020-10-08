const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');

const { Login, Register, Auth} = require('../controllers/auth');

const {getCategory,addCategory} = require('../controllers/category');

const {getSubCategory,addSubCategory,deletSubcategory} = require('../controllers/subcategory')

const {getContent,addContent,getContentCategory} = require('../controllers/content');



// Authentication Routes
router.post('/register', Register);
router.post('/login', Login);
router.get('/auth',auth, Auth);


router.post('/category',auth,addCategory);
router.get('/category',auth, getCategory);

router.post('/content',auth,addContent);
router.get('/content',auth,getContent);

router.get('/sub-category',auth,getSubCategory);
router.post('/sub-category',auth,addSubCategory);
router.delete('/sub-category/:id',auth,deletSubcategory);

module.exports = router;
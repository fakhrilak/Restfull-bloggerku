const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');

const { Login, Register, Auth,coba} = require('../controllers/auth');

const {getCategory,addCategory} = require('../controllers/category');

const {getContent,addContent,getContentCategory} = require('../controllers/content');



// Authentication Routes
router.post('/register', Register);
router.post('/login', Login);
router.get('/auth',auth, Auth);
router.get('/coba',auth, coba);


router.post('/category',addCategory);
router.get('/category', getCategory);

router.post('/content',addContent);
router.get('/content',getContent);
router.get('/content/:title',getContentCategory);

module.exports = router;
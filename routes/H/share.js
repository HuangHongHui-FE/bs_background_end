const router = require('koa-router')()

const blog = require('./share/blog.js');
const classify = require('./share/classify.js');
const shareImage = require('./share/shareImage.js');

// funguy页
router.use('/blog', blog);
router.use('/classify', classify);
router.use('/shareImage', shareImage);

module.exports=router.routes();
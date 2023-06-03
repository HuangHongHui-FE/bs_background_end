const router = require('koa-router')()

const music = require('./funguy/music.js');
const video = require('./funguy/video.js');

// funguy页
router.use('/music', music);
router.use('/video', video);

module.exports=router.routes();
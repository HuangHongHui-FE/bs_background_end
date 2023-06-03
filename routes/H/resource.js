const router = require('koa-router')()

const resourceShare = require('./resource/resourceShare.js');
const study = require('./resource/study.js');

// funguy页
router.use('/resourceShare', resourceShare);
router.use('/study', study);

module.exports=router.routes();
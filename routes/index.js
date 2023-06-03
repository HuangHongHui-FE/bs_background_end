const router = require('koa-router')()

const users = require('./H/users/users.js');
const funguy = require('./H/funguy.js');
const share = require('./H/share.js');
const resource = require('./H/resource.js');

// 用户管理页
router.use('/users', users);
// funguy页
router.use('/funguy', funguy);
// share页
router.use('/share', share);
// resource页
router.use('/resource', resource);

// report页
// router.use('/report', report);

module.exports=router.routes();
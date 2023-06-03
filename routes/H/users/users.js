const router = require('koa-router')()

const client = require("../../../utils/dbconfig.js")

const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const jwt = require('jsonwebtoken')

const ObjectID = require('mongodb').ObjectId;

const DB = require('../../../module/db.js');

// 登录功能的实现
router.post('/login', async ctx=>{
    let body = ctx.request.body
    
    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('login_houtai').find({username: body.username, password: body.password}).toArray()
    let data = await DB.find('login_houtai', {username: body.username, password: body.password})
    data  = await data.toArray()
    
    if(data.length!==0){
        let token = jwt.sign({ username: body.username }, 'funguy')
        data = dataGeShi(token)
        ctx.body = data
        return;
    }else{
        ctx.body = {
            data: null,
            meta: {
                msg: "token无效",
                status:400
            }
        }
    }

    
})


// 用户管理页的数据
router.get('/',async (ctx)=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('user').find({username: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('user', {username: { $regex: `${query}` }})
    data  = await data.skip(pagenum * 10).limit(10).toArray()

    data = dataGeShi(data)
    ctx.body = data
})


//  用户管理页点击编辑数据根据id拿到数据
router.get('/getMsgById',async (ctx)=>{

    let id = ctx.query.id

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('user').find({_id: ObjectID(id)}).toArray()

    let data = await DB.find('user', {_id: ObjectID(id)})
    data  = await data.toArray()

    data = dataGeShi(data)
    ctx.body = data
})

//  用户管理页点击编辑数据点击确定修改用户信息
router.post('/editMsg',async (ctx)=>{

    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('user').updateOne({_id: ObjectID(body._id)}, {$set: {"nicheng": body.nicheng, "grjj": body.grjj, "sex": body.sex}})

    let data = await DB.updateOne('user', {_id: ObjectID(body._id)}, {$set: {"nicheng": body.nicheng, "grjj": body.grjj, "sex": body.sex}})

    data = dataGeShiUpdate(data)
    ctx.body = data
})

//  用户管理页点击编辑数据点击确定删除用户
router.post('/deleteUser',async (ctx)=>{

    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('user').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('user', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})


module.exports=router.routes();
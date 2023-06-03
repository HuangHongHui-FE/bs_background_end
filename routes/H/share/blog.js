const router = require('koa-router')()

// const client = require("../../../utils/dbconfig.js")

const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const ObjectID = require('mongodb').ObjectId;
const DB = require('../../../module/db.js');

// 博客数据的获取
router.get('/', async ctx=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy");

    // let data = await db.collection('blogs').find({inputTitle: { $regex: `${query}` }}).project({file: 0}).sort({time: -1}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('blogs', {inputTitle: { $regex: `${query}` }})
    data  = await data.project({file: 0}).sort({time: -1}).skip(pagenum * 10).limit(10).toArray()
    data = dataGeShi(data)
    ctx.body = data
})


//  博客管理页点击编辑数据根据id拿到数据
router.get('/getBlogById',async (ctx)=>{

    let id = ctx.query.id
    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('blogs').find({_id: ObjectID(id)}).project({file: 0}).toArray()

    let data = await DB.find('blogs' ,{_id: ObjectID(id)})
    data = await data.project({file: 0}).toArray()

    data = dataGeShi(data)
    ctx.body = data
})

// 获取分类的数据
router.get('/getClassify',async (ctx)=>{

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('classify').find().toArray()

    let data = await DB.find('classify' ,{})
    data = await data.toArray()
    data = dataGeShi(data)
    ctx.body = data
})

//  博客管理页点击编辑数据点击确定修改博客信息
router.post('/editBlog',async (ctx)=>{

    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('blogs').updateOne({_id: ObjectID(body._id)}, {$set: {"views": body.views, "inputTitle": body.inputTitle, "value": body.value}})

    let data = await DB.updateOne('blogs', {_id: ObjectID(body._id)}, {$set: {"views": body.views, "inputTitle": body.inputTitle, "value": body.value}})

    data = dataGeShiUpdate(data)
    ctx.body = data
})

//  博客管理页点击编辑数据点击确定删除博客
router.post('/deleteBlog',async (ctx)=>{

    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('blogs').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('blogs', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})




module.exports=router.routes();
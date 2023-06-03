const router = require('koa-router')()

// const client = require("../../../utils/dbconfig.js")

const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const ObjectID = require('mongodb').ObjectId;
const DB = require('../../../module/db.js');

// funguy页的视频数据
router.get('/',async (ctx)=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('videos').find({title: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('videos', {title: { $regex: `${query}` }})
    data  = await data.skip(pagenum * 10).limit(10).toArray()
    data = dataGeShi(data)
    
    ctx.body = data
})


//  funguy页点击编辑视频  根据id拿到数据
router.get('/getVideoById',async (ctx)=>{
    let id = ctx.query.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('videos').find({_id: ObjectID(id)}).toArray()

    let data = await DB.find('videos' ,{_id: ObjectID(id)})
    data = await data.toArray()

    data = dataGeShi(data)
    ctx.body = data
})

//  funguy页点击确定修改视频信息
router.post('/editVideo',async (ctx)=>{

    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('videos').updateOne({_id: ObjectID(body._id)}, {$set: {"title": body.title, "love": body.love, "path": body.path}})

    let data = await DB.updateOne('videos', {_id: ObjectID(body._id)}, {$set: {"title": body.title, "love": body.love, "path": body.path}})

    data = dataGeShiUpdate(data)
    ctx.body = data
})


//  funguy页点击确定删除视频
router.post('/deleteVideo',async (ctx)=>{
    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('videos').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('videos', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})

//  funguy页点击确定添加视频
router.post('/addVideo',async (ctx)=>{
    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('videos').insertOne(body)

    let data = await DB.insertOne('videos', body)
    data = dataGeShiUpdate(data)
    ctx.body = data
})

module.exports=router.routes();
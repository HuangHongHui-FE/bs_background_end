const router = require('koa-router')()

// const client = require("../../../utils/dbconfig.js")

const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const ObjectID = require('mongodb').ObjectId;
const DB = require('../../../module/db.js');


// resource页的资源数据
router.get('/',async (ctx)=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('resource').find({title: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('resource', {title: { $regex: `${query}` }})
    data  = await data.skip(pagenum * 10).limit(10).toArray()
    data = dataGeShi(data)
    
    ctx.body = data
})


//  resource页点击编辑资源  根据id拿到数据
router.get('/getResourceShareById',async (ctx)=>{
    let id = ctx.query.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('resource').find({_id: ObjectID(id)}).toArray()

    let data = await DB.find('resource' ,{_id: ObjectID(id)})
    data = await data.toArray()
    data = dataGeShi(data)
    ctx.body = data
})


//  resource页点击确定修改资源信息
router.post('/editResourceShare',async (ctx)=>{

    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('resource').updateOne({_id: ObjectID(body._id)}, {$set: {"title": body.title, "src": body.src, "path": body.path}})

    let data = await DB.updateOne('resource', {_id: ObjectID(body._id)}, {$set: {"title": body.title, "src": body.src, "path": body.path}})

    data = dataGeShiUpdate(data)
    ctx.body = data
})


//  resource页点击确定删除资源
router.post('/deleteResourceShare',async (ctx)=>{
    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('resource').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('resource', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})

//  resource页点击确定添加资源
router.post('/addResourceShare',async (ctx)=>{
    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('resource').insertOne(body)

    let data = await DB.insertOne('resource', body)
    data = dataGeShiUpdate(data)
    ctx.body = data
})


module.exports=router.routes();
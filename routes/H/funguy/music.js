const router = require('koa-router')()

const client = require("../../../utils/dbconfig.js")

const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const ObjectID = require('mongodb').ObjectId;

const DB = require('../../../module/db.js');

// funguy页的音乐数据
router.get('/',async (ctx)=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('music').find({music_name: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()
    
    // let data = await DB.find('music' ,{music_name: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()
    

    // data = dataGeShi(data)
    
    // ctx.body = data
    // 1.
    // DB.find('music' ,{music_name: { $regex: `${query}` }}).then(async (res) => {
    //     let data = await res.skip(pagenum * 10).limit(10).toArray()
    //     console.log(data)
    //     data = dataGeShi(data)
    //     ctx.body = data
    // })
    // console.log(data)

    // 2.
    let data = await DB.find('music', {music_name: { $regex: `${query}` }})
    data  = await data.skip(pagenum * 10).limit(10).toArray()
    data = dataGeShi(data)
    ctx.body = data

    // // 3.
    // db.collection('music').find({music_name: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()

})


//  funguy页点击编辑歌曲  根据id拿到数据
router.get('/getMusicById',async (ctx)=>{
    let id = ctx.query.id

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('music').find({_id: ObjectID(id)}).toArray()

    let data = await DB.find('music' ,{_id: ObjectID(id)})
    data = await data.toArray()
    data = dataGeShi(data)
    
    ctx.body = data
})

//  funguy页点击确定修改歌曲信息
router.post('/editMusic',async (ctx)=>{

    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('music').updateOne({_id: ObjectID(body._id)}, {$set: {"author_name": body.author_name, "music_name": body.music_name, "path": body.path}})

    let data = await DB.updateOne('music', {_id: ObjectID(body._id)}, {$set: {"author_name": body.author_name, "music_name": body.music_name, "path": body.path}})

    data = dataGeShiUpdate(data)
    ctx.body = data
})


//  funguy页点击确定删除歌曲
router.post('/deleteMusic',async (ctx)=>{
    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('music').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('music', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})

//  funguy页点击确定添加歌曲
router.post('/addMusic',async (ctx)=>{
    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")
    // let data = await db.collection('music').insertOne(body)

    let data = await DB.insertOne('music', body)
    data = dataGeShiUpdate(data)
    ctx.body = data
})


module.exports=router.routes();
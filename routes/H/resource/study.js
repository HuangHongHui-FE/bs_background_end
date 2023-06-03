const router = require('koa-router')()

const client = require("../../../utils/dbconfig.js")

const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")
const dataGeShi = require("../../../utils/dataGeShi.js")

const ObjectID = require('mongodb').ObjectId;
const DB = require('../../../module/db.js');

// 学习博客的添加
router.post("/studyWrite", async (ctx) => {
    //获取表单传过来的数据
    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data =  await db.collection('study_blogs').insertOne(body)

    let data = await DB.insertOne('study_blogs', body)
    data = dataGeShiUpdate(data)
    ctx.body = data
})

// 学习博客管理页数据的获取
router.get('/studyList', async ctx=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy");

    // let data = await db.collection('study_blogs').find({inputTitle: { $regex: `${query}` }}).sort({time: -1}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('study_blogs', {inputTitle: { $regex: `${query}` }})
    data  = await data.sort({time: -1}).skip(pagenum * 10).limit(10).toArray()
    data = dataGeShi(data)
    ctx.body = data
})


//  博客管理页点击确定删除博客
router.post('/deleteStudy',async (ctx)=>{

    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('study_blogs').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('study_blogs', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})


module.exports = router.routes();
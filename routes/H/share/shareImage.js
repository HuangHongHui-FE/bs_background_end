const router = require('koa-router')()

const client = require("../../../utils/dbconfig.js")


const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const ObjectID = require('mongodb').ObjectId;
const DB = require('../../../module/db.js');

// 图册数据的获取
router.get('/', async ctx=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy");

    // let data = await db.collection('shareImage').find({inputTitle: { $regex: `${query}` }}).sort({time: -1}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('shareImage', {inputTitle: { $regex: `${query}` }})
    data  = await data.sort({time: -1}).skip(pagenum * 10).limit(10).toArray()
    data = dataGeShi(data)
    ctx.body = data
})

// // 获取分类的数据
// router.get('/getClassify',async (ctx)=>{

//     // await client.connect();
//     // let db = client.db("funguy")

//     // let data = await db.collection('shareImage').find().toArray()

//     let data = await DB.find('shareImage' ,{})
//     data = await data.toArray()
//     data = dataGeShi(data)
//     ctx.body = data
// })

//  图册管理页点击编辑数据点击确定修改图册信息
// router.post('/editShareImage',async (ctx)=>{

//     let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('shareImage').updateOne({_id: ObjectID(body._id)}, {$set: {"views": body.views, "inputTitle": body.inputTitle, "value": body.value}})
//     data = dataGeShiUpdate(data)
//     ctx.body = data
// })

//  图册管理页点击编辑数据点击确定删除图册
router.post('/deleteShareImage',async (ctx)=>{

    let id = ctx.request.body.id

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('shareImage').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('shareImage', {_id: ObjectID(id)})
    data = dataGeShiUpdate(data)
    ctx.body = data
})

module.exports=router.routes();
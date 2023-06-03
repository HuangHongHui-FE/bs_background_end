const router = require('koa-router')()

const client = require("../../../utils/dbconfig.js")

const dataGeShi = require("../../../utils/dataGeShi.js")
const dataGeShiUpdate = require("../../../utils/dataGeShiUpdate.js")

const ObjectID = require('mongodb').ObjectId;
const DB = require('../../../module/db.js');

// 分类数据的获取
router.get('/', async ctx=>{
    let query = ctx.query.query
    let pagenum = parseInt(ctx.query.pagenum) - 1

    // await client.connect();
    // let db = client.db("funguy");

    // let data = await db.collection('classify').find({name: { $regex: `${query}` }}).skip(pagenum * 10).limit(10).toArray()

    let data = await DB.find('classify', {name: { $regex: `${query}` }})
    data  = await data.skip(pagenum * 10).limit(10).toArray()

    data = dataGeShi(data)
    ctx.body = data
})


//  分类管理页点击编辑数据点击确定删除分类
router.post('/deleteClassify',async (ctx)=>{

    let id = ctx.request.body.row._id
    let name = ctx.request.body.row.name

    // await client.connect();
    // let db = client.db("funguy")
    // // { acknowledged: true, deletedCount: 0 }
    // let data = await db.collection('classify').deleteOne({_id: ObjectID(id)})

    let data = await DB.deleteOne('classify', {_id: ObjectID(id)})
    if(data.acknowledged != true){
        data = dataGeShiUpdate(data)
        ctx.body = data
    }else{
        // let data1 = await db.collection('blogs').deleteMany({value: name})
        let data1 = await DB.deleteMany('classify', {value: name})
        data1 = dataGeShiUpdate(data1)
        ctx.body = data1
    }
    
})


// 各个分类的博客title的获取
router.get('/getTitleList', async ctx=>{
    let val = ctx.query.val

    // await client.connect();
    // let db = client.db("funguy");

    // let data = await db.collection('blogs').find({value: val}).sort({time: 1}).project({inputTitle: 1}).toArray()

    let data = await DB.find('blogs', {value: val})
    data  = await data.sort({time: 1}).project({inputTitle: 1}).toArray()
    data = dataGeShi(data)
    ctx.body = data
})


// 添加分类
router.post('/addClassify',async (ctx)=>{

    let body = ctx.request.body

    // await client.connect();
    // let db = client.db("funguy")

    // let data = await db.collection('classify').insertOne({name: body.name})
    let data = await DB.insertOne('classify', {name: body.name})
    data = dataGeShiUpdate(data)
    ctx.body = data
})




module.exports=router.routes();
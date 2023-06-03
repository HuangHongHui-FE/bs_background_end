
const Koa=require('koa'),
    router=require('koa-router')(),
    bodyParser = require('koa-bodyparser');

const cors = require('koa2-cors');
const jwt = require('jsonwebtoken')

const app=new Koa();

app.use(bodyParser())
//引入子模块
const index = require('./routes/index.js');


const static = require('koa-static')

app.use(static(__dirname+'/public'));

app.use(cors());


// token的处理

app.use(async (ctx, next)=>{
    console.log(ctx.url)
    if (ctx.url == '/H/users/login') {
        await next()
        return
    }
    // 接收客户端传递过来的 token
    const token = ctx.header.authorization
     // 解析 token 如果解析失败 返回的是 null
    const username = jwt.decode(token,'xiaoke')
    // 判断客户端是否传递了 token
    if (token == 'undefined' || username == null ) {
        ctx.body = {
            data: null,
            meta: {
                msg: "token无效",
                status:400
            }
        }
        return
    }
    // 直接放行
    await next()
})


router.use('/H', index);


//启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(8890);










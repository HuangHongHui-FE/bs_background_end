//DB库
var MongoDB=require('mongodb');
var MongoClient = MongoDB.MongoClient;
const ObjectID = MongoDB.ObjectId;


var Config=require('./config.js');

class Db{
    static getInstance(){   /*1、单例  多次实例化实例不共享的问题*/
        if(!Db.instance){
            Db.instance=new Db();
        }
        return  Db.instance;
    }

    constructor(){
        this.dbClient=''; /*属性 放db对象*/
        this.connect();   /*实例化的时候就连接数据库*/
    }

    connect(){  /*连接数据库*/
      let _that=this;
      return new Promise((resolve,reject)=>{
          if(!_that.dbClient){         /*1、解决数据库多次连接的问题*/
              MongoClient.connect(Config.dbUrl, (err,client)=>{
                  if(err){
                      reject(err)
                  }else{
                      _that.dbClient = client.db(Config.dbName);
                      resolve(_that.dbClient)
                  }
              })
          }else{
              resolve(_that.dbClient);
          }
      })
    }

    find(collectionName,json){
        // this.connect().then((db)=>{
        //     return db.collection(collectionName).find(json)
        // })


       return new Promise((resolve, reject)=>{
            this.connect().then((db)=>{
                // var result=db.collection(collectionName).find(json);
                // result.toArray(function(err,docs){
                //     if(err){
                //         reject(err);
                //         return;
                //     }
                //     resolve(docs);
                // })
                
                // db.collection(collectionName).find(json, function(err, docs){
                //     if(err){
                //         reject(err);
                //         return;
                //     }
                //     resolve(docs);
                // })
                
                resolve(db.collection(collectionName).find(json))

            })
        })
    }

    updateOne(collectionName,json1,json2){
        return new Promise((resolve,reject)=>{
                this.connect().then((db)=>{
                    // db.user.update({},{$set:{}})
                    db.collection(collectionName).updateOne(json1,json2,(err,result)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(result);
                        }
                    })
                })
        })
    }

    insertOne(collectionName,json){
        return new  Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).insertOne(json,function(err,result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }

    deleteOne(collectionName,json){
        return new  Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).deleteOne(json,function(err,result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }

    deleteMany(collectionName,json){
        return new  Promise((resolve,reject)=>{
            this.connect().then((db)=>{
                db.collection(collectionName).deleteMany(json,function(err,result){
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }

    getObjectId(id){    /*mongodb里面查询 _id 把字符串转换成对象*/
        return new ObjectID(id);
    }
}


module.exports=Db.getInstance();
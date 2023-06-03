统一的失败返回结果

```js
{
  data: [],
  meta: { msg: 'Not Found', status: 404 }
}
```



axios.defaults.baseURL = 'http://127.0.0.1:8890/H'

## user

### 获取用户列表

分页获取

| url   | 方法 |
| ----- | ---- |
| users | get  |

##### 参数

```js
{
      query: '',   // 查询的条件        
      pagenum: 1   //  当前要查询的页数
 }
```

##### 结果：

```js
{
  data: [
    {
      _id: new ObjectId("612b0009d5693f3bedc0f7be"),
      username: '66666666666',
      pwd: '666666',
      nicheng: '大狗熊！',
      grjj: '俺是狗熊岭的大狗熊',
      sex: '男',
      address: [Object]
    },
    {
      _id: new ObjectId("612b5507629d9426133f8ebd"),
      username: '00000000000',
      pwd: '000000',
      nicheng: '俺是大狗熊！',
      grjj: '俺是狗熊岭的大狗熊，俺叫熊二,嘻嘻嘻！',
      sex: '男',
      address: [Object]
    },
    {
      _id: new ObjectId("6135c267930b1be593de3df6"),
      username: '77777777777',
      pwd: '777777',
      nicheng: '俺是大狗熊！',
      grjj: '俺是狗熊岭的大狗熊，俺叫熊二,嘻嘻嘻！',
      sex: '男',
      address: [Object]
    },
    {
      _id: new ObjectId("617ce106a65bb6931cdd2f00"),
      username: '15538920602',
      pwd: '1553892',
      nicheng: '俺是大狗熊！',
      grjj: '俺是狗熊岭的大狗熊，俺叫熊二,嘻嘻嘻！',
      sex: '男',
      address: [Object]
    },
    {
      _id: new ObjectId("617ce1e0a65bb6931cdd2f06"),
      username: '15538920604',
      pwd: '1553892',
      nicheng: '俺是大狗熊！',
      grjj: '俺是狗熊岭的大狗熊，俺叫熊二,嘻嘻嘻！',
      sex: '男',
      address: [Object]
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 单个用户数据获取

| url              | 方法 |
| ---------------- | ---- |
| users/getMsgById | get  |

##### 参数

{

​    id: id   //  用户在数据库的_id

}

##### 结果

```js
{
  data: [
    {
      _id: new ObjectId("6104b008c0aac6dd7455d509"),
      nicheng: '追风筝de',
      pwd: '123456',
      username: 'admin',
      grjj: '哈哈哈',
      sex: '女'
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 确认修改信息完成

| url           | 方法 |
| ------------- | ---- |
| users/editMsg | post |

##### 参数

```js
{
_id: new ObjectId("6104b008c0aac6dd7455d509"),
  nicheng: '追风筝de',
  pwd: '123456',
  username: 'admin',
  grjj: '哈哈哈',
  sex: '女'
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  },
  meta: { msg: 'okk', status: 200 }
}
```

### 单个用户删除

| url              | 方法 |
| ---------------- | ---- |
| users/deleteUser | post |

##### 参数

```js
{
    id: id   //  用户在数据库的_id
}
```

##### 结果

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```



# funguy页

## music

### 获取音乐列表

分页获取

| url          | 方法 |
| ------------ | ---- |
| funguy/music | get  |

##### 参数

```js
{
      query: '',   // 查询的条件   
      pagenum: 1   //  当前要查询的页数
 }
```

##### 结果：

```js
{
  data: [
    {
      _id: new ObjectId("613e00c48d43bc6db0dcd654"),
      music_name: '出现又离开',
      author_name: '梁博',
      path: 'public/music/出现又离开(Live)-梁博-68279255.flac'
    },
    {
      _id: new ObjectId("613e02298d43bc6db0dcd655"),
      music_name: '大城小爱',
      author_name: '李荣浩',
      path: 'public/music/大城小爱(Live)-李荣浩-150094407.flac'
    },
    {
      _id: new ObjectId("613e02a18d43bc6db0dcd67c"),
      music_name: '给我一首歌的时间',
      author_name: '周杰伦',
      path: 'public/music/给我一首歌的时间-周杰伦-440614.flac'
    },
    {
      _id: new ObjectId("613e02d38d43bc6db0dcd67d"),
      music_name: '花海',
      author_name: '周杰伦',
      path: 'public/music/花海-周杰伦-440615.flac'
    },
    {
      _id: new ObjectId("613e02fa8d43bc6db0dcd67e"),
      music_name: '明明就',
      author_name: '周杰伦',
      path: 'public/music/明明就-周杰伦-3197116.flac'
    },
    {
      _id: new ObjectId("613e03168d43bc6db0dcd67f"),
      music_name: '青花瓷',
      author_name: '周杰伦',
      path: 'public/music/青花瓷-周杰伦-324244.flac'
    },
    {
      _id: new ObjectId("613e03378d43bc6db0dcd681"),
      music_name: '说好的幸福呢',
      author_name: '周杰伦',
      path: 'public/music/说好的幸福呢-周杰伦-440623.flac'
    },
    {
      _id: new ObjectId("613e035b8d43bc6db0dcd683"),
      music_name: '算什么男人',
      author_name: '周杰伦',
      path: 'public/music/算什么男人-周杰伦-6176029.flac'
    },
    {
      _id: new ObjectId("613e040c8d43bc6db0dcd688"),
      music_name: '男孩',
      author_name: '梁博',
      path: 'public/music/男孩-梁博-23491653.flac'
    },
    {
      _id: new ObjectId("613e04358d43bc6db0dcd68a"),
      music_name: '你不是真正的快乐',
      author_name: '邓紫棋',
      path: 'public/music/你不是真正的快乐-G_E_M_邓紫棋-6488737.flac'
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 单个音乐数据获取

| url                       | 方法 |
| ------------------------- | ---- |
| funguy/music/getMusicById | get  |

##### 参数

```js
{
    id: id   //  音乐在数据库的_id
}
```

##### 结果

```js
{
  data: [
    {
      _id: new ObjectId("613e00c48d43bc6db0dcd654"),
      music_name: '出现又离开',
      author_name: '梁博',
      path: 'public/music/出现又离开(Live)-梁博-68279255.flac'
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 确认修改音乐信息完成

| url                    | 方法 |
| ---------------------- | ---- |
| funguy/music/editMusic | post |

##### 参数

```js
{
      _id: new ObjectId("613e00c48d43bc6db0dcd654"),
      music_name: '出现又离开',
      author_name: '梁博',
      path: 'public/music/出现又离开(Live)-梁博-68279255.flac'
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  },
  meta: { msg: 'okk', status: 200 }
}
```

### 单个音乐删除

| url                      | 方法 |
| ------------------------ | ---- |
| funguy/music/deleteMusic | post |

##### 参数

```js
{
    id: id   //  音乐在数据库的_id
}
```

##### 结果

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```

### 添加歌曲

| url                   | 方法 |
| --------------------- | ---- |
| funguy/music/addMusic | post |

##### 参数

```js
{
    author_name: 'aaa',
    music_name: 'aaaa',
    path: 'aaaaaa'
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    insertedId: new ObjectId("61877d8b2eef8c8ac22e87ad")
  },
  meta: { msg: 'okk', status: 200 }
}
```



## video

### 获取视频列表

分页获取

| url          | 方法 |
| ------------ | ---- |
| funguy/video | get  |

##### 参数

```js
{
      query: '',   // 查询的条件   
      pagenum: 1   //  当前要查询的页数
 }
```

##### 结果：

```js
{
  data: [
    {
      _id: new ObjectId("61432d008c05064f5fba8372"),
      title: '八嘎呀路hahahahh',
      love: 14,
      path: 'public\\video\\01.MP4',
      comments: [Array]
    },
    {
      _id: new ObjectId("614330b88c05064f5fba83e7"),
      title: '八嘎路',
      love: 3,
      path: 'public\\video\\02.MP4',
      comments: [Array]
    },
    {
      _id: new ObjectId("614330cc8c05064f5fba83e8"),
      title: '八嘎呀路',
      love: 7,
      path: 'public\\video\\03.MP4',
      comments: [Array]
    },
    {
      _id: new ObjectId("614330d68c05064f5fba83e9"),
      title: '八嘎呀路',
      love: 27,
      path: 'public\\video\\04.MP4',
      comments: [Array]
    },
    {
      _id: new ObjectId("614330e18c05064f5fba83ea"),
      title: '八嘎呀路',
      love: 26,
      path: 'public\\video\\05.MP4',
      comments: [Array]
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 单个视频数据获取

| url                       | 方法 |
| ------------------------- | ---- |
| funguy/video/getVideoById | get  |

##### 参数

```js
{
    id: id   //  音乐在数据库的_id
}
```

##### 结果

```js
{
  data: [
    {
      _id: new ObjectId("61432d008c05064f5fba8372"),
      title: '八嘎呀路hahahahh',
      love: 14,
      path: 'public\\video\\01.MP4',
      comments: [Array]
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 确认修改视频信息完成

| url                    | 方法 |
| ---------------------- | ---- |
| funguy/video/editVideo | post |

##### 参数

```js
{
      _id: new ObjectId("61432d008c05064f5fba8372"),
      title: '八嘎呀路hahahahh',
      love: 14,
      path: 'public\\video\\01.MP4',
      comments: [Array]
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  },
  meta: { msg: 'okk', status: 200 }
}
```

### 单个视频删除

| url                      | 方法 |
| ------------------------ | ---- |
| funguy/video/deleteVideo | post |

##### 参数

```js
{
    id: id   //  视频在数据库的_id
}
```

##### 结果

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```

### 添加视频

| url                   | 方法 |
| --------------------- | ---- |
| funguy/video/addVideo | post |

##### 参数

```js
{
    title: '',
    comments: [],
    love: 0,
    path: ''
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    insertedId: new ObjectId("61877d8b2eef8c8ac22e87ad")
  },
  meta: { msg: 'okk', status: 200 }
}
```



# resource页

## ResourceShare: 资源分享

### 获取资源分享列表

分页获取

| url                    | 方法 |
| ---------------------- | ---- |
| resource/resourceShare | get  |

##### 参数

```js
{
      query: '',   // 查询的条件   
      pagenum: 1   //  当前要查询的页数
 }
```

##### 结果：

```js
{
  data: [
    {
      _id: new ObjectId("61611def9656f8b179e26780"),
      title: '菜鸟文档',
      src: 'https://www.baidu.com',
      path: 'public\\shareImage\\20210908\\1631068449688.jpg'
    },
    {
      _id: new ObjectId("61611e729656f8b179e2678d"),
      title: '嘎嘎嘎',
      src: 'https://www.baidu.com',
      path: 'public\\shareImage\\20210908\\1631068449688.jpg'
    },
    {
      _id: new ObjectId("61611e859656f8b179e2678e"),
      title: '不错不错',
      src: 'https://www.baidu.com',
      path: 'public\\shareImage\\20210908\\1631068449688.jpg'
    },
    {
      _id: new ObjectId("616126fe9656f8b179e26797"),
      title: '菜',
      src: 'https://www.baidu.com',
      path: 'public\\shareImage\\20210908\\1631068449688.jpg'
    },
    {
      _id: new ObjectId("617f574c2b2abcf48c0a4c76"),
      title: '百度',
      src: 'http://www.baidu.com',
      path: ''
    },
    {
      _id: new ObjectId("617f58b82b2abcf48c0a4c77"),
      title: '中国大学mooc',
      src: 'https://www.icourse163.org/',
      path: ''
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 单个资源分享数据获取

| url                                         | 方法 |
| ------------------------------------------- | ---- |
| resource/resourceShare/getResourceShareById | get  |

##### 参数

```js
{
    id: id   //  音乐在数据库的_id
}
```

##### 结果

```js
{
  data: [
    {
      _id: new ObjectId("61611e859656f8b179e2678e"),
      title: '不错不错',
      src: 'https://www.baidu.com',
      path: 'public\\shareImage\\20210908\\1631068449688.jpg'
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 确认修改分享资源信息完成

| url                                      | 方法 |
| ---------------------------------------- | ---- |
| resource/resourceShare/editResourceShare | post |

##### 参数

```js
{
      _id: new ObjectId("61611e859656f8b179e2678e"),
      title: '不错不错',
      src: 'https://www.baidu.com',
      path: 'public\\shareImage\\20210908\\1631068449688.jpg'
    }
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  },
  meta: { msg: 'okk', status: 200 }
}
```

### 单个分享资源的删除

| url                                        | 方法 |
| ------------------------------------------ | ---- |
| resource/resourceShare/deleteResourceShare | post |

##### 参数

```js
{
    id: id   //  视频在数据库的_id
}
```

##### 结果

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```

### 添加分享的资源

| url                                     | 方法 |
| --------------------------------------- | ---- |
| resource/resourceShare/addResourceShare | post |

##### 参数

```js
{
    title: '',
    src: '',
    path: ''
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    insertedId: new ObjectId("61877d8b2eef8c8ac22e87ad")
  },
  meta: { msg: 'okk', status: 200 }
}
```

## 学习上传

| url                       | 方法 |
| ------------------------- | ---- |
| resource/study/studyWrite | post |

##### 参数

```js
{
    inputTitle: '',
    // 左侧原始输入的
    markdown:'',
    // 解析成html的
    html:'',
    // 上传的封面图片
    file: ''
}
```

##### 结果：

```js
{
  data: {
    acknowledged: true,
    insertedId: new ObjectId("618785ce2a5d210ebfcecfce")
  },
  meta: { msg: 'okk', status: 200 }
}
```

## 学习管理

### 学习管理页数据的获取

| url                      | 方法 |
| ------------------------ | ---- |
| resource/study/studyList | get  |

##### 参数

```js
{
    query: '',
    pagenum: 1
}
```

##### 结果：

```js
{
  data: [
      {
    "_id": {
        "$oid": "6180dd3cbbf6d7044b62f86c"
    },
    "inputTitle": "aaaaa",
    "markdown": "aaaaaaaaaa",
    "html": "<p>aaaaaaaaaa</p>\n",
    "file": "data:image/jpeg;base64,/9j/4QD4RXhpZgAATU0AKgAAAAgABwEAAAQAAAABAAADKAEQAAIAAAAJAAAAYgEBAAQAAAABHFUtrtibqNnSNA45YY5/FLx3NDizwVtmNI5zA4+FN/BzqK+FzbwrOGQYU5712YyedCQWHK818/OgbpdM1tG2lBjGB713V0/epc2NqXmV5C...",
    "time": "2021/11/2 下午2:39:56"
},
      {
    "_id": {
        "$oid": "6180dd3cbbf6d7044b62f86c"
    },
    "inputTitle": "aaaaa",
    "markdown": "aaaaaaaaaa",
    "html": "<p>aaaaaaaaaa</p>\n",
    "file": "data:image/jpeg;base64,/9j/4QD4RXhpZgAATU0AKgAAAAgABwEAAAQAAAABAAADKAEQAAIAAAAJAAAAYgEBAAQAAAABHFUtrtibqNnSNA45YY5/FLx3NDizwVtmNI5zA4+FN/BzqK+FzbwrOGQYU5712YyedCQWHK818/OgbpdM1tG2lBjGB713V0/epc2NqXmV5C...",
    "time": "2021/11/2 下午2:39:56"
}
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 删除学习博客

##### 参数：

```js
{
    id: id
}
```

##### 结果：

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```

# share页

## blog管理

### 获取blog列表

分页获取

| url        | 方法 |
| ---------- | ---- |
| share/blog | get  |

##### 参数

```js
{
      query: '',   // 查询的条件   
      pagenum: 1   //  当前要查询的页数
 }
```

##### 结果：

```js
{
  data: [
    {
    "_id": {
        "$oid": "6131c5f335c28078cf8ce632"
    },
    "username": "admin",
    "html": "<p>ccccccccccccccccccccc</p>\n",
    "markdown": "ccccccccccccccccccccc",
    "views": 0,
    "comments": [],
    "isNew": false,
    "time": 1630651891058,
    "inputTitle": "ccccccccccccccccc",
    "value": "vue"
	}
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 单个blog数据获取

| url                    | 方法 |
| ---------------------- | ---- |
| share/blog/getBlogById | get  |

##### 参数

```js
{
    id: id   //  blog在数据库的_id
}
```

##### 结果

```js
{
  data: [
    {
      _id: new ObjectId("615e8ed5a6843e7d01e3f5e7"),
      username: '11111111111',
      inputTitle: '是是是',
      html: '<p>三生三世</p>\n',
      markdown: '三生三世',
      views: 1,
      comments: [Array],
      value: '你管类',
      isNew: false,
      time: 1633586901458
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 确认修改blog信息完成

| url                 | 方法 |
| ------------------- | ---- |
| share/blog/editBlog | post |

##### 参数

```js
{
      _id: new ObjectId("615e8ed5a6843e7d01e3f5e7"),
      username: '11111111111',
      inputTitle: '是是是',
      html: '<p>三生三世</p>\n',
      markdown: '三生三世',
      views: 1,
      comments: [Array],
      value: '你管类',
      isNew: false,
      time: 1633586901458
    }
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    modifiedCount: 0,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
  },
  meta: { msg: 'okk', status: 200 }
}
```

### 单个blog的删除

| url                   | 方法 |
| --------------------- | ---- |
| share/blog/deleteBlog | post |

##### 参数

```js
{
    id: id   //  视频在数据库的_id
}
```

##### 结果

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```

### 修改博客时要修改的博客分类的数据

| url                    | 方法 |
| ---------------------- | ---- |
| share/blog/getClassify | get  |

##### 参数

```js

```

##### 结果

```js
{
  data: [
    { _id: new ObjectId("61362522435aec25367e996e"), name: 'vue' },
    { _id: new ObjectId("6136419013fa9c271ce03fbc"), name: '你管类' },
    { _id: new ObjectId("6136b1ddf5001ea0f30f253b"), name: 'gggggggg' },
    { _id: new ObjectId("6141a6b6ebeabf434098320d"), name: 'aaaaaa' },
    { _id: new ObjectId("6147103c400cb22e86cb958f"), name: '吼吼吼看看看' },
    {
      _id: new ObjectId("61557f9e52c743ce036945f6"),
      name: 'bhnfsdafh9sdafs'
    },
    { _id: new ObjectId("615e8e91a6843e7d01e3f5e2"), name: '爱时代是打算' },
    {
      _id: new ObjectId("615e8ed5a6843e7d01e3f5e6"),
      name: '风格让',
      inputTitle: null,
      value: null,
      views: null
    },
    { _id: new ObjectId("617e256557f0a84c7a85a6c8"), name: '哈哈哈' },
    { _id: new ObjectId("617e257e57f0a84c7a85a6ca"), name: '啥也不是' }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

## blog分类管理

### 获取分类列表

分页获取

| url            | 方法 |
| -------------- | ---- |
| share/classify | get  |

##### 参数

```js
{
      query: '',   // 查询的条件   
      pagenum: 1   //  当前要查询的页数
 }
```

##### 结果：

```js
{
  data: [
    { _id: new ObjectId("61362522435aec25367e996e"), name: 'vue' },
    { _id: new ObjectId("6136419013fa9c271ce03fbc"), name: '你管类' },
    { _id: new ObjectId("6136b1ddf5001ea0f30f253b"), name: 'gggggggg' },
    { _id: new ObjectId("6141a6b6ebeabf434098320d"), name: 'aaaaaa' },
    { _id: new ObjectId("6147103c400cb22e86cb958f"), name: '吼吼吼看看看' },
    {
      _id: new ObjectId("61557f9e52c743ce036945f6"),
      name: 'bhnfsdafh9sdafs'
    },
    { _id: new ObjectId("615e8e91a6843e7d01e3f5e2"), name: '爱时代是打算' },
    { _id: new ObjectId("617e256557f0a84c7a85a6c8"), name: '哈哈哈' },
    { _id: new ObjectId("617e257e57f0a84c7a85a6ca"), name: '啥也不是' }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 各个分类的对应博客title的获取

| url                         | 方法 |
| --------------------------- | ---- |
| share/classify/getTitleList | get  |

##### 参数

```js
{
    val: val   // 类名
}
```

##### 结果

```js
{
  data: [
    {
      _id: new ObjectId("6136419013fa9c271ce03fbd"),
      inputTitle: 'vwsvdsdv'
    },
    {
      _id: new ObjectId("614751dd9e3198aace39ef64"),
      inputTitle: 'dwrfwerewfew'
    },
    {
      _id: new ObjectId("61569fc8d771e5e75f7cb86b"),
      inputTitle: 'hafio'
    },
    {
      _id: new ObjectId("615e8ed5a6843e7d01e3f5e7"),
      inputTitle: '是是是'
    }
  ],
  meta: { msg: 'okk', status: 200 }
}
```

### 单个分类的删除

| url                           | 方法 |
| ----------------------------- | ---- |
| share/classify/deleteClassify | post |

##### 参数

```js
{
    row: '类名'   //  音乐在数据库的_id
}
```

##### 结果

```js
{
  data: { acknowledged: true, deletedCount: 1 },
  meta: { msg: 'okk', status: 200 }
}
```

### 添加分类

| url                        | 方法 |
| -------------------------- | ---- |
| share/classify/addClassify | post |

##### 参数

```js
{
    name: ''  // 类名
}
```

##### 结果

```js
{
  data: {
    acknowledged: true,
    insertedId: new ObjectId("61877d8b2eef8c8ac22e87ad")
  },
  meta: { msg: 'okk', status: 200 }
}
```


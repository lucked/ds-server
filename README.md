# Digital Signage (HTML5)


>
The advertising had improved with the invention of television,
the internet was the second improvement of advertising, IoT will improve advertising.
 
## Goal

Terminal is front end, server is back end,
We will provide technical support, and open source code, then we can provide data service.

## RESTful API's

- /api/playlists
	+ get: 获取播放单
	+ post: 保存播放单
- /api/terminals
	+ get: 获取终端信息
	+ post: 终端注册
- /api/users
	+ get: 用户登录
	+ post: 用户注册
	+ put: 用户更新
	+ delete: 用户删除
- /api/upload
	+ post: 上传文件
- /api/broadcast
	+ post: 发送消息

## Code

### Mongoose

>
Schema、Model、Entity的关系
Schema生成Model，Model创造Entity，
Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。

- Schema

	>
	一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
	
	+ Types</br>
		String, Number, Boolean/Bool, Array, Buffer, Date, ObjectID/Oid, Mixed
	+ Sample</br>

		```
		var terminalSchema = new mongoose.Schema({
			mac : String,
			id : String,
			direct : String,
			version : String,
			createDate : { type : Date, default : Date.now}
		});
		```
		
- Model
	
	>
	由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
	
	```
	var terminalModel = mongoose.model('Terminal', terminalSchema);
	```

- Entity

	>
	由Model创建的实体，他的操作也会影响数据库
	
	```
	var terminalEntity = new terminalModel({
		mac : '00-11-22-33-44-55', 
		id : '123456', 
		direct : 'vertical', 
		version : 'V8-S628G01-LF1V001'
	});
	```

## Data
 
### From server to terminal                                                                                                                       

**playlist**

```
{
    "unit":[
        {
            "mode":"single",
            "duration":null,
            "element":{
                "type":"video",
                "layout":{
                    "left":"0",
                    "top":"0",
                    "width":"1080",
                    "height":"720"
                },
                "source":[
                    "/video/1.mp4"
                ]
            }
        }
    ]
}
```

### From terminal to server

**signup**

```
{
	"mac":"11-22-33-44-55-66",
	"id":"123456",
	"direct":"vertical",
	"version":"V8-S968G01-LF1V001"
}
```
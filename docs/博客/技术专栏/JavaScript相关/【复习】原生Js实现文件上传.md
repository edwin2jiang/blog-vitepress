## Demo

![动画 (0)](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/动画 (0).gif)


> **效果：如上图所示**

## 起步

首先，要想实现文件上传，至少得有两个标签。

- input，用来输入文件，
-  button，用来触发文件上传函数

```html
<div>
    选择文件(可多选):
    <input type="file" id="f1" multiple /><br /><br />  
    <button type="button" id="btn-submit">上 传</button>
</div>
```

### input 标签属性解析

type = "file"  的含义   类型是上传文件类型

multiple 的含义 可以上传多个文件

### js代码的书写

首先我们来看下接口信息。（因为本教程侧重的是前端代码，所以就不放接口的Java源码了）

![image-20200718170555216](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200718170555216.png)



接口需要两个参数

- 一个是header 的 authorization ,也就是令牌
- 另一个就是我们的重点，文件参数。

Js代码首先肯定是要获取用户上传的文档

```js
//获得文件列表，注意这里不是数组，而是对象
var fileList = document.getElementById('f1').files;  //f1是input type="file" 的那个标签
if (!fileList.length) {   //如果文件为空，触发它
    alert('请选择文件');
    return;
}
var file = new FormData(); //构造FormData对象,这个就是我们最终上传的文件

//多文件上传需要遍历添加到 fromdata 对象
for (var i = 0; i < fileList.length; i++) {
    file.append('file', fileList[i]); 
    //formData.append(name, value); 
    //由于我接口要求的参数名是file，所以我第一个设置的是file，如果你要用于你的项目，请根据后端提供的接口调整name的值
}

//打印 目前file里的全部内容
for (var value of file.values()) {
    console.log(value);
}
```

然后就是xhr进行文件的上传

```javascript
var xhr = new XMLHttpRequest(); //创建对象

    xhr.open("POST", "https://dcdn-jiazheng.21cs.cn/file/upload"); //链接改成你项目中的
    xhr.setRequestHeader("Authorization", token);  //令牌改成你项目中的
    xhr.send(file); //发送时  Content-Type默认就是: multipart/form-data; 
    xhr.onreadystatechange = function() {
        console.log('state change', xhr.readyState);
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhr.responseText); //返回值
            console.log(obj);
            //if (obj.data) {    
            //  alert('上传成功');
            //}
        }
}
```



## 完整代码

下面代码中的url和token请改成你自己的。

```html
<!--
 * @Author: 夏2同学
 * @Date: 2020-07-15 22:06:32
 * @LastEditTime: 2020-07-18 13:17:27
 * @LastEditors: 夏2同学
 * @FilePath: \学习JavaScript\index.html
 * @Description: 
-->

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<script>
		</script>
	</head>
	<body>
		<div>
			选择文件(可多选):
			<input type="file" id="f1" multiple /><br /><br />
			<button type="button" id="btn-submit">上 传</button>
		</div>
		<script>
			function submitUpload() {
				//获得文件列表，注意这里不是数组，而是对象
				var fileList = document.getElementById('f1').files;
				if (!fileList.length) {
					alert('请选择文件');
					return;
				}
				var file = new FormData(); //构造FormData对象
				// file.append('title', document.getElementById('title').value);

				//多文件上传需要遍历添加到 fromdata 对象
				for (var i = 0; i < fileList.length; i++) {
					file.append('file', fileList[i]); //支持多文件上传
				}

				
				for (var value of file.values()) {
					console.log(value);
				}

				var xhr = new XMLHttpRequest(); //创建对象

				xhr.open("POST", "https://dcdn-jiazheng.21cs.cn/file/upload");
				// xhr.setRequestHeader("Content-Type", "multipart/form-data");
				xhr.setRequestHeader("Authorization",token);

				xhr.send(file); //发送时  Content-Type默认就是: multipart/form-data; 
				
				xhr.onreadystatechange = function() {
					console.log('state change', xhr.readyState);
					if (this.readyState == 4 && this.status == 200) {
						var obj = JSON.parse(xhr.responseText); //返回值
						console.log(obj);
						if (obj.data) {
							alert('上传成功');
						}
					}
				}

			}

			//绑定提交事件
			document.getElementById('btn-submit').addEventListener('click', submitUpload);
		</script>
	</body>
</html>
```

## 参考

> https://juejin.im/post/5da14778f265da5bb628e590
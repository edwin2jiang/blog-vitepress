### Vue版的hello world

首先，按照传统，我们来写个hello world。

```vue
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>7.8第一个Vue程序</title>
		<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div id="app">
			{{message}}
		</div>
		<script type="text/javascript">
			var app = new Vue({
				el:"#app",
				data:{
					message:"hello world!"
				}
			})
		</script>
	</body>
</html>

```

{{ messge }} 中 message 的内容会被 data对象里面 message替换

我们也可以换种方式写：

```
<span v-text="message"></span>  
```

\<span v-text="message">\</span>  是和 {{message}} 等价的

都是将内容进行替换

同时还有一种更高级的 写法 v-html="某些信息"

他的特点是会将里面的解析为html代码，和js里的innerHtml  相对应

#### 总结

- v-html主要用于渲染html元素
- v-text主要用于渲染文本

### Vue版的绑定事件

#### 语法：

v-on:事件名=“某个方法”

#### 实例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Vue学习</title>
		<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			/**
			 * 时间：2020年7月8日21:41:47
			 * 名称：
			 * 内容： v-on 绑定事件
			 * 
			 * new Vue 一个新的属性 methods 绑定事件对应函数
			 * 事件 ： dblclick , click等
			 * 		
			 */
		</script>
	</head>
	<body>
		<div id="app">
			<input type="button" v-on:click="doIt" value="按钮1"/>
			<input type="button" @click="doIt" value="按钮2"/>
			<input type="button"  value="按钮3" @dblclick="changeIt"/>
			<span>
				{{ message }}
			</span>
		</div>
		
		<script type="text/javascript">
			var app = new Vue({
				el:"#app",
				data:{
					message:"番茄炒蛋"
				},
				methods:{
					doIt:function(){
						alert("点我干嘛！")
					},
					changeIt:function(){
						this.message += ",真好吃！"
					}
				}
			})
		</script>
	</body>
</html>
```

#### 总结：

v-on 主要用于绑定事件 ， 和js里的addEventListner类似

v-on: 可以简写成 @



### v-if 和 v-show 的区别与联系

#### 语法

v-if(表达式)

v-show(表达式)   

//这个表达式必须要能得出 布尔值 类型的数据结果，其值为false ，则将对应元素隐藏

#### 区别

v-if 和 v-show 在效果上都是让元素 显示和消失

   * 		但是原理上不同，v-if 是从dom中直接取出掉该元素
   * 		而v-show 是添加了一个css样式 display：none
   * 		两者相比：v-show 更适合于频繁的操作元素显示或者隐藏
   * 		v-if 由于需要操作dom，相对开销较大

### v-bind的使用

#### 语法

v-bind:属性名="data里面的属性" //必须和data里面的属性一一对应

#### 功能

v-bind 用于操作 元素的 属性

#### 使用

v-bind:属性名 可以简写为 :属性名
v-bind:class 可以用一个表达式判定这个类是否添加 有两种写法

  - 三元运算法 v-bind:class="isActive?'test':''"
  - v-bind:class="{test:isActive}" :class="{类名:表达式}"  // 一定要加 { }，里面的值是json格式，不加无法解析

### v-for的使用

#### 语法

- v-for(item in arr/obj)
- v-for((item,index) in arr/obj)    //如果采用这种方式，第一个元素的实际含义就是item，第二个则是index

#### 功能

v-for 可以让我们方便的动态生成元素

#### 使用

```html
<body>
		<div id="app">
			<span v-for="item in arr">     
				{{ item }}
			</span>
			<br>
			<span v-for="(item,index) in arr">
				{{ index }}{{ item }}
			</span>
			<br>
			<span v-for="(item) in objTest">
				{{ item }}
			</span>
			<br>
			<button type="button" @click="add">增加</button>
			<button type="button" @click="remove">减少</button>
			<span v-for="item in obj">
				{{ item.name }}
			</span>
		</div>
		
		<script type="text/javascript">
			var app = new Vue({
				el:"#app",
				data:{
					arr:["南京","北京","上海","苏州"],
					obj:[
						{name:"小红"},
						{name:"小明"}
					],
					objTest:{
						name:"小小",
						age:18
					}
				},
				methods:{
					add:function(){
						this.obj.push({name:"小明"});
					},
					remove:function(){
						this.obj.shift();
					}
				}
			})
		</script>
</body>
```

### v-model的使用

#### 语法

v-model="message"  //message 和data里的数据一一对应

#### 功能

绑定的数据 和 表单元素的值 双向绑定

即你变我就跟着你变

#### 使用

```html
<body>
    <div id="app">
        <button type="button" @click="changeText">点我</button>
        <input type="text" v-model="message" @keyup.enter="func"/>
        <h2> {{ message }} </h2>
    </div>

    <script type="text/javascript">
        var app = new Vue({
            el:"#app",
            data:{
                message:"我爱编程"
            },
            methods:{
                func:function(){
                    alert(this.message);
                },
                changeText:function(){
                    this.message = "test";
                }
            }
        })
	</script>
</body>
```

### vue + axios

#### 简介

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

 //简介点说就是ajax的再封装，让我们更加方便的使用ajax [使用简介](https://www.kancloud.cn/yunye/axios/234845)

#### 依赖

axios不是vue里面内嵌的，所以需要调用包

```
https://unpkg.com/axios/dist/axios.min.js //包地址
```

#### 语法

```js
axios.get("url")
.then(function(response) {   //这个是申请成功后执行的函数体
    console.log(response);
}, function(err) {           //这个是申请失败后执行的函数体
    console.log(err);
})
```

还有一种写法更正规，但是麻烦些。

```js
axios.get('url')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

```

本人是懒狗，一般用第一种，少打一个.catch。

#### 实例

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Vue学习</title>
		<script src="./../js/vue.js" type="text/javascript" charset="utf-8"></script>
		 <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script type="text/javascript">
			/**
			 * 时间：2020年7月9日18:24:23
			 * 名称：获取一个笑话
			 * 内容：
			 * 		
			 */
		</script>
	</head>
	<body>
		<div id="app">
			<button type="button" @click="getJok">点我</button>
			<p> {{ jok }} </p>
		</div>

		<script type="text/javascript">
			var app = new Vue({
				el: "#app",
				data: {
					jok:"笑话"
				},
				methods: {
					getJok: function() {
						var that = this;
						axios.get("https://autumnfish.cn/api/joke/list?num=1")
							.then(function(response) {
								console.log(response);
								var obj = response.data.jokes
								that.jok =  obj[0];
							}, function(err) {
								console.log(err);
							})
					}
				}
			})
		</script>
	</body>
</html>
```


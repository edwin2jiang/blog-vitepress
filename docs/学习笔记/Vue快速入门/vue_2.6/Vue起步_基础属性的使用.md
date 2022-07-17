## Vue 快速入门_001

#### Vue版的hello world

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
<span v-text="message"></span>  //{{message}} 替换成这个
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
			 * 事件 ： dblclick , click
			 * 		
			 */
		</script>
	</head>
	<body>
		<div id="app">
			<input type="button" v-on:click="doIt" value="按钮1"/>
			<input type="button" @click="doIt" value="按钮2"/>
			<input type="button"  value="按钮3" @dblclick="changeIt"/>
			<span >
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

### v-if 和 v-show 的区别

#### 语法

v-if(表达式)

v-show(表达式)   

//这个表达式必须要能得出 布尔值 类型的数据结果，其值为false ，则将对应元素隐藏

#### 区别

v-if 和 v-show 在效果上都是让元素 显示和消失
   * 		但是原理上不同，v-if 是从dom中直接取出掉该元素
   * 		而v-show 是添加了一个css样式 display来产生的改变
   * 		两者相比：v-show 更适合于频繁的操作元素显示或者隐藏
   * 		v-if 由于需要操作dom，相对开销较大

### v-bind的使用

#### 语法

v-bind:属性名="data里面的属性" //必须和data里面的属性一一对应

#### 功能

v-bind 用于操作 元素的 属性

#### 使用

v-bind:属性名 可以简写为 :bind
v-bind:class 可以用一个表达式判定这个类是否添加 有两种写法

  - 三元运算法 v-bind:class="isActive?'test':''"
  - v-bind:class="{test:isActive}" :class="{类名:表达式}"
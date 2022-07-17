## 文章目录
[toc]

![关于js数组的一切](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/关于js数组的一切.jpg)

##  JS里的"数组"不是数组，而是对象

js里的数组和其他语言中的数组是不同的，实际它并不是数组，而是一种array-like 特性的对象。

它只是把**索引**转化成**字符串**，用作其**属性**（键）。

例如:

```js
var arr = ['a','b','c']
// 实际上 等价于
var obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
}
```



这也正是为什么 typeof arr = object 的原因。

![image-20200715221200202](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/aHR0cDovL2ltZ2JlZC14aWEtMi5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL2ltZy9pbWFnZS0yMDIwMDcxNTIyMTIwMDIwMi5wbmc)

js 里的 数组 操作起来和其他语言中的数组 操作相似，比如Java。

但是同时js里的数组还能做到像Java这样强类型语言里的数组 做不到的地方。

```js
// js 单个数组中的元素可以有多种数据类型
var arr = [1,'2',false,[1]];  // 数据类型同时包括数字，字符串，布尔值，数组
```

而Java 里的单个数组里的元素只能是同一种数据类型，例如如果声明了int 数组，那么里面的元素就全是int类型的数据

**毫无疑问，JS里的“数组”操作起来更加方便，但是这是牺牲性能换来的。**

真正的数组是一段线性分配的内存，所以它操作起来速度更加快。

##  声明数组的方法

```js
// 1. 直接创建
var arr = [];           //[] 空数组
// 2. new
var arr = new Array();  //[] 空数组
var arr = new Array(1,2,3); //[1,2,3]
```

对于数据中没有初始化的元素，它的值是undefined;

```js
var arr = [1,2];     //[1,2]
console.log(arr[2]); // undefined
```

##  数组中的length属性

Js“数组”中length是一个**奇怪**的属性

它的结果并不完全可信。一般数据里的length指的是数组中**有值元素的个数**

而js里的length并不是。

```js
var arr = [];     //[]
console.log(arr.length); // 0
arr[5] = 1000;
console.log(arr.length); // 1? 6?
```
答案是6，但数组 arr 实际有值的就一个。
js里的length 指的是 这个数组的最大整数**属性名**加上1，它不一定等于数组里属性的个数。

此外，js里的length，你还可以随意的把它变大变小，（简称随地大小变）

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/aHR0cDovL2ltZ2JlZC14aWEtMi5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL2ltZy8lRTYlQkIlOTElRTclQTglQkQuanBn)

```js
var arr = [1,2,3];
arr.length = 1;
console.log(arr); // 猜一下arr现在等于什么
```

对，你没有猜错，arr 此时只剩下一个元素了，[1]

通过将length变小，可以去掉所有属性名大于等于length的值

**通过这一点，我们可以更加方便的删除元素。**

```js
arr.length = 0; //清空数组
arr.length = arr.length-1; //去除掉末尾元素
```

##  如何判定一个对象是数组

通过前面的讲解，我们已经知道了Js里的数组实际是一个对象，

通过 typeof 来判断也是对象

![image-20200715221200202](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/aHR0cDovL2ltZ2JlZC14aWEtMi5vc3MtY24taGFuZ3pob3UuYWxpeXVuY3MuY29tL2ltZy9pbWFnZS0yMDIwMDcxNTIyMTIwMDIwMi5wbmc)

那我们怎么判定一个数组是我们想要的js数组呢。

```js
function isArray(obj){
	return Object.prototype.toString.apply(obj) === '[object Array]';
    //这个可以直接拿去用，可确保是正确的
}
```



##  数组的枚举

```js
let arr = [1,2,3];
			
// 1. 普通for循环
for (let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
}

// 2. for in 循环 （获取到的是索引）
for (let index in arr){
    console.log(arr[index]);
}

// 3. ES6新增 增强for循环 （获取到的是元素的值）
for(let item of arr){ 
    console.log(item);
}

// 4. forEach 循环
arr.forEach(function(item,index){
    console.log(index,item);
})
```



##  数组的方法

任何语言对于数据的操作少不了增删改查，我们就先从这四个角度去看。

### 查

根据属性名去访问就好了 arr[index]

### 删

```js
//arr.shift() 删除第一个元素并返回
let arr = [1,2,3];
let element = arr.shift(); //element 是 1
console.log(element);

//arr.pop() 删除最后一个元素并返回
arr = [1,2,3];
element = arr.pop(); //element 是 3
console.log(element);
```

### 增

```js
// 和删除相对应，增加也有从头部增加和尾部增加

// 插入单个元素
// 1. 从头部插入 arr.unshift(item...)
let arr = [1,2,3];
arr.unshift(0);
console.log(arr);  //[0,1,2,3]

// 2. 从尾部插入 arr.push(item...)
arr = [1,2,3];
arr.push(4);
console.log(arr);  //[1,2,3,4]

// 插入多个元素
// 显然如果插入多个元素，我们一个个去push是很麻烦的，所以提供了一个方法
// arr.concat(item...) concat 这个单词的含义是合并数组;
arr1 = [1,2];
arr2 = [3,4];
arr = arr1.concat(arr2);
console.log(arr);   //[1,2,3,4] & arr1 没有改变 还是[1,2]


// 关于从任意位置插入，在修改里面会讲
```



### 改

```js
// 根据索引修改
arr[index] = value;

// 数组修改其实要记一个 arr.splice(start,deleteCount,item...)
/**
* 参数 start:开始的索引
* 		deleteCount : 删除元素的个数
* 		item: 要插入的元素值
* 返回值 被删除的元素数组
*/

let arr = [1,2,3];
let a = arr.splice(0,1,'test'); //从0开始删除一个元素，并在这个位置插入元素'test'
console.log(arr); //["test",1,2]
console.log(a); // [1]
```



### 额外

- 数组转字符串

```js
/**
 * arr.join(separator)
 * 数组转字符串 把数组的每个元素拿出来，用separator将他们分隔开来
 * 参数 separator 分隔符
 */
let arr = [1,2,3];
let c = arr.join(','); //1,2,3   将arr数组中的元素用逗号分割，并转换成字符串
console.log(c);

//其实等价于
let str = "";
for (item of arr){
    str += (item+',');
}
str = str.substr(0,str.length-1); //去除掉最后一个逗号
console.log(str);
```

- 数组复制

```js
/**
 * 有的时候我们想复制数组中的一段元素，但是我们不想改变原数组
 * 就用 arr.slice(start,end)
 * 参数 start 开始索引
 * 		end 结束索引
 * 		实际获取的元素是 [start,end) 左闭,右开 ！！！
 * 		基本上所有语言，（start,end）都是这样的规定
 */

let arr = [1,2,3];
let temp = arr.slice(0,2);   
console.log(temp);  //[1,2]
```



- 数组反转

```js
/**
 * 使用arr.reverse()反转数组
 */
let arr = [1,2,3];
arr.reverse()     // 直接改变原数组
console.log(arr); // [3,2,1]
```




本文中，因为js里的数组实际就是对象，所以所有数组的索引都叫做属性名。
![Js接口盘点](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/Js接口盘点.png)

## Array

#### array.push(item...)

作用：往数组添加元素，尾部添加 

#### array.unshift(item...)

作用：往数组添加元素，头部添加

#### array.concat(item...)

作用：把 元素 插入数组，和push不同的点在于，concat可以指定元素是数组，即把一个数组在尾部插入。

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

// 3. 插入多个元素
// 显然如果插入多个元素，我们一个个去push是很麻烦的，所以提供了一个方法
// arr.concat(item...) concat 这个单词的含义是合并数组;
arr1 = [1,2];
arr2 = [3,4];
arr = arr1.concat(arr2);
console.log(arr);   //[1,2,3,4] & arr1 没有改变 还是[1,2]
```

#### array.pop()

作用：删除元素，从尾部删除

#### array.shift()

作用：删除元素，从头部删除

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

#### array.reverse()

作用: 反转数组的顺序，并返回array本身

```javascript
/**
 * 使用arr.reverse()反转数组
 */
let arr = [1,2,3];
arr.reverse()     // 直接改变原数组
console.log(arr); // [3,2,1]
```

#### arry.slice(start,end)

作用:复制array里的一段内容

```javascript
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

#### array.join(separator)

作用：数组转字符串，将数组里面的元素拿出来用separator（分隔符）串联在一起，变成字符串

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

#### array.sort(comparefn)

作用：数组排序（并不一定可靠）

```javascript
var arr1 = [3,2,1];
console.log(arr1.sort()); // 输出 [1,2,3]
var arr2 = [4,8,15,23];
console.log(arr2.sort()); // 输出 [15, 23, 4, 8] ？？？
/**
  * 也许聪明的你，已经看出规律了，
  * arr.sort() 它只排序了比对了数据第一位。
  * arr2,它将8和15做比较大小的时候，是将8和1比较的，
  * 所以，15才会在8前面。
  */

//arr.sort(comparefn) 可以通过接受一个compare参数来进行更加精准排序
arr2.sort(function(a,b){
    return a-b;
});
console.log(arr2); // [4, 8, 15, 23] 此时结果正确了
// 你的比较函数应该接受两个参数，并且如果两个参数相等则返回0
// 如果两个参数不等，且第一个参数排在前面，则返回一个负数
// 如果两个参数不等，且第二个参数排在前面，则返回一个正数
```

#### array.splice(start,deleteCount,item...)

作用：全能王，能同时实现删除和插入。

```javascript
// arr.splice(start,deleteCount,item...)
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

#### Array.isArray(item)

作用：判定一个元素是否是数组

```javascript
Array.isArray([1, 2, 3]);  
// true
Array.isArray({foo: 123}); 
// false
Array.isArray("foobar");   
// false
Array.isArray(undefined);  
// false
```

自此，关于数组的常用方法（API) 就学习完了。

## Number

#### number.toString()

作用：数字类型转字符串

#### Number.parseInt(item)

作用：将字符串，转换成整数，当item不是字符串时，会调用tostring方法，把它变成string

#### Number.parseFloat(item)

作用：将字符串，转换成浮点数，当item不是字符串时，会调用tostring方法，把它变成string

```javascript
// 1. 
var num = 3.14;
console.log(num.toString(),typeof num,typeof num.toString());
// 输出 3.14 number string
// 2.
console.log(Number.parseInt(num));    //3
console.log(Number.parseInt("3.14")); //3 
// 3.
console.log(Number.parseFloat("3.14"),typeof Number.parseFloat("3.14"));
// 输出 3.14 "number"
```

#### Number.isNaN(item)

作用：判定一个数值是否NaN

```javascript
/**
  * NaN的数据类型是number,它不等于任何值，也不等于它自己
  * console.log(NaN === NaN); //false
*/

Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。(一定要使用Number.isNaN,而不是 isNaN,会引起如下错误)
Number.isNaN("NaN");      // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("blabla");   // false

```

#### Number.isInteger(item)

作用：判定一个数是否是整数

```javascript
console.log(Number.isInteger(3)); //true
console.log(Number.isInteger(3.14)); //false
console.log(Number.isInteger(undefined));//false
```

## Object

#### object.hasOwnProperty(item)

作用：判定对象是否拥有某属性

```javascript
var obj = {
    name:"tom",
    age:18
}
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("weigth")); // false
```

#### object.keys()

作用：返回对象所有的属性，作为数组

```javascript
var obj = {
    name:"tom",
    age:18
}
console.log(Object.keys(obj)); //["name", "age"]
```

#### object.values()

作用: 返回对象所有的值，作为数组

```javascript
var obj = {
    name:"tom",
    age:18
}
console.log(Object.values(obj)); // ["tom", 18]
```

### 补充：object的子集JSON

JSON只有两个方法 

#### JSON.stringify()

作用：返回与指定值对应的JSON字符串。即对象类型转字符串，常用于数据传输。

#### JSON.parse()

作用：解析JSON字符串并返回对应的值。即字符串转对象类型，常用于数据传输。

这俩在JSON格式的数据传输中必不可少。前后端交互少不了它们。

```javascript
var obj = {
    name: "tom",
    age: 18
}

console.log(JSON.stringify(obj),typeof JSON.stringify(obj));
// {"name":"tom","age":18}  数据类型：string

var str = '{"name":"tom","age":18}';
console.log(JSON.parse(str),typeof JSON.parse(str));
// {name: "tom", age: 18}  数据类型 object
```



## String

#### string.charAt(pos)

作用：返回字符串在对应索引处的值

```javascript
var str = "hello";
console.log(str.charAt(0)); // h
console.log(str[0]);        // h 
// 这两种结果是一样的，都是返回字符串在对应索引处的值
```

#### string.concat(string...)

作用：把字符串连接起来构成一个新的字符串（常用+运算符把它替代）

```javascript
var str1 = "hello";
var str2 = " world!";
var str = str1.concat(str2);
console.log(str);       //hello world!
console.log(str1+str2); //hello world!
// 建议使用+运算符进行字符串拼接
// 现阶段浏览器引擎都对+运算符做过优化，它的性能并不低
```

#### string.indexof(searchString,position)

作用：查找searchString在string 中第一次出现的位置，返回值如果是-1，说明没找到

#### string.lastIndexOf(searchString,position)

作用：从末尾开始查找searchString在string 中第一次出现的位置，返回值如果是-1，说明没找到

```javascript
var str = "hello world";
console.log(str.indexOf("h")); //0
// 不指定postion,默认postion=0
console.log(str.indexOf("o")); // 4
console.log(str.indexOf("o",5)); // 7

// 从末尾查找
console.log(str.lastIndexOf("o")); //7

// 没找到返回-1
console.log(str.indexOf("s")); // -1
```



#### string.search(regexp)

作用：search方法和indexof方法类似，但是只能接受一个正则表达式作为参数

```javascript
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, 对应的是 "J"
console.log(str.search(re2)); // returns -1，没能找到 '.'
```

#### string.substring(start,end)

作用：截取字符串（缺点参数start,end不能是负数）

#### string.slice(start,end)

作用：和substring功能类似，但是它的参数start,end 可以接受负数（请尽量使用slice，而不是substring，slice比substring更加强大)

```javascript
var str = "hello world";
console.log(str.substring(6,str.length)); //world
console.log(str.slice(6,str.length));//world

// 但是substring 不支持 负数
console.log(str.substring(-5,str.length)); // 它会输出一个不合理的值
console.log(str.slice(-5,str.length)); // world

/**
 * 当时用str.slice 时，-1对应的就是最后一个字符
 * 上例中 
 * -1 对应的是 字母d
 * -2 对应的是倒数第二个 也就是 字母l
 * 请尽量用slice 取代 substring
 */
```

#### string.split(separator,limit)

作用：字符串转数组

```javascript
/**
 * string.split 
 * 参数介绍：
 * 		separator:分隔符
 * 		limit: 生成数组元素个数 
 */
var str = "1,2,3";
var arr = str.split(",",2);
console.log(arr); // ["1", "2"]
```

#### string.toLowerCase()

作用：字符串全部转小写

#### string.toUpperCase()

作用：字符串全部转大写

```javascript
var str = "Hello WORLD";
console.log(str.toLowerCase()); //hello world
console.log(str.toUpperCase()); //HELLO WORLD
```

## Date

#### date.toLocaleString()

作用：转化成本地时间，包含完成的年月日和时分秒。

#### date.toLocaleDateString()

作用：转化成本地时间，包含完成的年月日。

#### date.toLocaleTimeString()

作用：转化成本地时间，包含完成的时分秒。

```javascript
var date = new Date();

console.log(date.toLocaleDateString());// 日期 2020/7/23
			
console.log(date.getFullYear()); // 2020
console.log(date.getMonth());    //6
console.log(date.getDate());     // 23

console.log(date.toLocaleTimeString()); //上午10:44:26

console.log(date.getHours());   // 10
console.log(date.getMinutes()); // 44
console.log(date.getSeconds()); // 26

console.log(date.toLocaleString()); // 2020/7/23 上午10:47:45

var date = new Date(2020,01,02,11,11,11); 
// 依次为 年，月，日，时，分，秒
// 2020/2/2 上午11:11:11 实际月份 = 设置的+1
console.log(date.toLocaleString());
```

好了，这就是全部内容了，如果觉得对你有所帮助的话就点个赞吧。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/点赞.jpg)

么么哒

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/么么哒.png)
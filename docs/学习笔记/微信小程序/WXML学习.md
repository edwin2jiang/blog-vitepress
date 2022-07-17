

![驯鹿2](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/驯鹿2.png)

# 微信小程序_wxml学习

wxml里面有很多类似Vue的语法。

## 数据绑定

比如数据绑定，在js里面的data里面写。

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello world!",
    isShow:true,
    arrayObj:["周一","周二","周三"]
  },
})
```

只要通过差值表达式，就可以将数据渲染到页面里。

```html
<view>{{msg}}</view>  //hello world!
```

是不是很像Vue里面的new Vue({ }) 里面写个data。:blonde_woman:

## wx:if的使用

等效于Vue中的v-if

```html
<view wx:if="{{isShow}}">显示</view>
<view wx:if="{{!isShow}}">不显示</view>
```

isShow = true ，猜猜显示哪一个？你脑中的画面和下图一样吗。



![image-20200917183710267](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200917183710267.png)



同时还有wx:elif 和 wx:else。

today=3，下面的代码，运行后什么样子，脑子里面有画面了吗？

```html
<view wx:if="{{today === 1}}">周一</view>
<view wx:elif="{{today === 2}}">周二</view>
<view wx:elif="{{today === 3}}">周三</view>
<view wx:else>周四</view>
```

![image-20200917184527642](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200917184527642.png)

对，没错，就是只显示周三。

Vue里面还有v-show，那么微信小程序里面有没有wx:show呢？答案是，没有！

但是它有一个替代的的属性 hidden，等效于v-show。

```html
<view hidden="{{true}}"> 
  测试
</view>
```

显然，上面的代码跑后就是什么也不显示，控制台的样式如下图：

![image-20200917184847538](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200917184847538.png)



## wx:for的使用

wx:for可用于遍历一个数组，通过item访问元素，index访问索引（index和item必须放在差值表达式里面，不然只会被解析成字符串）

**arrayObj=["周一","周二","周三"]**

```html
<view wx:for="{{arrayObj}}" 
      wx:key="*this" 
      wx:if="{{ index+1 === today ? true : false }}"
      >{{index+1}}. {{item}}
</view>
```
遍历后的结果：

![image-20200917185331413](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200917185331413.png)



 `wx:key` 是用来指定列表中项目的唯一的标识符，可以指定它为this。保留关键字 `this` 代表在 for 循环中的 item 本身。
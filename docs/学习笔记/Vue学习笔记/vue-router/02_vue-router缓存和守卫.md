# vue-router缓存与守卫

## vue-router缓存

> **原理：**每一次路由跳转，都会重新创建一份dom，如果如要缓存起来，需要在router-view组件外面添加keep-alive组件。



![image-20201130114505990](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20201130114505990.png)



#### keep-alive 标签有两个属性可以绑定

-  include 缓存 
-  exclude 不缓存

用法如下：

```html
<keep-alive exclude="about,user" include="index">
    <router-view />
</keep-alive>  // 当值有多个，用逗号隔开，中间不允许有空格。
```

属性的值对应的是export 的 name 属性的值，严格区分大小写。

```js
export default {
    name: 'index'
}
```



## vue-router 守卫

> 官网解析： [导航守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫)

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // from page1 to page2 
  // from = 原来的$route  to = 后来的route
  // 一般next() 方法一定调用，否则无法正常跳转
})
```

#### beforeEnter 局部守卫（路由独享的守卫）

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```



meta 元数据 （用来描述数据的数据）






# vue-router 起步

> @time: 2020年11月28日19:49:23
>
> @lastEdit: 
>
> @description: 
> 
## history模式

vue-router默认采用的是hash地址。 

```
地址栏常见/#/ 
```

但样式比较丑，也和常规习惯的地址不同，去除方法，

```js
new Router({
	mode: 'history'
})   // 只需要在Router配置项中加一个mode
```

这样子，npm run dev是正常的。

但是，npm run build之后的路由文件会出错。[解决办法点我](https://www.cnblogs.com/jiayeyuan/p/14029194.html)

## router-link属性

**to :** 属性to用于指定跳转的路径

**tag :** 指定router-link标签渲染成什么组件，例如tag="li", 最终会被渲染成<li\>元素

**replace:** 使用replace不会留下history记录，所以后退键不能返回。（需要重新启动页面才会生效）

**active-class:** 当<router-link\> 对应的路由匹配后，会自动添加一个router-link-active的class，使用active-class可以修改默认的名称。

## 通过方法进行页面跳转

> **原理：** 通过$router进行地址栏改变
>
> **方法一：** this.$router.replace  // 不可使用回退键
>
> **方法二：** this.$router.push     // 可使用回退键

```js
<el-button type="primary" @click="toIndex">首页</el-button>
export default {
  name: "App",
  methods: {
    toIndex() {
      this.$router.replace("/index");
      // or this.$router.push('/index');
    }
  },
};
```

## 参数传递及获取

>**原理：** 地址栏参数传递，通过$route获取
>
>**获取params参数 :** this.$route.params.参数名
>
>**获取query参数**： this.$route.query.参数名

#### 参数传递

1. 地址拼接

   ```html
   <router-link to="/user/userid?name=tom&age=18" replace >user</router-link>
   ```

2. 传对象

   ```html
   <router-link
         :to="{
           path: '/user/userid',
           query: {
             name: 'tom',
             age: 20,
           },
         }"
         tag="el-link"
         replace
         >user</router-link
      	  >
   ```



 3. 通过自定义方法

    ```js
    toIndex() {
          this.$router.replace({
            path:'/index',
            query:{
              current: 'index'
            }
          });
        },
    ```

## 路由的懒加载

> **原理：** 通过import( )的方式引入组件，就会实现懒加载。

```js
import vueComponet from './components/demo'; // 一次性全部加载
const vueComponet = import('./components/demo'); // 懒加载，只有当用到该组件的时候才加载
// build 多产生文件数 = 子组件数
```

## 路由的嵌套使用

> **原理：** 通过children来指定子路由，但是子路由的path前面不能加/

```js
const routes = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  component: index,
  children: [{
    path: '',
    redirect: 'article'
  }, {
    path: 'article',
    component: indexArticle,
    children:[{
      path:'child',
      component: ()=> import('../components/index/article/Grandchild')
    }] 
  }, {
    path: 'message',
    component: indexMessage
  }]
}, {
  path: '/about',
  component: about
}, {
  path: '/user/:username',
  component: user
}]
```


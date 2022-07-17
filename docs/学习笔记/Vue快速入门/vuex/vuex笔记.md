# vuex基本使用

## 官方描述

![image-20201204200734783](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/2022/07/17/20220717-174845.png)

## 下载安装

```sh
npm i vuex
```

## 进行使用

1. 创建这样的目录结构
![image-20201204201813809](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20201204201813809.png)

2. 在index.js中使用

```js
import Vue from 'vue';
import Vuex from 'vuex';

// 1.引入外部依赖
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'
import moduleA from '@/store/modules/moduleA'

// 2.安装vuex
Vue.use(Vuex);

// 3. 创建state
const state = {
  count: 2
}

// 4. 导入模块
const modules = {
  a: moduleA
}

// 5. 创建vuex对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})

// 6. 导出
export default store;
```

## state属性

> 描述：类似于data，但它是一个对象
>
> 访问数值：this.$store.state.属性名

## getters属性

> 描述：类似于计算属性
>
> 默认参数：1. state   	2. getters  
>
> 当其为子模块中的时候，会多一个参数 3. rootState 

## mutations属性

> mutation属性等效于 vue中的methods，参数的第一个值是state，第二个值是传入的参数
>
> mutation中的方法必须是同步的方法。

#### mutations属性传递参数

this.$store.commit('addCount', count);  传递参数

#### mutations提交风格

```js
let age = 18;
// this.$store.commit('addCount', count);   // 这种适合提交单个参数
this.$store.commit({
    type:'addCount',
    count,
    age
});
},   // 这个适合提交多个参数
```



> payload: 负载
>
> **提示：** 
>
> - 当采用第一种提交方式的时候，是传递的一个变量。
>
> - 当采用第二种提交方式的时候，传递的是一个对象。

## mutations响应式规则

![image-20201204183508725](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20201204183508725.png)

通过索引修改值 不是响应式的。

通过push/pop/splice 方法修改值是响应式的。

通过vue.set('属性名', '要加的属性名'，值) 是响应式的。

## mudules属性

> 描述： 用于功能拆分
>
> 具有state、mutations、actions、getters。
>
> 同时有rootState参数。



## actions属性

> 作用： 调用异步方法。异步方法必须放在action中。

## 目录结构推荐

```bash
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```
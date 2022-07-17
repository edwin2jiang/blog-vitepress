# axios的使用

## 基础使用

```js
// 1. 引入
import axios from 'axios'

// 2. 请求
axios({
    method:'',
    url:'',
    data:{
        
    }, // boyd 请求体参数
    params:{
        
    } // query 参数
}).then((req)=>{
    
}).catch(err=>{
	
})
```

## 默认配置

>属性：
>
>- baserURL: 请求的默认地址

```
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

## 封装结构

> 新建目录：network  分装后的结构放在里面

**参考封装结构**
```js
import axios from 'axios'

export function request(config){
    const req = axios.create({
        baseURL:'http://123.207.32.32:8000'
    });
    return req(config);
}
```



## 挂载到vue实例中

```sh
yarn add vue-axios@2.0.1 axios

## 使用
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

## 在Vue实例中使用 （不在vue实例中 this无法正常继承）
export default {
  name: 'App',
  beforeMount() {
    console.log(this.axios);
  },
};

# 直接挂在到原型上
import axios from 'axios'
Vue.prototype.$axios = axios;
```



## 拦截器

> 功能：可以用来做刷新加载动画
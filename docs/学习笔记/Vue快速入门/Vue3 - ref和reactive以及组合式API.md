# Vue3入门笔记—2022年1月9日

## 1. 响应式值（ref和reactive）

一般：

1、ref用于单个值，

2、reactive用于对象类型的数据。

例如:

```js
const name = ref("zhangsan")
const user = reactive({
    'name': 'zhangsan',
    'age': 18
})
// 当用ref去封装对象类型的数据时，数据发生变化，watch函数监听不到，(ref只能监控到整个值发生变化)
// 而reactive函数可以监控的到

watch(user,(newVal)=>{
    // 输出新的值
    console.log('newVal:' , newVal);
})

const refUser = ref({
    'name': 'zhangsan',
    'age': 18
})

watch(refUser,(newVal)=>{
    // 输出新的值( 这个没办法被监控到 )
    console.log('newVal:' , newVal);
})
```



虽然表面上看上去ref和reactive修饰的值都可以发生改变，但是实际ref修饰的值的变化并么有被监控到。

![image-20220109173115191](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109173115191.png)



![image-20220109173143966](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109173143966.png)



ref和reactive在获取值时候的区别：

```js
const nameRef = ref("zhangsan")
const nameReactive = reactive("zhangsan")

// ref需要添加.value
// 而reactive不要
console.log(nameRef.value)
console.log(nameReactive)
```



## 2. composition API (组合式API)

通过组合式API，替代以前的：

````javascript
export default{
	data:{
	},
	methods:{
	},
	computed:{
	}
}

// 所有的参数写在option中
// 不利于写大项目，你会上上下下来回跳（写过Vue项目的都懂，写着写着就得去找methods在哪）
// 找对应的参数的位置会浪费很多不必要的时间
````



如果你坚持使用上面的书写方式，当代码量上去后，你会在data,methods,computed...之间来回跳。

![image-20220109204015792](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109204015792.png)

**上面是Vue官网中原话，可以作为证明。**

尤大大也意识到这个问题，所以才引入了composition API。



**composition API ：**

```javascript
import {computed,ref,reactive} from "vue"
export default{
    setup(){
        // 需要特别注意：
        // setup函数中的this是undefined
        // 该函数执行在beforeCreate和Created生命周期函数之前
        function funcName(){
            // 直接写就行，不需要methods属性里面写
        }

         let data = reactive({
             name: 'zhangsan',
             age: 18,
             addAge: computed(()=>data.age+1) // 计算属性
         })


         return {
             data,
             funcName
        }
    }
	
}
```



## 3. setup函数

**setup函数中的this是undefined**
该函数执行在beforeCreate和Created生命周期函数之前

无法通过this.xxx, 访问属性

setup(props)

![image-20220109194651170](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109194651170.png)



props参数可以用于接收来自父组件的参数 （需通过props属性接收）

**context（上下文）中内容非常多：**

![image-20220109194431287](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109194431287.png)



```vue
父组件：
<MySubComp
      one="111"
      two="222"
      msg="hello"
    > </MySubComp>


子组件：
props: {
	// 显示说明属性
    one: {
      type: String,
    },
    two: String,
  },
  setup(props, context) {
    console.log('🚀 ~ file: subComp.vue ~ line 14 ~ setup ~ context', context)
    console.log('🚀 ~ file: subComp.vue ~ line 14 ~ setup ~ props', props)
  },
```



![image-20220109204423952](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109204423952.png)

```vue
// 触发父组件中的事件
context.emit('MyClick', '子组件向父组件传输消息')


// 父组件：
<script>
import MySubComp from '../components/MySubComp.vue'
export default {
  components: {
    MySubComp,
  },
  setup() {
    function foo(param) {
      console.log(param)
    }
    return {
      foo,
    }
  },
}
</script>
```

![image-20220109205054998](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109205054998.png)

同时context可以直接采用es6中的解构

```
setup(props,{attrs,emit,refs}){
	// 采用解构的方式的话就不用 context.xxx
	// 直接采用下面方式即可：
	emit()
	attrs.xxx
	refs.xxx
}
```





## 补充：



使用vuecli创建项目意料之外的bug。![image-20220109171824149](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220109171824149.png)

```
self.xhr.send(payload); // 注释掉这行代码就行。
```



可参考这篇文章解决：https://www.cnblogs.com/axu8080/p/15217284.html
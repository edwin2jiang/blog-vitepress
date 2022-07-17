# vue3 - 父子组件数据传递



```js
// 在setup(){} 通过provide向子组件提供数据

// 父组件：
let title = ref('hello world')

provide('title', title)  // 键值对形式

return {
    title,
}


// 子组件:
setup() {
    let title = inject('title') // 通过inject来接收数据
    return {
      title,
    }
},
```



通过这种方式传递的数据是双向绑定的。

![image-20220112200601433](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220112200601433.png)

而且可以多层嵌套。
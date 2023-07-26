# Vue超简单的全局状态管理 - Pinia的最佳实践 

## 1. 安装

```
yarn add pinia
# or with npm
npm install pinia
```

```javascript 
// vue3中

import { createPinia } from 'pinia'
app.use(createPinia())
```

## 2.store

### 2.1 创建文件

![image-20220530120629006](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20220530120629006.png)

```javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'count',
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

### 2.2 使用

```javascript
// 在需要用到的地方直接引入

import { useCounterStore } from '@/stores/count'

const store = useCounterStore()

store.xxx 可以调用所有state,getters,actions

store.state
store.doubleCount
store.increment
```



## 3. 修改State中的值

主要可通过以下5种方式进行修改

```javascript
import { useCounterStore } from '@/stores/count'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count } = storeToRefs(store)

function handleClick() {
  count.value = count.value + 2   // 修改的是组件中count的值，该修改会同步到store中的count
}

// 1. 直接通过store.xxx修改
function handleClick1() {
  store.count++
}

// 2. $patch 传入对象的方式
function handleClick2() {
  store.$patch({
    count: store.count + 1,
  })
}

// 3. $patch 传入函数的方式 (推荐使用)
function handleClick3() {
  store.$patch((state) => {
    state.count += 1
  })
}

// 4. 直接替换掉$state (推荐使用方式, 重置默认值)
function handleClick4() {
  store.$state = {
    count: 0,
  }
    
   // 恢复成默认值也可以通过 store.$reset()
}

// 5. 通过actions中的函数进行修改 （推荐使用， 多个组件中可以重复使用）
function handleClick5() {
  store.increment()    // store的actions中编写函数
}

// 函数
// actions: {
//   increment() {
//     this.count++
//   }
// }
```

## 4. store.$xxx

### 4.1 store.$reset()

功能：恢复成初始值

### 4.2 store.$state

功能：访问或者修改值

### 4.3 store.$patch

功能：修改值

```javascript
import { useCounterStore } from '@/stores/count'

const store = useCounterStore()

// 1. 传入函数
store.$patch((state) => {
    state.count += 1
})

// 2. 传入对象
store.$patch({
    count: store.count + 1,
})
```

## 5. getters的使用

### 5.1 基础使用

```javascript
export const useCounterStore = defineStore({
  id: 'count',
  state: () => ({
     ... 
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
})

// in foo.vue

import { useCounterStore } from '@/stores/count'

const store = useCounterStore()

store.doubleCount   // 直接使用
```

### 5.2 传参使用

```javascript
getters: {
	// 通过使用高阶函数（函数里面返回函数）
	mulitpleNum(state) => {
		return (num) => state.count * num
	}
},

// 调用时，直接传参即可

store.multipleNum(100)
```

## 6. actions的使用

```javascript
actions: {
    increment() {
      this.count++
    },
    change(a: any, ...args: any[]) {
      // 通过this可以获取到Pinia实例,那么就能访问到它所有的方法和属性
      console.log('this.$state', this.$state)
      console.log('this.doubleCount', this.doubleCount)
      console.log('this.increment', this.increment)

      console.log('a', a)   // a 1
      console.log('args', args) // args (2) [2, 3]
    }
}


// 直接调用, 可以传任意个参数
function handleClickChange() {
  store.change(1, 2, 3)
}
```


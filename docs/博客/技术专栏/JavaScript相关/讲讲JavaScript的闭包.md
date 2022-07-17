## 简介

函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起构成**闭包**（**closure**）。也就是说，闭包可以让你从内部函数访问外部函数作用域。在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。

简单的来讲，闭包就是一个函数里面嵌套一个函数。

![函数嵌套](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/未命名文件.png)

```javascript
function a (){
    var text = "func";
    function b(){
        console.log(text); 
    };
    b();
}
a(); // 输出 func
```

可见，嵌套函数可访问声明于它们外部作用域的变量。这也是闭包的作用之一。

## 实例

```javascript
function makeFunc() {
    var name = "tom";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
```

第一眼看上去，也许不能直观地看出这段代码能够正常运行。在一些编程语言中，一个函数中的局部变量仅存在于此函数的执行期间。一旦 `makeFunc()` 执行完毕，你可能会认为 `name` 变量将不能再被访问。然而，因为代码仍按预期运行，所以在 JavaScript 中情况显然与此不同。

原因在于，JavaScript中的函数会形成了闭包。 *闭包*是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。在本例子中，`myFunc` 是执行 `makeFunc` 时创建的 `displayName` 函数实例的引用。`displayName` 的实例维持了一个对它的词法环境（变量 `name` 存在于其中）的引用。因此，当 `myFunc` 被调用时，变量 `name` 仍然可用，其值 tom就被传递到`alert`中。

## 用闭包模拟私有方法

在许多编程语言中是支持私有方法的，比如Java。

我们在JS里面可以用闭包模拟私有方法。

其实在日常JavaScript的使用中，我们天天在用闭包的私有方法。

比如说:

```javascript
var num = Number.parseInt(3.14) 
console.log(num); // 3
```

其中的Number.parseInt()

就是用的闭包模拟的私有方法。

## 使用私有方法的好处

- 私有方法不仅仅有利于限制对代码的访问
- 还提供了管理全局命名空间的强大能力
- 避免非核心的方法弄乱了代码的公共接口部分。

## 实例

```js
var makeCounter = function() {
  var privateCounter = 0;
  // 函数功能： 改变privateCounter的值
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

请注意两个计数器 `Counter1` 和 `Counter2` 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 `privateCounter` 。

每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。




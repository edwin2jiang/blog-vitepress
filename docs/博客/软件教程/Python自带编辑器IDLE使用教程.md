## 前言

IDLE是在安装python的时候自带的一个编辑器。

![image-20210310171251108](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/cfb36a42713f2f5529a851185a6c5cfc.png)


拥有基本的python编程的环境，

**常用功能点：**

- 代码自动补齐
- Debug模式
- **python文档**

你肯定想说，就这？？？

确实，不要说PyCharm比了，vscode装个插件都比这个好使。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/cd6b06e72497576f2493a21e4560eff5.png)

但是有些特殊场合，还只能用这个编辑器。（比如某些竞赛、考研复试等）

其实习惯后，使用起来也还行，毕竟最基本的功能都有。

我在使用过程中发现了一些小技巧，所以写了此文来进行分享。

## 正文

### 1. 开启行号功能

<font color=#0099ff size=4 face="黑体">Option ---> Configure IDLE ---> General ----> 点开Show line numbers in new windows</font> 

![image-20210310172846500](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/83193a6c30fda8d8346ef9e2415fda91.png)

### 2. 运行代码，自动保存

还在和上面的同一个页面。

![image-20210310172958310](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/56642e5e738426b8588eae415f331414.png)

### 3. 放大字体

![image-20210310173024321](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/55cfe0a76f9569e3c869444053a2761d.png)

### 4. 附常用快捷键

- tab自动补齐代码（等效于alt+/)

![image-20210310173156082](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/78fc3bda6187c816cccae9ae9d61e433.png)

- 右键设置断点

![image-20210310173314521](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/d6a6523622391343fa5421bfb0da01b3.png)

- **F1打开python参考文档（这个非常有用）**

![image-20210310173446073](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/9bf565c9629c751afab9a442a0893ed3.png)

- F5 运行代码
- alt+3 注释代码
- alt+4 取消注释

其他快捷键，你**根据本能来**就行了。

ctrl + cv  复制粘贴，ctrl + f 搜索 ，........

我这里就不过多赘述了。

特别注意一点，IDLE不支持快速删除一行，没有对应快捷键，不用找了。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/cd6b06e72497576f2493a21e4560eff5.png)





### 5. API查询

**查询当前模块中有哪些方法可用。**

```dir(module_name)```

![image-20210321101853946](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20210321101853946.png)

**查询具体函数的使用方法**

```help(func_name)```



![image-20210321102013398](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20210321102013398.png)

## 尾语

如果本文对您有帮助，请帮我点个赞吧。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/8fcf2fd2aec02234ffc75a6bc8565544.png)
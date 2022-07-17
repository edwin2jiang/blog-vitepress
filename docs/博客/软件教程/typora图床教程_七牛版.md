## 最强markdown编辑器typora图床教程-七牛版

markdown编辑器中的王者typora，终于支持自动将图片上传到服务器，返回url了。

![img](https://pic1.zhimg.com/80/v2-8a0c4ef3869407e2de6998480cbdbc4d_720w.png?source=d16d100b)







不用先把图片拖到图床里面再上传了。泪奔。

### 先来看看效果吧。

![视频封面](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/2022/07/17/20220717-132251.jpg)



上传视频封面



好的标题可以获得更多的推荐及关注者

注意上面图片的url变化，从一个本地磁盘上的链接，变成了服务器上的链接。

这也就是说我们再不需要来回折腾。

在typora中编写好markdown文本，直接就可以通过**导入功能**，发到博客里面了。

![img](https://pic2.zhimg.com/80/v2-43279e103c13f1ac3efb1590b87100c3_720w.jpeg?source=d16d100b)







那么怎么才能体验到这个功能。

1. 确保typora的版本在0.9.86以上

![img](https://picx.zhimg.com/80/v2-3940958b3362b4f21bf5550a69844c12_720w.png?source=d16d100b)







2. 打开typora，点开最上面的帮助，点击里面的检测更新，先升级一下版本，确保能用。

![img](https://pic2.zhimg.com/80/v2-89f00806aae3da3802dd40a0df323d81_720w.png?source=d16d100b)







3. 接着点开 最上面的文件，点倒数第二个**偏好设置**

![img](https://pic2.zhimg.com/80/v2-d1802fab5daa54185fb4e2ae21ef543e_720w.png?source=d16d100b)







4. 点击图像

![img](https://pic1.zhimg.com/80/v2-e5f031bf1151de1d75e9159e1e2a3ec6_720w.png?source=d16d100b)







5. 按照我下面的图，进行选择。

![img](https://picx.zhimg.com/80/v2-b406bb0a46680195ad71b26b8588bf46_720w.png?source=d16d100b)







6. 点击下载或更新

![img](https://pic4.zhimg.com/80/v2-27d52d27ca19f01271705f268fd0481a_720w.png?source=d16d100b)







### 准备工作，注册七牛云账号，并实名认证

- 访问下面的链接

```
https://s.qiniu.com/3imABj
```

输入信息，完成注册

![img](https://pic4.zhimg.com/80/v2-c7679ca3d42dbe6a8f882db9a75c70da_720w.png?source=d16d100b)







- 验证邮箱

![img](https://pic3.zhimg.com/80/v2-dbae7a0fbf5f11203d045a42bc2d76d6_720w.png?source=d16d100b)







- 登录账号

![img](https://pic3.zhimg.com/80/v2-bbd4703f519f66b76274391880201597_720w.png?source=d16d100b)







- 实名认证

![img](https://pica.zhimg.com/80/v2-a1e4aea2c43d677ba4fac609cf49d733_720w.png?source=d16d100b)







![img](https://pica.zhimg.com/80/v2-590a7b5dfbd270a77353f8f2c6dd3bb9_720w.png?source=d16d100b)







![img](https://pic4.zhimg.com/80/v2-abfa5ca0997b124d269c15a934221a23_720w.png?source=d16d100b)







备注以及补充：

1. 这个实名验证非常快，大概是机器识别做的验证。
2.  实名验证的网址，可以随便瞎填一个url，你复制我这篇文章的url都行 
3.  点击首页的对象管理，新建空间 

![img](https://pic4.zhimg.com/80/v2-5832c8cd6572c1f79be2056a6cb48755_720w.png?source=d16d100b)







![img](https://pic1.zhimg.com/80/v2-74c13bff68b143ee9735434c723b42ac_720w.png?source=d16d100b)







![img](https://pica.zhimg.com/80/v2-c1b6da0ce07d2176ab77de74a1bf69d0_720w.png?source=d16d100b)







### 准备工作完成，开始正式配置

- 请先在桌面上新建一个txt文本，并将下面的json文件复制进去

```
{
  "picBed": {
    "uploader": "qiniu",
    "qiniu": {
      "accessKey": "",
      "secretKey": "",
      "bucket": "", // 存储空间名
      "url": "http://", // 自定义域名
      "area":  "z2", // 存储区域编号
      "options": "", // 网址后缀，比如？imgslim
      "path": "img/" // 自定义存储路径，比如 img/
    }
  },
  "picgoPlugins": {}
}
```

- 接下里，我们现在要通过我们注册的**七牛云**账号来获取这些信息
- accessKey / secretKey 在 秘钥管理（悬浮在），里面能找到 

![img](https://pic1.zhimg.com/80/v2-a1947b39f8409d4a1beb4f0021f2e487_720w.png?source=d16d100b)







![img](https://pic1.zhimg.com/80/v2-c110cafb3589f324ce0de922fc1f8278_720w.png?source=d16d100b)







- bucket 就是你创建的空间名称

![img](https://pic4.zhimg.com/80/v2-3953035b96d6715d46a15a23c2da4d63_720w.png?source=d16d100b)







- url一栏的获取，先点击上图中的概览

![img](https://pic2.zhimg.com/80/v2-54d75e5d493d35bd9e0f42e348c51833_720w.png?source=d16d100b)







- 完整样例 

![img](https://pic1.zhimg.com/80/v2-376b42ad114a2ec70e512af43f90b15d_720w.png?source=d16d100b)







### 决战，即将全面胜利

- 点开typora，点击文件里的偏好设置，设置图像信息

![img](https://pic1.zhimg.com/80/v2-8942c771afdb5849ecbd1a5312312e91_720w.png?source=d16d100b)







![img](https://pic4.zhimg.com/80/v2-993f14a098b0972f9ac18466c0e78b7a_720w.png?source=d16d100b)







- 点开配置文件，将之前建立的txt文本复制、粘贴进配置文件里面，保存并退出。

![img](https://pic2.zhimg.com/80/v2-881da2bac2bbbf28b7504682a577e217_720w.png?source=d16d100b)







-  验证图片上传功能 

![img](https://picx.zhimg.com/80/v2-7e6dd1245eafcabe93d8aeec7b1930e3_720w.png?source=d16d100b)







 

-  当你看到下面的页面的时候，恭喜你，你已经成功了。 

![img](https://pic3.zhimg.com/80/v2-1625ae732e8f72a2f1f512e1740c7b14_720w.png?source=d16d100b)







好了，这就是全部内容了，如果觉得对你有所帮助的话就点个赞吧。

<img src="https://pic1.zhimg.com/80/v2-6d07cd7228524a37b5ac7eaeaab9e968_720w.jpeg?source=d16d100b" alt="img" style="zoom:50%;" />







么么哒

![img](https://pic3.zhimg.com/80/v2-12c645b77458c41b17e953158345d372_720w.png?source=d16d100b)






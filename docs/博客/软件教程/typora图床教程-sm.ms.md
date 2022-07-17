## 史上最强markdown编辑器typora终于支持图床功能了！！！

markdown编辑器中的王者typora，终于支持自动将图片上传到服务器，返回url了。

![$B`0P}M6W%CKF$93%6J3A6C](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/IxOH4uEiftSanT1.png)

终于不用先把图片拖到图床里面再上传了。泪奔。

#### 先来看看效果吧。

从一个本地磁盘上的链接，变成了服务器上的链接。

这也就是说我们再不需要来回折腾。

在typora中编写好markdown文本，直接就可以通过**导入功能**，发到博客里面了。

![分隔乌鸦](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/ro4KLpCvZJR7uBa.jpg)

那么怎么才能体验到这个功能。

1. 确保typora的版本在0.9.86以上

![image-20200429203606552](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/3PirA2y1Y58fxkc.png)

2. 打开typora，点开最上面的帮助，点击里面的检测更新，先升级一下版本，确保能用。

![image-20200429203725223](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/Jk1QPvgyc73qLSx.png)

3. 接着点开 最上面的文件，点倒数第二个**偏好设置**

![image-20200429203921405](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/b2kaldZCqrFyBfO.png)

4. 点击图像

![image-20200429203951593](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/vqT1JW8epPlLkr2.png)

5. 按照我下面的图，进行选择。

![image-20200429204112083](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/zUBSWXvxYkaRCoi.png)

6. 点击下载或更新

![image-20200429204220668](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/ILQ2De6fzayoPs7.png)

7. 复制下面这条链接，并注册账号

   ```
   https://sm.ms/home/apitoken
   ```

   ![image-20200429204404976](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/SbZjpWwIGN6oTKV.png)

8. 登录你注册的账号（注意用户名是用户名，不是邮箱），接着复制下面的链接，再次访问

```
https://sm.ms/home/apitoken
```

9. 然后，你就进入到这个页面

![image-20200429204623154](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/8ECsyH1RcYUrdfb.png)

![image-20200429204717704](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/K2gziIAeabpMV56.png)

10. 回到你的typora，点击打开配置文件



![image-20200429204856874](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/zlbpUIH65kfEVoF.png)

11. 将下面代码复制粘贴到你的配置文件中。

```
{
  "picBed": {
    "uploader": "smms", // 代表当前的默认上传图床为 SM.MS,
    "smms": {
      "token": "这里面的token换成你上个页面的申请的token" //一定要换
    }
  },
  "picgoPlugins": {} // 为插件预留
}
```

![image-20200429204717704](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/K2gziIAeabpMV56.png)

12. 保存这个json文件。好了，大工告成！！！

![害羞](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/HJnb2MwDkSVoKfz.jpg)

12. 点开验证图片上传。测试一下吧。

![image-20200429205210300](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/LsCNwz2kvFmUB5I.png)

![image-20200429205309996](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/xXcvIy8kaWVeSbh.png)



本文里的图片就是全部用typora自动上传服务搞的。体验很棒。

好了，这就是全部内容，如果觉得对你有帮助，就点个赞吧。

<img src="http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/JUARwS3lhCBae7D.jpg" alt="求赞" style="zoom:33%;" />

么么哒![img](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/8RBoyhKsY9w3ZQq.png)
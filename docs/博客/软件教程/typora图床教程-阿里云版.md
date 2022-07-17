# 史上最稳定的图床工具 -  阿里云 之 typora图床教程最终篇 



之前陆续更新了typora图床教程的**smms**版和**七牛云**版，本着做事做全套的精神，我又来更新了。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/害羞.jpg)

这次更新的是用阿里云作为图床。 保证是全中国最稳的**图床工具人**了。

我估计等我敲不动代码了，阿里云也还活得好好的。所以图片安全问题根本不用考虑。

唯一，有点难受的地方就是要花点钱。

**但是很便宜，6个月才4.98元，还要啥自行车。**

![阿里云](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/阿里云.png)

## 先来看看效果吧。

![giftest](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/giftest.gif)

从上图可以看出，链接从一个本地地址，变成了以阿里云为二级域名的url。即上传成功。

**好的，那我们正式开始吧。**

## 准备工作（一），确保typora版本为最新且下载了pig-go-core

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

## 准备工作（二）注册阿里云账号

1. 复制下面链接，访问并注册账号

```
https://www.aliyun.com/minisite/goods?source=5176.11533457&userCode=vnk7s0ek&type=copy
```

能有耐心琢磨软件的人，不可能不会注册账号。我就不一个个放图片。加油，你可以的。

2. 下面就假设你已经完成注册并绑定实名身份

## 正式开战，冲冲冲！！！

1. 点击控制台

![image-20200508002200565](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508002200565.png)

2. 选择对象存贮Oss，并开通服务。

![image-20200508002253075](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508002253075.png)

3. 点击概览，然后点击创建bucket.

![image-20200508002434165](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508002434165.png)

4. 输入创建的信息。

![image-20200508004329617](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508002920009.png)

5. 最好先买个资源包。**就4.98元**，一瓶水的钱。有啥舍不得的。


![阿里云](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/阿里云.png)


**半年才4.98元，它不香吗。**

好了，到这里，基础工作就全部完成了。

## 决战开始，胜利就在眼前

1. 桌面上新建一个txt文本，并复制下面内容到里面。

```
{
  "picBed": {
    "uploader": "aliyun",
    "aliyun": {
  	"accessKeyId": "",
 	"accessKeySecret": "",
  	"bucket": "", // 存储空间名
  	"area": "", // 存储区域代号
  	"path": "img/", // 自定义存储路径
 	 "customUrl": "", // 自定义域名，注意要加 http://或者 https://
 	 "options": "" // 针对图片的一些后缀处理参数 PicGo 2.2.0+ PicGo-Core 1.4.0+
	}
  },
  "picgoPlugins": {}
}
```

显然上面信息都是要通过阿里云账号获取的，首先我们来找**accessKeyId**和**accessKeySecret**

2. 鼠标悬浮在右上角头像上，并选择AccssKey管理。



![accessKey](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/accessKey.png)

3. 选择继续使用AccessKey，并点击创建accessKey

![image-20200508004209690](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508004329617.png)

![image-20200508003137855](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508004209690.png)

4. 将自己的替换更新。

![image-20200508005930597](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508004508319.png)

5. 回到之前的oss对象存贮，点击之前创建的bucket，在点击概览。

![image-20200508005527140](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508005527140.png)

6. 根据下面的图，使用自己的创建的bucket信息填充之前新建的txt。

![image-20200508005527140](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508005527140.png)

7. 提供一份完整的修改后的作为参考。

![image-20200508004715198](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508005930597.png)

8. 回到typora，依次 文件 ----> 偏好设置 -----> 图像，到下面的页面，选择打开配置文件。

![image-20200508010149034](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508010149034.png)

9. **将之前的txt文本的里面的信息，复制粘贴到配置里，并ctrl+s进行保存。**



好的，大功告成！！！

我们来验证下图片上传功能，点击验证图片上传选项

![image-20200508010348969](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508010348969.png)

如果，你看到下面这样的页面，那么恭喜你，你成功了。**congratulation！！！**

<img src="http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200508010417542.png" alt="image-20200508010417542" style="zoom:67%;" />

如果本篇文章对你有帮助，就点个赞再走吧。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/点赞.jpg)

爱你，么么哒。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/么么哒.png)
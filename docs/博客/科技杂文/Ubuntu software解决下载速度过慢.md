## 前言

最近重新配置了linux环境，从DeepIn切换回了Ubuntu。

发现Ubuntu 应用商店下载速度过于缓慢，于是切换成了国内的阿里云镜像。

切换后，速度提升明显，下载Vscode, 每秒增加1% 。

![9](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/9.png)

> 环境说明：Ubuntu: 18.04+

## 正文

### 1. 按照图片依次点击

![1](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/1.png)

### 2. 选择Mirror

![2](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/2.png)

### 3. 选择China---> aliyun镜像

![3](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/3.png)

### 4. 输入密码，确认身份

![4](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/4.png)

### 5.  选择Reload, 重新加载配置
![5](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/5.png)

![6](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/6.png)

### 6. 重新测试下载速度（2Mb/s +)

![7](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/7.png)
![9](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/9.png)
![10](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/10.png)



# 附：下载出错指南

有的同学，下载的时候，会出现 Unable to install 的错误。

![报错解决1](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/报错解决1.png)

这是因为，你之前多次点击Install， 之前运行的下载进程还没有正常结束。

在ubuntu软件商店安装XXX

报错：Unable to install "XXX": snap "code" has "install-snap" change in progress

原因：软件之前安装了一次，只是没安装完。

## 解决办法

**terminal 依次输入下图指令**

![报错2](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/报错2.png)

### 1 查看安装情况

snap changes

ID=5是我之前安装失败的。

### 2 终止，重新安装

sudo snap abort 5

### 3. 之后重新下载就可以了

![image-20210217195112164](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20210217195112164.png)

## 尾语

上面就是全部内容了，感谢您的观看。如果您有其他问题，欢迎在评论区留言。

这篇文章如果对您有所帮助的话，不妨**点个赞吧**。

这是让我坚持继续写博客下去的动力。

![](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/害羞.jpg)

**谢谢您啦。**

> 作者信息：夏2同学
>
> 撰写时间：2021年2月17日19:54:16



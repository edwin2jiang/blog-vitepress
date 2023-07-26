## 前言

前段时间，电脑出了些问题，被迫重装系统，

Gt等开发工具全都没了，最近终于有空，就打算重装回来，顺便出个教程。

## 正文

### Git的安装

首先，我们想用gitee，那就必须得安装。

用淘宝的镜像下载就好了，比源站要快很多。

```
https://npm.taobao.org/mirrors/git-for-windows/
```

随便选一个点进去就行。

![image-20200711230148190](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711230148190.png)

![image-20200711230320959](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711230320959.png)

下载好后点击安装，安装逻辑和平常安装软件是一样的。**一直点下一步就可以了**。（默认选项对于初学者来说就是最优解）



### Git的基础配置

初始化用户名和邮箱（其实这项配置随便输也可以，但最好认真点输入）

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

示例图：
![image-20200711230745035](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711230745035.png)

### Git版本库的创建

什么是版本库呢？版本库又名仓库，英文名**repository**，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

所以，创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：

```
$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit
```

`pwd`命令用于显示当前目录。在我的Mac上，这个仓库位于`/Users/michael/learngit`。

 如果你使用Windows系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。

第二步，通过`git init`命令把这个目录变成Git可以管理的仓库：

```
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
```

瞬间Git就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），细心的读者可以发现当前目录下多了一个`.git`的目录，这个目录是Git来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把Git仓库给破坏了。

如果你没有看到`.git`目录，那是因为这个目录默认是隐藏的，用`ls -ah`命令就可以看见。

### Git的三板斧

1. add
2. commit
3. push

add 的功能 暂存已修改的文件。

commit 的功能 提交将暂存区里的改动给提交到本地的版本库。 //此时就产生一个版本了

push 的功能 指定的本地分支推送到指定的远程分支  //就是把本地的文件存到指定仓库里面，和百度云备份文件一个道理

### Git和Gitee的使用

好了，终于到重头戏了。

同时这也是入门级玩家最重视的一点，如何把本地的代码上传到Gitee等代码仓库里。

首先我们得注册一个Gitee账号，这个就不说了，很简单，自己试试就好了。

```
https://gitee.com/
```

#### 使用步骤

1. 新建仓库
![image-20200711232651606](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711232651606.png)

2. 填下信息（练习阶段填一个仓库名字就够了，然后点创建）

![image-20200711232913638](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711232913638.png)

3. 复制下面这段代码到Git bash里面，回车运行它

![image-20200711233154600](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711233154600.png)

4. 运行后，你会看到这个界面，输入你的Gitee账号和密码就好了。（只有第一次运行会弹出这个，以后就不会了）

![QQ截图20200711224753](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/QQ截图20200711224753.png)

5. 如果，你看到下面的界面，那么恭喜你！成功了。

![image-20200711233426848](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200711233426848.png)

其实远程仓库就相当于我们的一个“房子”，那我们想进去，显然得要有这个房子的**地址和钥匙**。

地址：在网络的世界里就是url

钥匙：在网络的世界里就是账号和密码

```
//这个命令 就是 自动导航 到 我们的房子 
git remote add origin https://gitee.com/xia_2/test.git 
```

特别提醒！！！上面的url一定要换成后期你自己的。



### 补充

#### Git的卸载

1. 找到git的位置 

> 终端命令：which -a git

2. cd进入git所在的目录

> 终端命令：cd /usr/bin/git（这个是一般的默认位置）

3. 删除命令

> 终端命令：sudo rm －rf git＊

#### 本地仓库推送到远端仓库

```
    a.Git代码托管平台创建仓库
        http地址：https://gitee.com/woniu/git-test.git
    b.本地仓库与远端仓库关联
        git remote add origin https://gitee.com/woniu/git-test.git
    c.如果远端仓库是空的
        git push -u origin master
      一般远端仓库都会有readme文件，解决方案
        git pull --rebase origin master
    d.提交到远程仓库
       git push origin master
```

#### 拉取远程分支

```
    a.拉取远程分支,默认拉取主分支
        git clone https://gitee.com/woniu/git-test.git
    b.拉取远程指定分支
        git clone -b dev https://gitee.com/woniu/git-test.git
   c.拉取主分支后，基于远端指定分支本次创建新分支
   		git branch -av   红色部分代表远端分支
		git branch dev origin/dev  基于远端的dev分支本次创建dev分支
```



### 参考

```
https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440 //廖雪峰Git教程
https://blog.csdn.net/t2bbs20930/article/details/88737124
```


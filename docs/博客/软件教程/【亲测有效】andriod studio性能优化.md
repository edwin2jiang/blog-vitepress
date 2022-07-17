## 实现原理

主要优化的方面：

1. 给andriod studio多分配点内存
2. 手动更新gradle且配置gradle的国内下载镜像

## 1. 分配内存

找到andriod studio的安装目录。

Android_Studio/bin/**studio64.exe.vmoptions**

打开来是像下图的数据：

![image-20210319080143625](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20210319080143625.png)

把这两项调高就行，它对应的andriod studio的启动内存。

推荐使用我上面的配置，或者再分配多些。

## 2.1 手动更新Gradle

首先看下你项目的Gradle需要的版本。

![5](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/5.png)

例如我的路径：

```
C:\Users\Administrator\.gradle\wrapper\dists
```



![image-20210319080809696](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20210319080809696.png)



国内下载gradle网速慢，改用腾讯gradle镜像直接下载
https://mirrors.cloud.tencent.com/gradle/
下载对应的gradle复制到下图类似的目录，

C:\Users\dell.gradle\wrapper\dists\gradle-5.6.2-all\9st6wgf78h16so49nn74lgtbb

![在这里插入图片描述](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/20200923165545354.png)





![image-20210319080601211](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20210319080601211.png)



把下载好的zip，拖动到对应文件夹中。（.gradle\wrapper\dists\Gradle版本号）



## 2.2 配置Gradle国内镜像

镜像配置信息如下：

```
repositories {
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/google' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/gradle-plugin' }
        google()
        jcenter()
    }
```



![3](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/3.png)

![4](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/4.png)


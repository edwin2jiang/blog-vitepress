## c3p0

#### 作用

以前需要数据库连接的时候，就向数据库要求一个，执行完成后再断开连接。这样的方式将会消耗大量的资源和时间。而使用数据库连接池c3p0，直接利用现有可用连接避免了数据库连接初始化和释放过程的时间开销，从而减少了系统的响应时间。

从开发者角度考虑，减少开发工作量，而且还达到了更好的效果。

#### 使用方法

1. 引入相应的jar c3p0-xxx.jar

```
导入jar包后，右键选择构造路径，添加到路径中
```

2. 将c3pθ配置文件添加到src下。要求配置文件名固定: c3p0-config.xml , 位置- -定放在src下面并且编写(修改)配置文件

![C3P0配置](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/C3P0配置.png)

3. 创建一个数据源对象

```java
 ComboPooledDataSource dataSource = new ComboPooledDataSource();
 conn = dataSource.getConnection();
```



4. 通过数据源对象获取连接对 象和关闭连接对象(还到池子中)

```java
public class Demo01 {
    public static void main(String[] args) {
        //不带参数:默认找buildpath下c3pθ- config.xml中的<default- config>
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        Connection conn;
        try {
        conn = dataSource.getConnection();
        System.out.println(conn);
        } catch (SQLException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
        }finally {
        if(conn! =nu1l)
        {
            conn.close();|
            }
}
```

## DBUtil

#### 作用

- 无资源泄漏 - DBUtils类确保不会发生资源泄漏。
- 清理和清除代码 - DBUtils类提供干净清晰的代码来执行数据库操作，而无需编写任何清理或资源泄漏防护代码。
- Bean映射 - DBUtils类支持从结果集中自动填充javabeans。

DbUtil是apache旗下的一个JDBC封装的开源工具jar包，使用它调用数据库CRUD操作非常简便。

这个才是重头戏，大大降低了我们操作数据库的难度。

#### 使用方法

1. 引入jar包dbutils包和commops-io包

```
和上面类似，src导入jar包后，右键选择构造路径，添加到路径中
```



2. 创建一个QueryRunner对象

```java
//首先用C3P0  new一个数据源（建议声明在daoUtil里）
public static final ComboPooledDataSource dataSource = new ComboPooledDataSource();
//创建一个QueryRunner对象（使用完后它会自动关闭）
QueryRunner runner = new QueryRunner(dataSource);
```



3. 编写sql

```
//使用DButil可以让我们的重心回归编写SQL代码
String sql = "select * from emp";
```



4. 调用QueryRunner的方法:

 runner.query 或者 runner.update

```
增删改 使用 update
查询 使用 query
```



完整样例

```java
// 根据地点查询部门信息
public static List<Dept> selectDeptByloc(String loc) {
    QueryRunner runner = new QueryRunner(DataPoolUtil.dataSource);
    String sql = "select * from dept where loc = ?";
    try {
        return runner.query(sql, new BeanListHandler<Dept>(Dept.class),loc);
    } catch (SQLException e) {
        // TODO 自动生成的 catch 块
        e.printStackTrace();
    }
    return null;
}
```

涉及到的类Dept:

```java
package bean;

public class Dept {
	private int deptno;
	private String dname;
	private String loc;
	public int getDeptno() {
		return deptno;
	}
	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}
	public String getDname() {
		return dname;
	}
	public void setDname(String dname) {
		this.dname = dname;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	@Override
	public String toString() {
		return "Dept [deptno=" + deptno + ", dname=" + dname + ", loc=" + loc + "]";
	}
	
	
}
```

附下载链接：

```
C3P0: https://jww.lanzous.com/iqJzIec6drc
DBUtil https://jww.lanzous.com/b015l1akj   密码:9u1f
```


import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as s,f as a,a as e,e as i,b as l}from"./app-ef0b4d9d.js";const d={},t=e("h1",{id:"rockermq单机搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rockermq单机搭建","aria-hidden":"true"},"#"),i(" rockerMq单机搭建")],-1),c=e("p",null,[i("1、安装JDK"),e("br"),i(" 2、安装maven")],-1),v=e("p",null,"3、下载安装包",-1),m=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://mirror.bit.edu.cn/apache/rocketmq/4.4.0/rocketmq-all-4.4.0-source-release.zip

##4 没有unzip 先安装 yum install unzip
unzip rocketmq-all-4.4.0-source-release.zip

## 5、进入rockermq目录，编译
mvn -Prelease-all -DskipTests clean install -U

## 6、编译生成的mq目录ocketmq-all-4.4.0/distribution/target/apache-rocketmq
cd distribution/target/apache-rocketmq

## 7、启动nameserver
nohup sh bin/mqnamesrv &amp;
##查看日志 tail -f nohup.out (结尾以The Name Server boot success. serializeType=JSON表示启动成功)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里我们可能看到这个错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OpenJDK 64-Bit Server VM warning: Using the DefNew young collector with the CMS collector is deprecated and will likely be removed in a future release
OpenJDK 64-Bit Server VM warning: UseCMSCompactAtFullCollection is deprecated and will likely be removed in a future release.
OpenJDK 64-Bit Server VM warning: INFO: os::commit_memory(0x00000006ec800000, 2147483648, 0) failed; error=&#39;Cannot allocate memory&#39; (errno=12)
#
# There is insufficient memory for the Java Runtime Environment to continue.
# Native memory allocation (mmap) failed to map 2147483648 bytes for committing reserved memory.
# An error report file with more information is saved as:
# /usr/yl/rocketmq-all-4.4.0/distribution/target/apache-rocketmq/hs_err_pid19232.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为机器内存不够，我们需要修改内存启动。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改runserver.sh配置

JAVA_OPT=&quot;\${JAVA_OPT} -server -Xms1g -Xmx1g -Xmn1g -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m&quot;

修改runbroker.sh配置
JAVA_OPT=&quot;\${JAVA_OPT} -server -Xms1g -Xmx1g -Xmn1g&quot;

PS:分配内存大小根据自己机器酌情设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次启动，查看日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OpenJDK 64-Bit Server VM warning: Using the DefNew young collector with the CMS collector is deprecated and will likely be removed in a future release
OpenJDK 64-Bit Server VM warning: UseCMSCompactAtFullCollection is deprecated and will likely be removed in a future release.
OpenJDK 64-Bit Server VM warning: MaxNewSize (1048576k) is equal to or greater than the entire heap (1048576k).  A new max generation size of 1048512k will be used.
The Name Server boot success. serializeType=JSON

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明启动成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 8、启动broker
nohup sh bin/mqbroker -n localhost:9876 &amp;
## 9、关闭命令
sh bin/mqshutdown broker
sh bin/mqshutdown namesrv
#10、查看进程
[root@master apache-rocketmq]# jps
19346 Jps
19253 NamesrvStartup
19279 BrokerStartup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此mq单机搭建完成。</p><h1 id="rocketmq控制台搭建" tabindex="-1"><a class="header-anchor" href="#rocketmq控制台搭建" aria-hidden="true">#</a> RocketMQ控制台搭建</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### 1、下载https://github.com/apache/rocketmq-externals

### 2、进入rocketmq-console目录。编译打包
mvn clean package -Dmaven.test.skip=true

PS:这里有两个问题，需要修改下。
1、pom.xml配置文件
&lt;rocketmq.version&gt;4.4.0-SNAPSHOT&lt;/rocketmq.version&gt;
改为
&lt;rocketmq.version&gt;4.4.0&lt;/rocketmq.version&gt;
2、appliction.proerties(指定IP)
rocketmq.config.namesrvAddr=127.0.0.1:9876

修改完成后，打包以jar-方式启动即可。访问http://localhost:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function o(u,b){return r(),s("div",null,[t,c,v,a("more"),m])}const g=n(d,[["render",o],["__file","0.rockerMq单机搭建.html.vue"]]);export{g as default};

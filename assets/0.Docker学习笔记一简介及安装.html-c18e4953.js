import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as s,f as a,a as e,e as n,b as r}from"./app-ef0b4d9d.js";const l="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-189502e8.png",c="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663225045355-227-76574028.png",t="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663225047210-230-4cc356b1.png",o="/assets/watermark_type_ZmFuZ3poZW5naGVpdGk_shadow_10_text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2_size_16_color_FFFFFF_t_70-1663225050781-233-a12b555e.png",m={},v=e("h2",{id:"docker-简介及安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-简介及安装","aria-hidden":"true"},"#"),n(" Docker 简介及安装")],-1),u=r('<h3 id="docker-是什么" tabindex="-1"><a class="header-anchor" href="#docker-是什么" aria-hidden="true">#</a> docker 是什么</h3><p>Docker 是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署，包括 VMs（虚拟机）、bare metal、OpenStack 集群和其他的基础应用平台。<br> 总结：</p><ol><li><p>docker 是一个开源的软件部署解决方案</p></li><li><p>docker 也是轻量级的应用容器框架</p></li><li><p>docker 可以打包、发布、运行任何的应用</p><blockquote></blockquote></li></ol><h3 id="docker-使用场景" tabindex="-1"><a class="header-anchor" href="#docker-使用场景" aria-hidden="true">#</a> docker 使用场景</h3><p>docker 在 devops 体系、微服务应用中的地位至关重要，使用场景有：</p><ol><li>应用自动化打包、发布</li><li>自动化测试和持续集成、发布</li><li>微服务快速扩容伸缩</li></ol><h3 id="docker-优点" tabindex="-1"><a class="header-anchor" href="#docker-优点" aria-hidden="true">#</a> docker 优点</h3><ul><li><p>跨平台可移植性：按统一标准打包（镜像中），可传播。</p></li><li><p>面向应用：优化部署应用（设计哲学）→ API，接口及文档（体现）。</p></li><li><p>版本控制：追踪、查询、记录版本信息（应用程序更改史）和回滚版本等</p></li><li><p>组件复用：组件式搭建（基础镜像）→ Python(运行环境) | postgreasql(基础镜像)。</p></li><li><p>共享性：公共的注册服务器（可免费下载源码）。</p></li></ul><h3 id="docker-与-vm-比较" tabindex="-1"><a class="header-anchor" href="#docker-与-vm-比较" aria-hidden="true">#</a> docker 与 VM 比较</h3><p>在这里引用 docker 官网文档的一组图片来比较一下 docker 和 VM 之间的区别。容器是应用层的抽象，它将代码和依赖关系打包在一起。多个容器可以在同一台机器上运行，并与其他容器共享操作系统内核，每个容器在用户空间中作为独立进程运行。容器占用的空间比 VM 少（容器映像的大小通常为几十 MB），启动速度也比 VM 快很多，可以处理更多的应用程序，并且需要更少的 VM 和操作系统。虚拟机（VM）是物理硬件的抽象，将一台服务器转变为多台服务器。管理程序允许多台 VM 在单台机器上运行。每个 VM 都包含操作系统的完整副本，应用程序，必要的二进制文件和库，一般占用数十 GB。</p><p><img src="'+l+`" alt="虚拟机" loading="lazy"></p><p><img src="https://img-blog.csdnimg.cn/20190901115244953.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" loading="lazy"></p><h3 id="centos-安装-docker" tabindex="-1"><a class="header-anchor" href="#centos-安装-docker" aria-hidden="true">#</a> CentOS 安装 docker</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装docker
yum install docker-io -y
#启动docker
service docker start  或者 systemctl start docker
#设置开启自启动
sudo systemctl enable docker
#查看是否启动成功
docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有 client 和 service 两部分表示 docker 安装启动都成功了<br><img src="https://img-blog.csdnimg.cn/20190901120617587.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" loading="lazy"><br> 至此，docker 已经安装启动完成。</p><h3 id="docker-常用命令" tabindex="-1"><a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a> docker 常用命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看镜像
docker images

REPOSITORY：表示镜像的仓库源
TAG：镜像的标签
IMAGE ID：镜像ID
CREATED：镜像创建时间
SIZE：镜像大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190901121200442.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看正在运行的容器
docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190901120956566.png" alt="在这里插入图片描述" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#docker拉取镜像
docker pull ubuntu:13.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/2019090112150615.png" alt="在这里插入图片描述" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#docker查找镜像
docker search httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20190901121753913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNjgwMTM2,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#启动镜像
docker run -d --privileged=true -p 6380:6379 -v /usr/docker/redis/conf/redis-6380.conf:/etc/redis/redis.conf -v /usr/docker/redis/data:/data --name redistslave-3 857c4ab5f029 redis-server /etc/redis/redis.conf --appendonly yes
参数详解：
--privileged=true  容器内的root拥有真正root权限，否则容器内root只是外部普通用户权限
-v/usr/docker/redis/conf/redis-6379.conf:/etc/redis/redis.conf 映射配置文件
redis-server /etc/redis/redis-6381.conf 配置文件方式启动
--appendonly yes 数据持久化

#重启镜像
docker restart CONTAINER ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-加速" tabindex="-1"><a class="header-anchor" href="#docker-加速" aria-hidden="true">#</a> docker 加速</h3><p>由于 docker 拉取镜像默认使用的官网仓库，需要翻墙，速度会比较慢，可以使用阿里云进行加速。</p><ol><li>进入阿里云容器镜像服务<br><img src="`+c+'" alt="在这里插入图片描述" loading="lazy"><br> 2、使用加速服务<br><img src="'+t+`" alt="在这里插入图片描述" loading="lazy"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;your address&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战-docker-部署-mysql" tabindex="-1"><a class="header-anchor" href="#实战-docker-部署-mysql" aria-hidden="true">#</a> 实战-docker 部署 MySQL</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#拉取镜像
docker pull mysql:5.6
#启动
docker run -p 3306:3306 --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.6
-p 3306:3306：将容器的 3306 端口映射到主机的 3306 端口。

-v $PWD/conf:/etc/mysql/conf.d：将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。

-v $PWD/logs:/logs：将主机当前目录下的 logs 目录挂载到容器的 /logs。

-v $PWD/data:/var/lib/mysql ：将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。

-e MYSQL_ROOT_PASSWORD=123456：初始化 root 用户的密码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="在这里插入图片描述" loading="lazy"><br> 至此，MySQL 启动成功。</p><p>![[Pasted image 20230716151737.png]]</p>',33);function p(b,_){return d(),s("div",null,[v,a("more"),u])}const h=i(m,[["render",p],["__file","0.Docker学习笔记一简介及安装.html.vue"]]);export{h as default};

import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as d,a as n,e as s,d as r,b as e}from"./app-ef0b4d9d.js";const t={},o=e(`<h2 id="centos安装" tabindex="-1"><a class="header-anchor" href="#centos安装" aria-hidden="true">#</a> Centos安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#按照依赖</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

<span class="token comment">#配置yum源（比较慢,不用）</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment">#配置yum源 使用国内的</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment">#查看版本</span>
yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

<span class="token comment">#1. 安装docker</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-20.10.10-3.el7

<span class="token comment">#2. 查看docker版本</span>
<span class="token function">docker</span> <span class="token parameter variable">-v</span>

<span class="token comment">#3. 启动docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment">#4. 查看docker 启动状态</span>
systemctl status <span class="token function">docker</span>

检查安装结果。
<span class="token function">docker</span> info

启动使用Docker
systemctl start <span class="token function">docker</span>     <span class="token comment">#运行Docker守护进程</span>
systemctl stop <span class="token function">docker</span>      <span class="token comment">#停止Docker守护进程</span>
systemctl restart <span class="token function">docker</span>   <span class="token comment">#重启Docker守护进程</span>

<span class="token function">docker</span> ps查看容器
<span class="token function">docker</span> stop 容器id

修改镜像仓库
<span class="token function">vim</span> /etc/docker/daemon.json

<span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/docker/daemon.json<span class="token operator">&lt;&lt;</span><span class="token string">EOF 
{
&quot;debug&quot;:true,&quot;experimental&quot;:true,
&quot;registry-mirrors&quot;:[&quot;https://pb5bklzr.mirror.aliyuncs.com&quot;,&quot;https://hub-mirror.c.163.com&quot;,&quot;https://docker.mirrors.ustc.edu.cn&quot;]
}
EOF</span>



<span class="token comment">#查看信息</span>
<span class="token function">docker</span> info

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="centos7-arm离线安装" tabindex="-1"><a class="header-anchor" href="#centos7-arm离线安装" aria-hidden="true">#</a> Centos7 Arm离线安装</h2>`,3),m={href:"https://download.docker.com/linux/static/stable/",target:"_blank",rel:"noopener noreferrer"},v=e(`<p><img src="https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220628152953.png" alt="" loading="lazy"></p><p>以docker-20.10.1.tgz为例，执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>上传压缩到/tmp目录
## 解压
cd /tmp &amp;&amp; tar xzvf docker-20.10.1.tgz

## 将文件copy到/usr/bin
cp docker/* /usr/bin/

##启动docker
sudo dockerd &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(p,b){const a=c("ExternalLinkIcon");return l(),d("div",null,[o,n("p",null,[s("下载稳定安装包："),n("a",m,[s("下载地址"),r(a)])]),v])}const f=i(t,[["render",u],["__file","7.Docker安装.html.vue"]]);export{f as default};

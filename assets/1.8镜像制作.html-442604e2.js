import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,b as a}from"./app-ef0b4d9d.js";const i={},t=a(`<h2 id="arm-jdk1-8镜像制作" tabindex="-1"><a class="header-anchor" href="#arm-jdk1-8镜像制作" aria-hidden="true">#</a> ARM jdk1.8镜像制作</h2><ul><li><p>首先找一个centos7的基础镜像，并肩jdk安装包复制进去。启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --name=mycentos centos

docker cp /data/yl/arm_centos_jdk1.8/jdk-8u151-linux-arm64-vfp-hflt.tar.gz mycentos:/usr/local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器解压。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xvzf jdk-8u151-linux-arm64-vfp-hflt.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑/etc/profile文件，在最后加入（如果是在Dockerfile中，\\变量前加占位符）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export JAVA_HOME=/usr/local/jdk1.8.0_151
export PATH=$JAVA_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新配置文件 source /etc/profile,使用java -version命令验证是否安装成功，将正在运行的容器打包成一个新的镜像。</p></li></ul><h2 id="通用dockerfile模板" tabindex="-1"><a class="header-anchor" href="#通用dockerfile模板" aria-hidden="true">#</a> 通用Dockerfile模板</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> openjdk:8-jre-slim</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> xuxueli</span>

<span class="token instruction"><span class="token keyword">ENV</span> PARAMS=<span class="token string">&quot;&quot;</span></span>

<span class="token instruction"><span class="token keyword">ENV</span> TZ=PRC</span>
<span class="token instruction"><span class="token keyword">RUN</span> ln -snf /usr/share/zoneinfo/<span class="token variable">$TZ</span> /etc/localtime &amp;&amp; echo <span class="token variable">$TZ</span> &gt; /etc/timezone</span>

<span class="token instruction"><span class="token keyword">ADD</span> target/xxl-job-admin-*.jar /app.jar</span>

<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;sh&quot;</span>,<span class="token string">&quot;-c&quot;</span>,<span class="token string">&quot;java -jar $JAVA_OPTS /app.jar $PARAMS&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function r(d,c){return n(),s("div",null,l)}const u=e(i,[["render",r],["__file","1.8镜像制作.html.vue"]]);export{u as default};

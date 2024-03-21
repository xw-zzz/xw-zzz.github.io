import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as d,a as e,e as n,b as l}from"./app-ef0b4d9d.js";const r={},v=e("h2",{id:"简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),n(" 简介")],-1),c=e("p",null,[n("docker-compose：是一个用于定义和运行多容器 Docker 的应用程序工具，可以帮助我们可以轻松、高效的管"),e("br"),n(" 理容器")],-1),o=l(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ol><li><p>安装 pip 工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> python-pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装 docker-compose</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple docker-compose<span class="token operator">==</span><span class="token number">1.24</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>#查看安装版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>首先编写一个最简单的 docker-compose.yml,代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
   grafana:
     image: grafana/grafana
~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose 常见命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 后台启动容器
docker-compose up -d

#查看容器运行情况
docker-compose ps

#停止并删除容器
docker-compose down

#停止并删除容器并删除volume
docker-compose down --volumes

# 停止启动容器
docker-compose start
docker-compose stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附一个模板：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;2&#39;
services:
    gogs:
      container_name: gogs_it513
      image: &#39;gogs/gogs:latest&#39;
      ports:
        - &quot;20022:20022&quot;
        - &quot;23000:3000&quot;
      volumes:
        - /volume3/docker/gogs/data:/data
        - /volume3/docker/gogs/app:/app
      networks:
        web:
          ipv4_address: 192.168.2.1
      dns: 192.168.1.1
      environment:
        TZ: &#39;Asia/Shanghai&#39;
      restart: always
    mysql:
      container_name: mysql_it513
      image: &#39;mysql:5.7.25&#39;
      ports:
        - &quot;23306:3306&quot;
      volumes:
        - /volume3/docker/mysql/data:/var/lib/mysql
        - /volume3/docker/mysql/logs:/var/log/mysql
      networks:
        web:
          ipv4_address: 192.168.2.2
      environment:
        MYSQL_ROOT_PASSWORD: mysql@it513
        TZ: &#39;Asia/Shanghai&#39;
      restart: always
networks:
  web:
    driver: &#39;bridge&#39;
    ipam:
      config:
        - subnet: 192.168.2.0/24
          gateway: 192.168.2.254
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(u,t){return i(),a("div",null,[v,c,d("more"),o])}const g=s(r,[["render",m],["__file","6.Docker学习笔记四Dockercompose使用.html.vue"]]);export{g as default};

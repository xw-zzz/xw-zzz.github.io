import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as a}from"./app-ef0b4d9d.js";const d="/assets/20220621093041-16dc9c3b.png",s={},r=a(`<h1 id="docker版" tabindex="-1"><a class="header-anchor" href="#docker版" aria-hidden="true">#</a> Docker版</h1><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><ul><li><p>系统版本：CentOS 7</p></li><li><p>Docker 版本：1.13</p></li><li><p>Zabbix 版本：6.0 alpha5</p></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install docker

## 启动并设置开机启动
systemctl start docker &amp;&amp; systemctl enable docker 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-zabbix-所需子网" tabindex="-1"><a class="header-anchor" href="#创建-zabbix-所需子网" aria-hidden="true">#</a> 创建 zabbix 所需子网</h3><p><strong>网段请自己规划</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network create --subnet 172.20.0.0/16 --ip-range 172.20.240.0/20 zabbix-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建mysql-docker容器" tabindex="-1"><a class="header-anchor" href="#创建mysql-docker容器" aria-hidden="true">#</a> 创建mysql docker容器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name mysql-server -t \\
      -v /data/mysql/data:/var/lib/mysql 
      -e MYSQL_DATABASE=&quot;zabbix&quot; \\
      -e MYSQL_USER=&quot;zabbix&quot; \\
      -e MYSQL_PASSWORD=&quot;tidu@666&quot; \\
      -e MYSQL_ROOT_PASSWORD=&quot;tidu@666&quot; \\
      --network=host \\
      -d mysql:8.0 \\
      --character-set-server=utf8 --collation-server=utf8_bin \\
      --default-authentication-plugin=mysql_native_password 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建zabbix-server容器" tabindex="-1"><a class="header-anchor" href="#创建zabbix-server容器" aria-hidden="true">#</a> 创建zabbix Server容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name zabbix-server-mysql -t \\
      -e DB_SERVER_HOST=&quot;mysql-server&quot; \\
      -e MYSQL_DATABASE=&quot;zabbix&quot; \\
      -e MYSQL_USER=&quot;zabbix&quot; \\
      -e MYSQL_PASSWORD=&quot;tidu@666&quot; \\
      -e MYSQL_ROOT_PASSWORD=&quot;tidu@666&quot; \\
      --network=host \\
      -p 10051:10051 \\
      --restart unless-stopped \\
      -d zabbix/zabbix-server-mysql:alpine-6.0.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建zabbix前端容器" tabindex="-1"><a class="header-anchor" href="#创建zabbix前端容器" aria-hidden="true">#</a> 创建zabbix前端容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name zabbix-web-nginx-mysql -t \\
      -e ZBX_SERVER_HOST=&quot;127.0.0.1&quot; \\
      -e DB_SERVER_HOST=&quot;127.0.0.1&quot; \\
      -e MYSQL_DATABASE=&quot;zabbix&quot; \\
      -e MYSQL_USER=&quot;zabbix&quot; \\
      -e MYSQL_PASSWORD=&quot;tidu@666&quot; \\
      -e MYSQL_ROOT_PASSWORD=&quot;tidu@666&quot; \\
      -v /data/zabbix/icon-sprite.svg:/usr/share/zabbix/assets/img/icon-sprite.svg \\
      --network=host \\
      --restart unless-stopped \\
      -d zabbix/zabbix-web-nginx-mysql:alpine-6.0.5
      
      
docker run --name zabbix-web-nginx-mysql -t \\
      -e ZBX_SERVER_HOST=&quot;10.0.4.13&quot; \\
      -e DB_SERVER_HOST=&quot;10.0.4.13&quot; \\
      -e MYSQL_DATABASE=&quot;zabbix&quot; \\
      -e MYSQL_USER=&quot;zabbix&quot; \\
      -e MYSQL_PASSWORD=&quot;tidu@666&quot; \\
      -e MYSQL_ROOT_PASSWORD=&quot;tidu@666&quot; \\
      
      -p 8888:8080 \\
      --restart unless-stopped \\
      -d zabbix/zabbix-web-nginx-mysql:alpine-6.0.5      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置中文和时区" tabindex="-1"><a class="header-anchor" href="#设置中文和时区" aria-hidden="true">#</a> 设置中文和时区</h3><p><img src="`+d+'" alt="" loading="lazy"></p><h3 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h3><p>地址:所在服务器IP</p><p>用户名/密码: Admin/zabbix</p>',20),l=[r];function t(u,b){return i(),n("div",null,l)}const o=e(s,[["render",t],["__file","9.zabbix部署.html.vue"]]);export{o as default};

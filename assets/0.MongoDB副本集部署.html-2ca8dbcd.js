import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,b as a}from"./app-ef0b4d9d.js";const d={},s=a(`<h1 id="mongodb副本集部署" tabindex="-1"><a class="header-anchor" href="#mongodb副本集部署" aria-hidden="true">#</a> MongoDB副本集部署</h1><h2 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署" aria-hidden="true">#</a> docker部署</h2><ol><li><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/mongo/data1
 <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/mongo/data2
 <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/mongo/data3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name mongo1 -v /data/mongo/data1:/data/db -d  -p 27117:27017 mongo:4.0.6 --replSet ms
docker run --name mongo2 -v /data/mongo/data2:/data/db -d  -p 27217:27017 mongo:4.0.6 --replSet ms
docker run --name mongo3 -v /data/mongo/data3:/data/db -d  -p 27317:27017 mongo:4.0.6 --replSet ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置</p><p>随便进入一个容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> docker exec -it mongo1 bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入mongo命令，执行一下语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 添加配置
config={_id:&quot;ms&quot;,members:[{_id:0,host:&quot;124.223.63.123:27117&quot;, priority:1},{_id:1,host:&quot;124.223.63.123:27217&quot;, priority:0.5},{_id:2,host:&quot;124.223.63.123:27317&quot;, priority:0.8}]}

## 初始化
rs.initiate(config);

## 查看状态
rs.status();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置权限</p><p>去主节点添加用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it mongo1 bash

mongo

use admin

db.createUser({user: &quot;admin&quot;,pwd: &quot;password&quot;,roles: [ { role: &quot;root&quot;, db: &quot;admin&quot; } ]})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建keyfile并授权</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 创建文件
mkdir -p /data/mongo/config

## 创建keyfile
openssl rand -base64 741 &gt;  /data/mongo/config/mongodb.key

chmod 600 /data/mongo/config/mongodb.key
## 授权
chown 999  /data/mongo/config/mongodb.key 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启docker服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm -f mongo1
docker rm -f mongo2
docker rm -f mongo3

docker run --name mongo1 -v /data/mongo/data1:/data/db -v /data/mongo/config/mongodb.key:/mongodb.key -d -p 27117:27017 mongo:4.0.6 --replSet ms --keyFile=mongodb.key --auth

docker run --name mongo2 -v /data/mongo/data2:/data/db -v /data/mongo/config/mongodb.key:/mongodb.key -d -p 27217:27017 mongo:4.0.6 --replSet ms --keyFile=mongodb.key --auth

docker run --name mongo3 -v /data/mongo/data3:/data/db -v /data/mongo/config/mongodb.key:/mongodb.key -d -p 27317:27017 mongo:4.0.6 --replSet ms --keyFile=mongodb.key --auth


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>keyFile几个注意点：</p><ol><li>权限不能太大，不然会报“permissions on xxx are too open”</li><li>权限不能太小，不然会报“permission denied”</li></ol><p>从节点添加可读权限：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongo
rs.slaveOk()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-boot连接配置" tabindex="-1"><a class="header-anchor" href="#spring-boot连接配置" aria-hidden="true">#</a> Spring Boot连接配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  data&quot;
    mongodb:
      uri:mongodb://180.76.159.126:27017,180.76.159.126:27018,180.76.159.126:27019/article db?connect=replicaSet&amp;slaveOk=true&amp;replicaSet=myrs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式：mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]] [/[database][?options]]</p><ul><li>mongodb:// 固定的格式，必须指定</li><li>username:password@可选项</li><li>host1 必须指定一个host</li><li>port1 连接端口，默认27017</li><li>/database 连接的数据库</li></ul><p>连接选项：</p><ul><li><p>replicaSet=name，验证replica set的名称。 Impliesconnect=replicaSet.</p></li><li><p>slaveOk=true|false，true:在connect=direct模式下，驱动会连接第一台机器，即使这台服务器不是主。在connect=replicaSet模式下，驱动会发送所有的写请求到主并且把读取操作分布在其他从服务器。false: 在connect=direct模式下，驱动会自动找寻主服务器. 在connect=replicaSet 模式下，驱动仅仅连接主服务器，并且所有的读写命令都连接到主服务器。</p></li><li><p>safe=true|false，true: 在执行更新操作之后，驱动都会发送getLastError命令来确保更新成功。(还要参考 wtimeoutMS).false: 在每次更新之后，驱动不</p><p>会发送getLastError来确保更新成功。</p></li></ul></li></ol><p>​</p>`,4),o=[s];function l(r,t){return n(),i("div",null,o)}const v=e(d,[["render",l],["__file","0.MongoDB副本集部署.html.vue"]]);export{v as default};

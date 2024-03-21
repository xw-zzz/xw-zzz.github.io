import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,b as n}from"./app-ef0b4d9d.js";const i={},r=n(`<h2 id="mysql8" tabindex="-1"><a class="header-anchor" href="#mysql8" aria-hidden="true">#</a> Mysql8</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span><span class="token operator">=</span>mysql <span class="token parameter variable">-v</span> /home/mysql/data:/usr/mysql/data <span class="token parameter variable">-v</span> /home/mysql/log:/var/log/mysql <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> mysql:8.0.27


REWGDSDWJQOGsjifdsgswdwqsadsw1113444

<span class="token comment">## 设置连接数</span>
show variables like <span class="token string">&#39;%max_connections%&#39;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">set</span> GLOBAL <span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">5000</span><span class="token punctuation">;</span>
<span class="token builtin class-name">set</span> GLOBAL <span class="token assign-left variable">mysqlx_max_connections</span><span class="token operator">=</span><span class="token number">5000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -itd --name redis1 -p 6379:6379 -v /mydata/redis/data:/data redis:6.2.4 --requirepass 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> Nacos</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
-e NACOS_AUTH_ENABLE=true \\
-e MODE=standalone \\
-e JVM_XMS=128m \\
-e JVM_XMX=128m \\
-e JVM_XMN=128m \\
-p 8848:8848 \\
-e SPRING_DATASOURCE_PLATFORM=mysql \\
-e MYSQL_SERVICE_HOST=127.0.0.1 \\
-e MYSQL_SERVICE_PORT=3306 \\
-e MYSQL_SERVICE_USER=root \\
-e MYSQL_SERVICE_PASSWORD=123456 \\
-e MYSQL_SERVICE_DB_NAME=nacos_config \\
-e MYSQL_SERVICE_DB_PARAM=&#39;characterEncoding=utf8&amp;connectTimeout=2000&amp;allowPublicKeyRetrieval=true&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=UTC&#39; \\
--restart=always \\
--privileged=true \\
-v /home/data/nacos/logs:/home/nacos/logs \\
--name nacos \\
--network=host \\
nacos/nacos-server:2.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单机es" tabindex="-1"><a class="header-anchor" href="#单机es" aria-hidden="true">#</a> 单机ES</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span><span class="token operator">=</span>es <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span> <span class="token parameter variable">-v</span> /data/elasticsearch/data:/usr/share/elasticsearch/data docker.elastic.co/elasticsearch/elasticsearch:7.14.1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="zk" tabindex="-1"><a class="header-anchor" href="#zk" aria-hidden="true">#</a> zk</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token parameter variable">-t</span> wurstmeister/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> kafka</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name kafka --restart=always \\
-p 9092:9092 \\
-e KAFKA_BROKER_ID=0 \\
--env KAFKA_HEAP_OPTS=-Xmx256M \\
--env KAFKA_HEAP_OPTS=-Xms128M \\
-e KAFKA_ZOOKEEPER_CONNECT=192.168.0.110:2181 \\
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.110:9092 \\
-e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 wurstmeister/kafka:2.13-2.7.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka集群" tabindex="-1"><a class="header-anchor" href="#kafka集群" aria-hidden="true">#</a> kafka集群</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name kafka --restart=always \\
-p 9092:9092 \\
-e KAFKA_BROKER_ID=0 \\
--env KAFKA_HEAP_OPTS=-Xmx512M \\
--env KAFKA_HEAP_OPTS=-Xms512M \\
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.199:2181 \\
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.197:9092 \\
-e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 wurstmeister/kafka:2.12-2.4.0

docker run -d --name kafka --restart=always \\
-p 9092:9092 \\
-e KAFKA_BROKER_ID=1 \\
--env KAFKA_HEAP_OPTS=-Xmx512M \\
--env KAFKA_HEAP_OPTS=-Xms512M \\
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.199:2181 \\
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.198:9092 \\
-e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 wurstmeister/kafka:2.12-2.4.0


docker run -d --name kafka --restart=always \\
-p 9092:9092 \\
-e KAFKA_BROKER_ID=2 \\
--env KAFKA_HEAP_OPTS=-Xmx512M \\
--env KAFKA_HEAP_OPTS=-Xms512M \\
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.199:2181 \\
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.199:9092 \\
-e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 wurstmeister/kafka:2.12-2.4.0

docker run -d --name=kafka-manager --network=host \\
     -p 9000:9000  \\
     -e ZK_HOSTS=&quot;192.168.1.199:2181&quot; \\
     hlebalbau/kafka-manager:stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka-manager" tabindex="-1"><a class="header-anchor" href="#kafka-manager" aria-hidden="true">#</a> kafka manager</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> kafka-manager <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">-e</span> <span class="token assign-left variable">ZK_HOSTS</span><span class="token operator">=</span><span class="token number">192.168</span>.1.199:2181 sheepkiller/kafka-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常见命令" tabindex="-1"><a class="header-anchor" href="#常见命令" aria-hidden="true">#</a> 常见命令</h3><ul><li>创建topic： <code>docker exec -it kafka kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic Shakespeare</code></li><li>查看topic详情：<code>docker exec -it kafka kafka-topics.sh --list --bootstrap-server localhost:9092 --topic Shakespeare</code></li><li>查询topic列表: <code>docker exec -it kafka kafka-topics.sh --list --bootstrap-server localhost:9092</code></li><li>发送消息： <code>docker exec -it kafka kafka-console-producer.sh --broker-list localhost:9092 --topic Shakespeare</code></li><li>消费消息: <code>docker exec -it kafka kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic Shakespeare --from-beginning</code></li></ul><h2 id="clickhouse" tabindex="-1"><a class="header-anchor" href="#clickhouse" aria-hidden="true">#</a> Clickhouse</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /data/clickhouse &amp;&amp; chmod-R 777 /data/clickhouse

docker run -d --name clickhouse --ulimit nofile=262144:262144 \\
-p 8123:8123 -p 9000:9000 -p 9009:9009 --privileged=true \\
-v /data/clickhouse/log:/var/log/clickhouse-server \\
-v /data/clickhouse/data:/var/lib/clickhouse clickhouse/clickhouse-server:22.2.3.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMq</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --restart=always --name rabbit -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=password rabbitmq:3-management

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job" aria-hidden="true">#</a> XXL-Job</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -e PARAMS=&quot;--spring.datasource.url=jdbc:mysql://127.0.0.1:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai&quot; -p 8080:8080 -v /tmp:/data/applogs --name xxl-job-admin  -d xuxueli/xxl-job-admin:2.3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> Minio</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /mnt/data  /mnt/config
chmod -R 777 /mnt/data  /mnt/config
 docker run -d -p 9000:9000 -p 50000:50000 --name minio1 -e &quot;MINIO_ACCESS_KEY=minioadmin&quot; -e &quot;MINIO_SECRET_KEY=minioadmin&quot; -v /mnt/data:/data -v /mnt/config:/root/.minio minio/minio server --console-address &quot;:50000&quot; /data

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[r];function d(t,c){return e(),s("div",null,l)}const m=a(i,[["render",d],["__file","8.Docker安装常见应用.html.vue"]]);export{m as default};

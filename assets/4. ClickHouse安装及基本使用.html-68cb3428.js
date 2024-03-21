import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,a as n,e as s,d as e,b as t}from"./app-ef0b4d9d.js";const o="/assets/20220722150712-4ba08c36.png",u="/assets/20220722150643-b30e37df.png",r="/assets/20220722164227-6d2916e2.png",d={},k=t(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><h2 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署" aria-hidden="true">#</a> Docker部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 创建挂载目录并授权
mkdir -p /data/clickhouse &amp;&amp; chmod -R 777 /data/clickhouse

## 启动
docker run -d --name clickhouse --ulimit nofile=262144:262144 \\
-p 8123:8123 -p 9000:9000 -p 9009:9009 --privileged=true \\
-v /data/clickhouse/log:/var/log/clickhouse-server \\
-v /data/clickhouse/data:/var/lib/clickhouse clickhouse/clickhouse-server:22.2.3.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=n("li",null,"默认http端口是8123，tcp端口是9000, 同步端口9009",-1),m={href:"http://xn--IP-im8ckc:8123/play",target:"_blank",rel:"noopener noreferrer"},b=t(`<h1 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h1><ul><li><p>整型</p></li><li><p>固定长度的整型(Int8、Int16、Int32、Int64、Int128、Int256、UInt8、UInt16、UInt32、UInt64、UInt128)</p></li><li><p>浮点型（Float32 、Float64）</p></li><li><p>Decimal类型，Decimal(10,2) 小数部分2位，整数部分 8位（10-2)</p></li><li><p>UUID，通用唯一标识符(UUID)是由一组32位数的16进制数字所构成，用于标识记录</p></li><li><p>String 字符串类型</p></li><li><p>FixedString固定字符串类型（相对少用），FixedString(5)指长度为5</p></li><li><p>时间类型</p><ul><li>Date，日期类型，用两个字节存储，表示从 1970-01-01 (无符号) 到当前的日期值，支持字符串形式写入</li><li>DateTime，时间戳类型。用四个字节（无符号的）存储 Unix 时间戳，支持字符串形式写入</li><li>DateTime64，此类型允许以日期（date）加时间（time）的形式来存储一个时刻的时间值，具有定义的亚秒精度</li></ul></li><li><p>枚举，包括 <code>Enum8</code> 和 <code>Enum16</code> 类型，<code>Enum</code> 保存 <code>&#39;string&#39;= integer</code> 的对应关系。</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE t_enum
(
    page_code Enum8(&#39;home&#39; = 1, &#39;detail&#39; = 2,&#39;pay&#39;=3)
)
ENGINE = TinyLog

INSERT INTO t_enum VALUES (&#39;home&#39;), (&#39;detail&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>布尔值，可以使用 UInt8 类型，取值限制为 0 或 1，新增里面新增了Bool。</p></li></ul><h1 id="常用语法" tabindex="-1"><a class="header-anchor" href="#常用语法" aria-hidden="true">#</a> 常用语法</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 删除数据库
DROP DATABASE xw
## 创建数据库
CREATE  DATABASE xw

#建表语句
CREATE TABLE xw.test (
    customer_id String, 
    time_stamp Date, 
    click_event_type String,
    page_code FixedString(20),  
    source_id UInt64,
    money Decimal(2,1),
    is_new Bool
) 
ENGINE = MergeTree()
ORDER BY (time_stamp)

## 查看表结构
DESCRIBE table test 

## 插入数据
INSERT INTO xw.test
VALUES (&#39;customer2&#39;, &#39;2021-10-02&#39;, &#39;add_to_cart&#39;, &#39;home_enter&#39;, 568239,2.1, False ) 

##查询数据
select * from test

## 更新
ALTER TABLE xw.test UPDATE  click_event_type = &#39;pay&#39; where customer_id = &#39;customer2&#39;; 

##删除
ALTER TABLE xw.test delete where customer_id = &#39;customer2&#39;; 

## 更新和删除是异步操作，可通过下面这个语句查询执行情况
SELECT database, table, command, create_time, is_done FROM system.mutations LIMIT 20


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新和删除不支持事务，建议批量操作，不要高频率小数据量更新删除。</li></ul><h1 id="引擎" tabindex="-1"><a class="header-anchor" href="#引擎" aria-hidden="true">#</a> 引擎</h1>`,6),g={href:"https://clickhouse.com/docs/zh/engines/table-engines/mergetree-family/replication#table_engines-replication",target:"_blank",rel:"noopener noreferrer"},_={href:"https://clickhouse.com/docs/zh/engines/table-engines/log-family/",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"集成引擎。用于与其他的数据存储与处理系统集成的引擎，包括kafka、Mysql、ODBC、JDBC、HDFS",-1),E=n("h2",{id:"replacemergetree",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#replacemergetree","aria-hidden":"true"},"#"),s(" ReplaceMergeTree")],-1),x={href:"https://clickhouse.com/docs/zh/engines/table-engines/mergetree-family/mergetree",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>db<span class="token punctuation">.</span><span class="token punctuation">]</span>table_name <span class="token punctuation">[</span><span class="token keyword">ON</span> CLUSTER cluster<span class="token punctuation">]</span>
<span class="token punctuation">(</span>
    name1 <span class="token punctuation">[</span>type1<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span><span class="token operator">|</span>MATERIALIZED<span class="token operator">|</span>ALIAS expr1<span class="token punctuation">]</span><span class="token punctuation">,</span>
    name2 <span class="token punctuation">[</span>type2<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span><span class="token operator">|</span>MATERIALIZED<span class="token operator">|</span>ALIAS expr2<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> ReplacingMergeTree<span class="token punctuation">(</span><span class="token punctuation">[</span>ver<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> expr<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> expr<span class="token punctuation">]</span>
<span class="token punctuation">[</span>SAMPLE <span class="token keyword">BY</span> expr<span class="token punctuation">]</span>
<span class="token punctuation">[</span>SETTINGS name<span class="token operator">=</span><span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>ver</code> — 版本列。类型为 <code>UInt*</code>, <code>Date</code> 或 <code>DateTime</code>。可选参数。</p><p>在数据合并的时候，<code>ReplacingMergeTree</code> 从所有具有相同排序键的行中选择一行留下：</p><ul><li>如果 <code>ver</code> 列未指定，保留最后一条。</li><li>如果 <code>ver</code> 列已指定，保留 <code>ver</code> 值最大的版本。</li></ul></li></ul><p>实践:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> xw<span class="token punctuation">.</span>order_relace_merge_tree<span class="token punctuation">(</span> 
    id UInt32<span class="token punctuation">,</span>
    sku_id String<span class="token punctuation">,</span>
    out_trade_no String<span class="token punctuation">,</span>
    total_amount <span class="token keyword">Decimal</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    create_time <span class="token keyword">Datetime</span>
<span class="token punctuation">)</span> <span class="token keyword">engine</span> <span class="token operator">=</span>ReplacingMergeTree<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token punctuation">(</span>sku_id<span class="token punctuation">)</span>
  <span class="token keyword">partition</span> <span class="token keyword">by</span> toYYYYMMDD<span class="token punctuation">(</span>create_time<span class="token punctuation">)</span> 
  <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>sku_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  
<span class="token keyword">insert</span> <span class="token keyword">into</span> xw<span class="token punctuation">.</span>order_relace_merge_tree <span class="token keyword">values</span> 
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;sku_1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">,</span><span class="token number">5600.00</span><span class="token punctuation">,</span><span class="token string">&#39;2023-03-01 16:00:00&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;sku_2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;23241&#39;</span><span class="token punctuation">,</span><span class="token number">4.02</span><span class="token punctuation">,</span><span class="token string">&#39;2023-03-01 17:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;sku_3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;542323&#39;</span><span class="token punctuation">,</span><span class="token number">55.02</span><span class="token punctuation">,</span><span class="token string">&#39;2023-03-01 18:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;sku_5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;54222&#39;</span><span class="token punctuation">,</span><span class="token number">2000.3</span><span class="token punctuation">,</span><span class="token string">&#39;2023-04-01 19:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&#39;sku_6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;53423&#39;</span><span class="token punctuation">,</span><span class="token number">120.2</span><span class="token punctuation">,</span><span class="token string">&#39;2023-04-01 19:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token string">&#39;sku_7&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;65432&#39;</span><span class="token punctuation">,</span><span class="token number">600.01</span><span class="token punctuation">,</span><span class="token string">&#39;2023-04-02 11:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">insert</span> <span class="token keyword">into</span> xw<span class="token punctuation">.</span>order_relace_merge_tree <span class="token keyword">values</span> 
<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token string">&#39;sku_1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">,</span><span class="token number">5600.00</span><span class="token punctuation">,</span><span class="token string">&#39;2023-03-01 16:00:00&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token string">&#39;sku_2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;23241&#39;</span><span class="token punctuation">,</span><span class="token number">4.02</span><span class="token punctuation">,</span><span class="token string">&#39;2023-03-01 17:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token string">&#39;sku_3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;542323&#39;</span><span class="token punctuation">,</span><span class="token number">55.02</span><span class="token punctuation">,</span><span class="token string">&#39;2023-03-01 18:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">,</span><span class="token string">&#39;sku_5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;54222&#39;</span><span class="token punctuation">,</span><span class="token number">2000.3</span><span class="token punctuation">,</span><span class="token string">&#39;2023-04-01 19:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">51</span><span class="token punctuation">,</span><span class="token string">&#39;sku_8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;53423&#39;</span><span class="token punctuation">,</span><span class="token number">120.2</span><span class="token punctuation">,</span><span class="token string">&#39;2023-04-01 19:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">61</span><span class="token punctuation">,</span><span class="token string">&#39;sku_9&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;65432&#39;</span><span class="token punctuation">,</span><span class="token number">600.01</span><span class="token punctuation">,</span><span class="token string">&#39;2023-04-02 11:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据的去重只会在数据合并期间进行。合并会在后台一个不确定的时间进行，因此你无法预先作出计划。有一些数据可能仍未被处理。尽管可以调用 <code>OPTIMIZE</code> 语句发起计划外的合并，但请不要依靠它，因为 <code>OPTIMIZE</code> 语句会引发对数据的大量读写。。手动合并:<code>optimize table xw.order_relace_merge_tree final;</code></p><p>合并前：</p><p><img src="`+o+'" alt="" loading="lazy"></p><p>合并后数据：</p><p><img src="'+u+`" alt="" loading="lazy"></p><h2 id="summingmergetree" tabindex="-1"><a class="header-anchor" href="#summingmergetree" aria-hidden="true">#</a> SummingMergeTree</h2><p>合并 <code>SummingMergeTree</code> 表的数据片段时，ClickHouse 会把所有具有相同<strong>OrderBy排序键</strong>的行合并为一行，(官网描述为主键，不正确)该行包含了被合并的行中具有数值数据类型的列的汇总值。如果主键的组合方式使得单个键值对应于大量的行，则可以显著的减少存储空间并加快数据查询的速度。</p><p>建表语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]
(
    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],
    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],
    ...
) ENGINE = SummingMergeTree([columns])
[PARTITION BY expr]
[ORDER BY expr]
[SAMPLE BY expr]
[SETTINGS name=value, ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table xw.order_summing_merge_tree( 
    id UInt32,
    sku_id String,
    out_trade_no String,
    total_amount Decimal(16,2), 
    create_time Datetime
) engine =SummingMergeTree(total_amount)
  order by (id,sku_id)
  partition by toYYYYMMDD(create_time) 
  primary key (id);
 
## total_amount 汇总字段
## (id,sku_id) 聚合字段
 
insert into xw.order_summing_merge_tree values 
(1,&#39;sku_1&#39;,&#39;aabbcc&#39;,5600.00,&#39;2023-03-01 16:00:00&#39;) ,
(2,&#39;sku_2&#39;,&#39;23241&#39;,4.02,&#39;2023-03-01 17:00:00&#39;),
(3,&#39;sku_3&#39;,&#39;542323&#39;,55.02,&#39;2023-03-01 18:00:00&#39;), 
(4,&#39;sku_5&#39;,&#39;54222&#39;,2000.3,&#39;2023-04-01 19:00:00&#39;), 
(5,&#39;sku_6&#39;,&#39;53423&#39;,120.2,&#39;2023-04-01 19:00:00&#39;), 
(6,&#39;sku_7&#39;,&#39;65432&#39;,600.01,&#39;2023-04-02 11:00:00&#39;);


insert into xw.order_summing_merge_tree values 
(1,&#39;sku_1&#39;,&#39;aabbccbb&#39;,5600.00,&#39;2023-03-01 23:09:00&#39;)

select sku_id,sum(total_amount) from xw.order_summing_merge_tree group by sku_id


## 手动合并
optimize table xw.order_summing_merge_tree final;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动合并后结果如下,同一分区相同的排序key的被合并了：</p><p><img src="`+r+'" alt="" loading="lazy"></p><ul><li>总结 <ul><li><strong>SummingMergeTree是根据什么对数据进行合并的</strong><ul><li>【ORBER BY排序键相同】作为聚合数据的条件Key的行中的列进行汇总，将这些行替换为包含汇总数据的一行记录</li></ul></li><li><strong>跨分区内的相同排序key的数据是否会进行合并</strong><ul><li>以数据分区为单位来聚合数据，同一数据分区内相同ORBER BY排序键的数据会被合并汇总，而不同分区之间的数据不会被汇总</li></ul></li><li><strong>如果没有指定聚合字段，会怎么聚合</strong><ul><li>如果没有指定聚合字段，则会用非维度列，且是数值类型字段进行聚合</li></ul></li><li><strong>对于非汇总字段的数据，该保留哪一条</strong><ul><li>如果两行数据除了【ORBER BY排序键】相同，其他的非聚合字段不相同，在聚合时会【保留最初】的那条数据，新插入的数据对应的那个字段值会被舍弃</li></ul></li><li>在合并分区的时候按照预先定义的条件聚合汇总数据，将同一分区下的【相同排序】的多行数据汇总合并成一行，既减少了数据行节省空间，又降低了后续汇总查询的开销</li></ul></li></ul>',17);function T(I,w){const a=l("ExternalLinkIcon");return p(),c("div",null,[k,n("ul",null,[v,n("li",null,[n("a",m,[s("http://IP地址:8123/play"),e(a)])])]),b,n("ul",null,[n("li",null,[s("MergeTree（合并数）。适用于高负载任务的最通用和功能最强大的表引擎。这些引擎的共同特点是可以快速插入数据并进行后续的后台数据处理。 MergeTree系列引擎支持数据复制（使用"),n("a",g,[s("Replicated*"),e(a)]),s(" 的引擎版本），分区和一些其他引擎不支持的其他功能。")]),n("li",null,[s("日志。具有最小功能的"),n("a",_,[s("轻量级引擎"),e(a)]),s("。当需要快速写入许多小表（最多约100万行）并在以后整体读取它们时，该类型的引擎是最有效的")]),h]),E,n("p",null,[s("该引擎和 "),n("a",x,[s("MergeTree"),e(a)]),s(" 的不同之处在于它会删除排序键值相同的重复项。")]),y])}const D=i(d,[["render",T],["__file","4. ClickHouse安装及基本使用.html.vue"]]);export{D as default};

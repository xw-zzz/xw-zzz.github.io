import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as e,b as r}from"./app-ef0b4d9d.js";const a={},t=r('<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><ul><li><p>字符串</p></li><li><p>应用场景：验证码、计数器、订单重复提交、用户登录信息、商品详情</p></li><li><p>常用命令</p><ul><li>set/get: 设置和获取keyValue</li><li>mget/mset: 批量设置或获取多个key的值</li><li>incr： 值加1</li><li>incrby: 增加指定数值</li><li>setex：设置值，并指定过期时间。setex key seconds value</li><li>setnx: 不存在就设置值</li></ul></li></ul><h3 id="set-无序集合" tabindex="-1"><a class="header-anchor" href="#set-无序集合" aria-hidden="true">#</a> Set（无序集合）</h3><ul><li>string的无序排列</li><li>应用场景：差集、交集、并集、大数据里面的用户画像标签集合、社交应用里面的共同好友</li><li>命令： <ul><li>sadd：添加一个或多个指定的member元素到集合的key中.指定的一个或者多个元素member如果已经在集合key中存在则忽略，SADD key member</li><li>scard：返回集合元素的数量，SCARD key</li><li>sdiff：返回的集合元素是第一个key的集合与后面所有key的集合的差集</li><li>sinter：返回指定所有的集合的成员的交集，</li><li>sismember：返回成员member是否是存储的集合key的成员.</li><li>srem：溢出指定的元素</li><li>sunion：取并集</li><li>smembers，返回key集合所有的元素</li></ul></li></ul><h3 id="zset-有序集合" tabindex="-1"><a class="header-anchor" href="#zset-有序集合" aria-hidden="true">#</a> Zset(有序集合)</h3><ul><li>使用HashMap+跳表skipList保证数据存储和有序</li><li>应用场景： 商品日销榜、积分榜等</li><li>命令： <ul><li>zadd：添加元素</li><li>zcard：获取有序集合的成员数</li><li>zcount：计算在有序集合中指定分数的集合</li><li>zincrby: 增加有序集合指定成员分布</li><li>zrange：通过索引区间返回有序集合指定区间的成员，分数按照从小到大排序</li><li>zrevrange：ZREVRANGE key start stop [WITHSCORES]，通过索引区间返回有序集合指定区间的成员，分数按照从大到小排序</li><li>zrevrank：ZREVRANK key member，返回有序集合中指定成员的排名，有序集成员按分数值递减（从大到小）排序</li><li>zrank：ZRANK key member，返回有序集key中成员member的排名。其中有序集成员按score值递增（从小到大）顺序排列</li><li>zrem：ZREM key member [member ...，移除有序集合中的一个或多个成员</li><li>zscore，ZSCORE key member，返回有序集中，成员的分数值</li></ul></li></ul><h3 id="bitmap-位图" tabindex="-1"><a class="header-anchor" href="#bitmap-位图" aria-hidden="true">#</a> Bitmap（位图）</h3><ul><li><p>位图不是一种实际的数据类型，而是一组在String类型上定义的面向位的操作。由于字符串是二进制安全的blobs，并且它们的最大长度是512 MB，所以它们适合设置2^32个不同的位。</p></li><li><p>应用场景： 存储与对象id相关联的高效但高性能的布尔信息、实时分析</p></li><li><p>命令：</p><ul><li><p>setbit ：给位图指定位置设置值（只支持0和1），setbit key offset value</p></li><li><p>getbit : 获取值</p></li><li><p>bitcount ：获取数据为1的个数</p></li></ul></li></ul><h3 id="list-列表" tabindex="-1"><a class="header-anchor" href="#list-列表" aria-hidden="true">#</a> List（列表）</h3><ul><li>双向链表，插入删除时间复杂度O(1)快,查找为O(n)慢</li><li>应用场景: 简单队列、最新商品列表、评论列表、消息队列</li><li>命令 <ul><li>lpush：将数据插入头部</li><li>rpop: 移除并获取最后一个元素</li><li>llen: 获取列表长度</li><li>lindex: 通过索引获取指定元素</li><li>lrange: 获取指定范围内的元素，0代表第一个，-1代表所有元素</li><li>rpush：在尾部插入一个元素</li><li>lpop:从头部移除一个元素并获取</li><li>brpop:移除并获取最后一个元素，如果没有值会阻塞直到超时</li><li>lrem：移除元素，可以指定个数</li></ul></li></ul><h3 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog" aria-hidden="true">#</a> HyperLogLog</h3><p>HyperLogLog是一个专门为了计算集合的基数而创建的概率算法，对于一个给定的集合，HyperLogLog可以计算出这个集合的近似基数：近似基数并非集合的实际基数，它可能会比实际的基数小一点或者大一点，但是估算基数和实际基数之间的误差会处于一个合理的范围之内，因此那些不需要知道实际基数或者因为条件限制而无法计算出实际基数的程序就可以把这个近似基数当作集合的基数来使用。</p><p><strong>HyperLogLog的优点在于它计算近似基数所需的内存并不会因为集合的大小而改变，无论集合包含的元素有多少个，HyperLogLog进行计算所需的内存总是固定的，并且是非常少的</strong>。具体到实现上，Redis的每个HyperLogLog只需要使用12KB内存空间，就可以对接近：264个元素进行计数，而算法的标准误差仅为0.81%，因此它计算出的近似基数是相当可信的。</p><ul><li><p>命令</p><ul><li>pfadd key value1 value2 ...：根据给定的元素是否已经进行过计数，PFADD命令可能返回0，也可能返回1,如果给定的所有元素都已经进行过计数，那么PFADD命令将返回0，表示HyperLog-Log计算出的近似基数没有发生变化,如果给定的所有元素都已经进行过计数，那么PFADD命令将返回0，表示HyperLog-Log计算出的近似基数没有发生变化。</li><li>pfcount key：获取到alphabets这个HyperLogLog计算出的近似基数</li><li>pfcount key1 key2：向PFCOUNT传入多个HyperLogLog时，PFCOUNT命令将对所有给定的Hyper-LogLog执行并集计算，然后返回并集HyperLogLog计算出的近似基数</li></ul></li><li><p>应用场景</p><ul><li>大数据去重： 在大数据场景下，需要去重的数据量非常大，如果使用传统的去重算法，需要对每个元素进行存储 和比对，时间和空间消耗非常高。HyperLogLog算法可以在占用极小的空间的情况下，高效地对规模数据进行去重，提高去重效率。</li><li>用户活跃度统计： 在Web应用和移动应用中，需要对用户的活跃度进行统计。如果每个用户的活跃度都进行存储， 需要消耗大量的存储空间。HyperLogLog算法可以在占用极小的空间的情况下，高效地统计活跃 用户数量，提高统计效率。</li><li>网站UV统计： 在Web应用中，需要统计网站每日独立访客数量（即UV），但是由于数据量非常大，不能简单地 直接计数，因为会导致内存不足。HyperLogLog算法可以在占用极小的空间的情况下，高效地对 大规模的访问日志进行去重和统计，提高统计效率。</li><li>社交网络推荐： 在社交网络中，需要对用户的兴趣爱好进行统计，以便向用户推荐相关内容。HyperLogLog算法 可以在占用极小的空间的情况下，高效地对用户行为进行去重和统计，提高推荐效率。</li></ul></li></ul><h2 id="命令图" tabindex="-1"><a class="header-anchor" href="#命令图" aria-hidden="true">#</a> 命令图</h2><p>![Redis command](./img/Redis command-1663676745083-3.png)</p>',17),o=[t];function s(p,n){return l(),e("div",null,o)}const g=i(a,[["render",s],["__file","1.Redis数据类型.html.vue"]]);export{g as default};

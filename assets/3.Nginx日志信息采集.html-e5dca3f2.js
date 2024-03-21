import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as a}from"./app-ef0b4d9d.js";const s={},t=a(`<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>access.log会记录相关信息，根据相关信息可统计很多数据，包括</p><ul><li>查看访问最频的页面、Http响应状态码、接口性能</li><li>统计站点访问ip来源、某个时间段的访问频率</li><li>接口秒级访问量、分钟访问量、小时和天访问量</li><li>。。。。</li></ul><h1 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h1><p>默认的配置解析文件格式为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>220.196.160.73 - - [08/Aug/2022:16:21:29 +0800] &quot;GET /static/css/chunk-vendors.e9e545fd.css HTTP/1.1&quot; 200 7539 &quot;https://file.yangliu97.top/&quot; &quot;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关配置解释说明：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$remote_addr 对应的是真实日志里的220.196.160.73，即客户端的IP。

$remote_user 对应的是第二个中杠“-”，没有远程用户，所以用“-”填充。

［$time_local］对应的是[08/Aug/2022:16:21:29 +0800]。

“$request”对应的是&quot;GET/static/css/chunk-vendors.e9e545fd.css &quot;。

$status对应的是200状态码，200表示正常访问。

$body_bytes_sent对应的是7539字节，即响应body的大小。

## 这个可以用来做盗链判断,如果不是从指定域名访问不显示
$http_referer 对应的是&quot;https://file.yangliu97.top/&quot;，若是直接打开域名浏览的时，referer就会没有值，为-。

$http_user_agent对应的是Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:56.0) Gecko/20100101 Firefox/56.0。

$http_x_forwarded_for 对应的是-或者空。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见访问统计" tabindex="-1"><a class="header-anchor" href="#常见访问统计" aria-hidden="true">#</a> 常见访问统计</h2><ul><li>查看访问最频繁的前100个IP</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;{print $1}&#39; access.log | sort -n |uniq -c | sort -rn | head -n 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>统计访问最多的url 前20名</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat access.log |awk &#39;{print $7}&#39;| sort|uniq -c| sort -rn| head -20 | more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询某个IP的详细访问情况,按访问频率排序</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep &#39;45.148.10.203&#39; access.log |awk &#39;{print $7}&#39;|sort |uniq -c |sort -rn |head -n 100   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看访问100次以上的IP</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;{print $1}&#39; access.log | sort -n |uniq -c |awk &#39;{if($1 &gt;100) print $0}&#39;|sort -rn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看访问最频的页面(TOP100)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;{print $7}&#39; access.log | sort |uniq -c | sort -rn | head -n 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看访问最频的页面(排除php页面，TOP100</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep -v &quot;.php&quot;  access.log | awk &#39;{print $7}&#39; | sort |uniq -c | sort -rn | head -n 100          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看页面访问次数超过100次的页面</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat access.log | cut -d &#39; &#39; -f 7 | sort |uniq -c | awk &#39;{if ($1 &gt; 100) print $0}&#39; | less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>每秒请求量统计</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;{print $4}&#39; access.log |cut -c 14-21|sort|uniq -c|sort -nr|head -n 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>每分钟请求量统计</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;{print $4}&#39; access.log |cut -c 14-18|sort|uniq -c|sort -nr|head -n 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>每小时请求量统计</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>awk &#39;{print $4}&#39; access.log |cut -c 14-15|sort|uniq -c|sort -nr|head -n 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2><ul><li>日志格式增加 <strong>$request_time</strong>，从接受用户请求的第一个字节到发送完响应数据的时间，即包括接收请求数据时间、程序响应时间、输出响应数据时间</li><li>$upstream_response_time，指从Nginx向后端建立连接开始到接受完数据然后关闭连接为止的时间</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>统计耗时接口, 列出传输时间超过 2 秒的接口，显示前5条

cat time_temp.log|awk &#39;($NF &gt; 2){print $7}&#39;|sort -n|uniq -c|sort -nr|head -5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),l=[t];function d(r,u){return i(),n("div",null,l)}const v=e(s,[["render",d],["__file","3.Nginx日志信息采集.html.vue"]]);export{v as default};

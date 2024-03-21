import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,b as n}from"./app-ef0b4d9d.js";const s={},l=n(`<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1><p>负载均衡是分布式系统中一个非常重要的概念，当访问的服务具有多个实例时，需要根据某种“均衡”的策略决定请求发往哪个节点，这就是所谓的负载均衡。</p><h1 id="策略" tabindex="-1"><a class="header-anchor" href="#策略" aria-hidden="true">#</a> 策略</h1><p>Nginx常见的负载均衡策略有：</p><ul><li>节点轮询，每个请求按顺序分配到不同的后端服务器，会造成可靠性低和负载分配不均衡，适合静态文件服务器</li><li>weight 权重配置，weight和访问比率成正比，数字越大，分配得到的流量越高，适用于在服务器性能差距较大时使用</li><li>ip_hash（固定分发），根据请求按访问ip的hash结果分配，这样每个用户就可以固定访问一个后端服务器，适用于服务器业务分区、业务缓存、Session需要单点的情况</li><li>fair(第三方)，按后端服务器的响应时间来分配请求，响应时间短的优先分配。</li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ul><li><p>节点轮询，默认采用节点轮询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream lbs {
   server 192.168.0.106:8080;
   server 192.168.0.106:8081;
}
location /api/ {
    proxy_pass http://lbs;
    proxy_redirect default;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>weight权重</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream lbs {
   ## weight与访问比率成正比
   server 192.168.159.133:8080 weight=5;
   server 192.168.159.133:8081 weight=10; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ip_hash</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream lbs {
   ip_hash;
   server 192.168.159.133:8080;
   server 192.168.159.133:8081;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>fair（第三方）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream lbs {
   fair;
   server 192.168.159.133:8080;
   server 192.168.159.133:8081;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="节点状态值设置" tabindex="-1"><a class="header-anchor" href="#节点状态值设置" aria-hidden="true">#</a> 节点状态值设置</h3><p>nginx支持对每个节点设置状态值，具体的值如下：</p><ul><li>backup，表明为备用服务器，当主服务器挂了后使用，不支持在hash、ip_hash、随机负载均衡方法中使用。</li><li>down，表明服务器不可用</li></ul><p>使用如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream lbs {
   weight;
   server 192.168.159.133:8080 weight=5 backup; 
   server 192.168.159.133:8081 weight=10 down;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后端可用性和健康探测" tabindex="-1"><a class="header-anchor" href="#后端可用性和健康探测" aria-hidden="true">#</a> 后端可用性和健康探测</h3><p>关键参数：</p><ul><li>max_fails 允许请求失败的次数，默认为1.当超过最大次数时就不会请求</li><li>fail_timeout : max_fails次失败后，暂停的时间，默认：fail_timeout为10s</li></ul><p>默认在10S内有一次失败，这个后端服务将标记为在10S内不可用，再下一次10秒后再进行尝试。</p>`,16),d=[l];function r(t,v){return i(),a("div",null,d)}const h=e(s,[["render",r],["__file","4.Nginx负载均衡.html.vue"]]);export{h as default};

import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as a}from"./app-ef0b4d9d.js";const l="/assets/20220809155336-f277fe3f.png",s={},d=a(`<h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><ul><li>所有网站屏蔽，把include xxx; 放到http {}语句块。</li><li>单独网站屏蔽，把include xxx; 放到网址对应的在server{}语句块</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http{
    # ....
    include blacklist.conf;
}
location / {
                proxy_pass http://lbs;
                proxy_redirect default;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>blacklist.conf</code>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deny 127.0.0.1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+l+'" alt="" loading="lazy"></p><h2 id="自动封禁" tabindex="-1"><a class="header-anchor" href="#自动封禁" aria-hidden="true">#</a> 自动封禁</h2><ul><li>编写shell脚本，AWK统计access.log，记录每秒访问超过60次的ip，然后配合nginx或者iptables进行封禁，crontab定时执行</li></ul>',9),t=[d];function c(r,o){return i(),n("div",null,t)}const _=e(s,[["render",c],["__file","1.Nginx封禁恶意IP.html.vue"]]);export{_ as default};

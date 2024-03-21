import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as i,a as e,b as t}from"./app-ef0b4d9d.js";const d={},l=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`vim /lib/systemd/system/nginx.service
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),r=e("p",null,"加入重启相关配置文件：",-1),c=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Service]
Restart=always
RestartSec=1
Type=forking
PIDFile=/run/nginx.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function o(m,u){return s(),a("div",null,[l,r,i("more"),c])}const x=n(d,[["render",o],["__file","5.nginx挂掉自动重启办法.html.vue"]]);export{x as default};

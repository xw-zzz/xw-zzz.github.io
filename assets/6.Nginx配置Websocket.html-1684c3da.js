import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,b as d}from"./app-ef0b4d9d.js";const s={},a=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>title: Nginx配置Websocket
date: 2022-06-08
img: https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220808224553.png
category:
- Nginx
tags:
- Nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen    80;
  server_name file.yangliu97.top;
  location / {
   proxy_pass http://lbs;
   proxy_read_timeout 300s; //websocket空闲保持时长
   proxy_set_header Host $host;
   proxy_set_header X-Real-IP $remote_addr;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   proxy_http_version 1.1;
   
   proxy_set_header Upgrade $http_upgrade;
   proxy_set_header Connection $connection_upgrade;
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键配置如下，将协议升级为WebSocket</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $connection_upgrade;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现<code>unknown &quot;connection_upgrade&quot; variable</code>错误，在Http块加如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map $http_upgrade $connection_upgrade {
           default upgrade;
           &#39;&#39;      close;
       }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[a];function t(l,c){return n(),i("div",null,r)}const u=e(s,[["render",t],["__file","6.Nginx配置Websocket.html.vue"]]);export{u as default};

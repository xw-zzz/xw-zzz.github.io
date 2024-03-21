import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,b as d}from"./app-ef0b4d9d.js";const a={},s=d(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>在<code>location</code>添加如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / { 
    add_header &#39;Access-Control-Allow-Origin&#39; $http_origin;
    add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;
    add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,web-token,app-token,Authorization,Accept,Origin,Keep-Alive,User-Agent,X-Mx-ReqToken,X-Data-Type,X-Auth-Token,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range&#39;;
    add_header Access-Control-Allow-Methods &#39;GET,POST,OPTIONS&#39;;
#如果预检请求则返回成功,不需要转发到后端
  if ($request_method = &#39;OPTIONS&#39;) {
      add_header &#39;Access-Control-Max-Age&#39; 1728000;
      add_header &#39;Content-Type&#39; &#39;text/plain; charset=utf-8&#39;;
      add_header &#39;Content-Length&#39; 0;
      return 200;
    }
  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[s];function l(r,c){return n(),i("div",null,t)}const u=e(a,[["render",l],["__file","5.Nginx跨域.html.vue"]]);export{u as default};

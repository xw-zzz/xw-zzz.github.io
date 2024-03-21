import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as r}from"./app-ef0b4d9d.js";const a={},d=r(`<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><p>如果业务没有做好统一的错误管理，直接暴露给用户，会造成体验上的问题，因为需要进行数据兜底。</p><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><p>关键配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
      listen       8000;
       location /test/ {
         proxy_pass http://lbs;
          # 存放用户的真实ip
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;  
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
         proxy_next_upstream error timeout http_500 http_503 http_404;
         #开启错误拦截配置,一定要开启
         proxy_intercept_errors on;
        }
        # 不加 =200，则返回的就是原先的http错误码；配上后如果出现500等错误都返回给用户200状态，并跳转至/default_api
        error_page  404 500 502 503 504  =200  /default_api;
        location = /default_api {
        default_type application/json;
        return 200 &#39;{&quot;code&quot;:&quot;-1&quot;,&quot;msg&quot;:&quot;invoke fail, not found &quot;}&#39;;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>proxy_intercept_errors on; 开启错误拦截</li><li>error_page 404 500 502 503 504 =200 /default_api; 不加 =200，则返回的就是原先的http错误码；配上后如果出现500等错误都返回给用户200状态，并跳转至/default_api</li></ul>`,6),t=[d];function s(l,o){return i(),n("div",null,t)}const _=e(a,[["render",s],["__file","2.Nginx数据兜底.html.vue"]]);export{_ as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,b as s}from"./app-ef0b4d9d.js";const l={},d=s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li><p>下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc zlib zlib-devel pcre-devel openssl openssl-devel
<span class="token comment">## 下载</span>
<span class="token function">wget</span> http://nginx.org/download/nginx-1.23.1.tar.gz 
<span class="token comment">## 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> nginx-1.23.1.tar.gz
<span class="token builtin class-name">cd</span> nginx-1.23.1
//执行命令
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/sbin   
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>源码编译安装默认目录 <code>/usr/local/nginx</code></p></li><li><p>常见命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#默认配置文件启动</span>
./nginx  
<span class="token comment">#重启，加载默认配置文件</span>
./nginx <span class="token parameter variable">-s</span> reload 
<span class="token comment">#启动指定某个配置文件</span>
./nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf 
<span class="token comment">#停止</span>
./nginx <span class="token parameter variable">-s</span> stop 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 每个配置项由配置指令和指令参数 2 个部分构成
#user  nobody;  # 指定Nginx Worker进程运行以及用户组
worker_processes  1;   # 

#error_log  logs/error.log;  # 错误日志的存放路径  和错误日志
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;   # 进程PID存放路径


# 事件模块指令，用来指定Nginx的IO模型，Nginx支持的有select、poll、kqueue、epoll 等。不同的是epoll用在Linux平台上，而kqueue用在BSD系统中，对于Linux系统，epoll工作模式是首选
events { 
    use epoll;
  # 定义Nginx每个进程的最大连接数， 作为服务器来说: worker_connections * worker_processes,
  # 作为反向代理来说，最大并发数量应该是worker_connections * worker_processes/2。因为反向代理服务器，每个  并发会建立与客户端的连接和与后端服务的连接，会占用两个连接
    worker_connections  1024; 
}




http {
    include       mime.types;
    default_type  application/octet-stream;
    # 自定义服务日志
    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    #access_log  logs/access.log  main;

    # 是否开启高效传输模式 on开启 off关闭
    sendfile        on;
    
    #减少网络报文段的数量
    #tcp_nopush     on;

    #keepalive_timeout  0;
    # 客户端连接保持活动的超时时间，超过这个时间之后，服务器会关闭该连接
    keepalive_timeout  65;

    #gzip  on;
    
    # 虚拟主机的配置
    server {
        listen       80; # 虚拟主机的服务端口
        server_name  localhost; #用来指定IP地址或域名，多个域名之间用空格分开

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        #URL地址匹配
        location / {
            root   html;  # 服务默认启动目录
            index  index.html index.htm; #默认访问文件，按照顺序找
        }

        #error_page  404              /404.html;   #错误状态码的显示页面

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \\.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \\.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache&#39;s document root
        # concurs with nginx&#39;s one
        #
        #location ~ /\\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多项目不同配置文件管理" tabindex="-1"><a class="header-anchor" href="#多项目不同配置文件管理" aria-hidden="true">#</a> 多项目不同配置文件管理</h2><ul><li><p>nginx.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>events {
    worker_connections 1024;
}
http {
    #include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    ## 引入conf.d/的配置
    include conf.d/*.conf;  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>以文件服务为例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream zc{
    ip_hash;
    server 127.0.0.1:8088; 
}
server {
    client_max_body_size 10240M;
    include       mime.types;
    #监听443端口
    listen 443;
    #你的域名
    server_name file.yangliu97.top; 
    ssl on;
    #ssl证书的pem文件路径
    ssl_certificate    /root/.acme.sh/file.yangliu97.top/file.yangliu97.top.cer;
    #ssl证书的key文件路径
    ssl_certificate_key   /root/.acme.sh/file.yangliu97.top/file.yangliu97.top.key;
    location / {
     proxy_pass http://zc;     
}
}

server {
    listen 80;
    server_name file.yangliu97.top;
    #将请求转成https
    return 301 https://$http_host$request_uri;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,6),a=[d];function v(r,c){return i(),e("div",null,a)}const t=n(l,[["render",v],["__file","999.Nginx安装及配置.html.vue"]]);export{t as default};

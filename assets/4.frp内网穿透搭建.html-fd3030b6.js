import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as t,a as e,e as n,d as s,b as d}from"./app-ef0b4d9d.js";const c={},v=e("h1",{id:"操作系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#操作系统","aria-hidden":"true"},"#"),n(" 操作系统")],-1),o=e("ul",null,[e("li",null,"centos7")],-1),u=e("h1",{id:"服务端安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务端安装","aria-hidden":"true"},"#"),n(" 服务端安装")],-1),m={href:"https://file.yangliu97.top/share/2TqE_B0P",target:"_blank",rel:"noopener noreferrer"},p=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xzvf frp_0.44.0_linux_amd64.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>移除客户端相关配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -f frpc*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改frps.ini文件,修改配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
bind_port = 7000
dashboard_port = 7500
token = 41f1a553fd725468436eeac92425285f9accbd21e31325575ee27ab1ea928931
dashboard_user = root
dashboard_pwd = admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置systemctl来控制frps：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /lib/systemd/system/frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=frps service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
#启动服务的命令（此处写你的frps的实际安装目录）
ExecStart=/data/frp/frps -c /data/frp/frps.ini

[Install]
WantedBy=multi-user.target

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 启动
sudo systemctl start frps
## 开机自启
sudo systemctl enable frps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),b={href:"http://$",ip:"",target:"_blank",rel:"noopener noreferrer"},_=e("h1",{id:"客户端安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#客户端安装","aria-hidden":"true"},"#"),n(" 客户端安装")],-1),h={href:"https://file.yangliu97.top/share/KfVLINDJ",target:"_blank",rel:"noopener noreferrer"},f=d(`<p>解压配置frpc.inc文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
server_addr = 你的服务器ip
server_port = 7000
token = 41f1a553fd725468436eeac92425285f9accbd21e31325575ee27ab1ea928931

[web]
type = http
local_port = 29980
custom_domains = 你的服务器ip
[rdp]
type = tcp
local_ip = 127.0.0.1           
local_port = 3389
remote_port = 7001  
[smb]
type = tcp
local_ip = 127.0.0.1
local_port = 445
remote_port = 7002
[web1]
type = tcp
local_port = 29980
local_ip = 127.0.0.1
remote_port = 29980
[web2]
type = tcp
local_port = 12302
local_ip = 127.0.0.1
remote_port = 12302

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加启动BAT,放到frpc目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@echo off
if &quot;%1&quot; == &quot;h&quot; goto begin
mshta vbscript:createobject(&quot;wscript.shell&quot;).run(&quot;&quot;&quot;%~nx0&quot;&quot; h&quot;,0)(window.close)&amp;&amp;exit
:begin
REM
cd /d %~sdp0
frpc -c frpc.ini
exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双击运行。</p><h1 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h1>`,6),g={href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"};function x(y,q){const i=l("ExternalLinkIcon");return r(),t("div",null,[v,o,u,e("p",null,[n("下载服务端："),e("a",m,[n("下载链接"),s(i)]),n("，密码:123456,上传到服务器，执行解压命令：")]),p,e("p",null,[n("访问："),e("a",b,[n("http://$"),s(i)]),n(":7500,注意需要开放7500和7000端口，输入配置的账号密码即可。")]),_,e("p",null,[n("下载链接："),e("a",h,[n("点我"),s(i)])]),f,e("ul",null,[e("li",null,[e("a",g,[n("Github官网"),s(i)])])])])}const B=a(c,[["render",x],["__file","4.frp内网穿透搭建.html.vue"]]);export{B as default};

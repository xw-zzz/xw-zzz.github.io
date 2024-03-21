import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as s,b as e}from"./app-ef0b4d9d.js";const i={},d=e(`<p>1、安装docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install docker-io -y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=e(`<h6 id="_2关闭防火墙" tabindex="-1"><a class="header-anchor" href="#_2关闭防火墙" aria-hidden="true">#</a> <a href="#2"></a>2关闭防火墙</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service docker restart
systemctl stop firewalld
systemctl disable firewalld
vim /etc/selinux/config （SELINUX=disabled）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>######安装rancher</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#稳定版
docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher

#server版
docker run -d --restart=always  -v /home/rancher_rancher/db:/var/lib/mysql  --name rancher-server -p 8080:8080 rancher/server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function c(t,v){return n(),a("div",null,[d,s("more"),l])}const u=r(i,[["render",c],["__file","8.rancher安装.html.vue"]]);export{u as default};

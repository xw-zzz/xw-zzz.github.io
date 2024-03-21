import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as t,a as n,e,d as a,b as l}from"./app-ef0b4d9d.js";const d="/assets/20220905113735-8c9a2d30.png",o="/assets/20220905113827-7f858c22.png",p={},u=l(`<h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装Docker</h2><ul><li>如果已经安装Docker可忽略。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.先安装yml</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

<span class="token comment"># 2.设置阿里云镜像</span>
<span class="token function">sudo</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment">#3. 安装docker</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-20.10.10-3.el7

<span class="token comment">#4. 查看docker版本</span>
<span class="token function">docker</span> <span class="token parameter variable">-v</span>

<span class="token comment">#5. 启动docker</span>
systemctl start <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>


<span class="token comment">#6. 查看docker 启动状态</span>
systemctl status <span class="token function">docker</span>



<span class="token comment">## 配置阿里云加速</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://pkuk89br.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装rancher" tabindex="-1"><a class="header-anchor" href="#安装rancher" aria-hidden="true">#</a> 安装Rancher</h2>`,4),m=l(`<li><p>创建挂载目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/rancher_home/rancher
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/rancher_home/auditlog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --privileged --restart=unless-stopped -p 80:80 -p 443:443 \\
-v /data/rancher_home/rancher:/var/lib/rancher \\
-v /data/rancher_home/auditlog:/var/log/auditlog \\
--name rancher1 rancher/rancher:v2.5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),v=n("p",null,"登录Rancher",-1),b=n("li",null,[n("p",null,"启动成功rancher后, 可以打开浏览器输入IP地址来进入Rancher")],-1),k={href:"http://+IP",target:"_blank",rel:"noopener noreferrer"},h={href:"http://47.106.69.xxx",target:"_blank",rel:"noopener noreferrer"},_=n("li",null,[n("p",null,"配置账号密码，填写完账号密码后直接Continue即可。"),n("p",null,[n("img",{src:d,alt:"",loading:"lazy"})]),n("p",null,"切换为中文："),n("p",null,[n("img",{src:o,alt:"",loading:"lazy"})])],-1);function f(g,x){const s=r("ExternalLinkIcon");return c(),t("div",null,[u,n("ul",null,[m,n("li",null,[v,n("ul",null,[b,n("li",null,[n("p",null,[e("登录地址为："),n("a",k,[e("http://+IP"),a(s)]),e(" ，如："),n("a",h,[e("http://47.106.69.xxx"),a(s)])])]),_])])])])}const I=i(p,[["render",f],["__file","00.Rancher安装.html.vue"]]);export{I as default};

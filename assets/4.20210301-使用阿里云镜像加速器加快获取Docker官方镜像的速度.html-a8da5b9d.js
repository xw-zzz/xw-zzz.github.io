import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,b as a}from"./app-ef0b4d9d.js";const t={},o=a(`<h2 id="使用阿里云镜像加速器加快获取docker官方镜像的速度" tabindex="-1"><a class="header-anchor" href="#使用阿里云镜像加速器加快获取docker官方镜像的速度" aria-hidden="true">#</a> 使用阿里云镜像加速器加快获取Docker官方镜像的速度</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://af15tv6n.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function i(r,d){return n(),e("div",null,c)}const u=s(t,[["render",i],["__file","4.20210301-使用阿里云镜像加速器加快获取Docker官方镜像的速度.html.vue"]]);export{u as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const i={},t=e(`<div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> phusion/baseimage:0.11</span>

<span class="token comment"># Use baseimage-docker&#39;s init system.</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/sbin/my_init&quot;</span>]</span>

<span class="token comment"># Modify timezone.</span>
<span class="token instruction"><span class="token keyword">COPY</span> Shanghai /usr/share/zoneinfo/Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">RUN</span> ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;Asia/Shanghai&quot;</span> &gt; /etc/timezone</span>

<span class="token comment"># Install JDK.</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y openjdk-8-jdk</span>

<span class="token comment"># Clean up APT when done.</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[t];function l(o,d){return s(),a("div",null,c)}const m=n(i,[["render",l],["__file","2.Docker-jdk.html.vue"]]);export{m as default};

import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as t}from"./app-ef0b4d9d.js";const o={},u=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt;&gt; /etc/docker/daemon.json &lt;&lt; EOF
{
  &quot;default-ulimits&quot;: {
    &quot;nofile&quot;: {
      &quot;Hard&quot;: 128000,
      &quot;Name&quot;: &quot;nofile&quot;,
      &quot;Soft&quot;: 128000
    }
  },
  &quot;insecure-registries&quot;: [],
  &quot;live-restore&quot;: true,
  &quot;log-opts&quot;: {
    &quot;cache-disabled&quot;: &quot;false&quot;,
    &quot;cache-max-file&quot;: &quot;5&quot;,
    &quot;cache-max-size&quot;: &quot;20m&quot;,
    &quot;cache-compress&quot;: &quot;true&quot;,
    &quot;max-file&quot;: &quot;5&quot;,
    &quot;max-size&quot;: &quot;50m&quot;
  },
  &quot;max-concurrent-downloads&quot;: 10,
  &quot;max-concurrent-uploads&quot;: 5,
  &quot;max-download-attempts&quot;: 5,
  &quot;registry-mirrors&quot;: [&quot;https://h8ot7h7n.mirror.aliyuncs.com&quot;],
  &quot;selinux-enabled&quot;: false
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启docker: systemctl restart docker</p>`,2),s=[u];function l(d,a){return i(),n("div",null,s)}const v=e(o,[["render",l],["__file","9.docker标准输出占用问题解决.html.vue"]]);export{v as default};

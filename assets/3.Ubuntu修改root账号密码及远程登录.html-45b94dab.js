import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,f as n,b as i}from"./app-ef0b4d9d.js";const o={},r=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo passwd

vim /etc/ssh/sshd_config
找到PermitRootLogin without-password 修改为PermitRootLogin yes
service ssh restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function a(d,c){return s(),t("div",null,[r,n("more")])}const m=e(o,[["render",a],["__file","3.Ubuntu修改root账号密码及远程登录.html.vue"]]);export{m as default};

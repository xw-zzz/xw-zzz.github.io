import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,b as s}from"./app-ef0b4d9d.js";const d={},a=s(`<h2 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/bin
## 创建链接
ln /home/root/my_cmd/test  test

## 添加到环境变量
vim /etc/profile

在最后一行增加以下代码，然后按esc后输入 :wq保存并退出
PATH=/home/root/my_cmd/:$PATH 
export PATH

#刷新环境变量生效
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp /XXX/XXX.sh /bin/YYY.sh

##机上运行权限
chmod u+x /bin/YYY.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[a];function r(c,t){return i(),n("div",null,l)}const o=e(d,[["render",r],["__file","8.自定义全局命令.html.vue"]]);export{o as default};

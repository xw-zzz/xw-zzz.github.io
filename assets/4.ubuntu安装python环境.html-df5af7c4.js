import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as t,f as i,b as e}from"./app-ef0b4d9d.js";const d={},a=e(`<p>1、安装环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install python3.8
sudo cp /usr/bin/python /usr/bin/python_bak  //备份
sudo rm /usr/bin/python    //删除原来默认指向python链接
sudo ln -s /usr/bin/python3.6 /usr/bin/python

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=e(`<p>2、安装pip3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install python3-pip //安装
sudo pip3 install --upgrade pip //升级
sudo apt-get remove python3-pip //卸载
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(r,u){return s(),t("div",null,[a,i("more"),l])}const m=n(d,[["render",o],["__file","4.ubuntu安装python环境.html.vue"]]);export{m as default};

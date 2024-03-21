import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as t,a as e,e as n,d as a,b as l}from"./app-ef0b4d9d.js";const o={},c={id:"文件操作",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#文件操作","aria-hidden":"true"},"#",-1),h={href:"https://docs.ansible.com/ansible/2.9/modules/list_of_files_modules.html",target:"_blank",rel:"noopener noreferrer"},u=l(`<h3 id="copy模块" tabindex="-1"><a class="header-anchor" href="#copy模块" aria-hidden="true">#</a> copy模块</h3><p>作用：copy用于将文件或目录从控制节点复制到其他工作节点</p><p>案例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Copy file with owner and permissions
  copy:
    ## 源文件路径
    src: /srv/myfiles/foo.conf
    ## 目标路径
    dest: /etc/foo.conf
    ## 应该拥有文件/目录的用户的名称
    owner: foo
    ## 应该拥有文件/目录的组的名称
    group: foo
    ## 权限
    mode: &#39;0644&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://docs.ansible.com/ansible/2.9/modules/copy_module.html#copy-module",target:"_blank",rel:"noopener noreferrer"},p=l(`<h3 id="fetch模块" tabindex="-1"><a class="header-anchor" href="#fetch模块" aria-hidden="true">#</a> fetch模块</h3><p>作用：从远程节点拉取文件或目录到控制节点</p><p>案例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Store file into /tmp/fetched/host.example.com/tmp/somefile
  fetch:
    ## 远程节点文件路径
    src: /tmp/somefile
    ## 控制节点保存目录
    dest: /tmp/fetched
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file模块" tabindex="-1"><a class="header-anchor" href="#file模块" aria-hidden="true">#</a> file模块</h3><p>作用：</p>`,6),b=e("li",null,"设置文件，符号链接或目录的属性。",-1),_=e("li",null,"删除文件、符号链接或目录",-1),f={href:"https://docs.ansible.com/ansible/2.9/modules/copy_module.html#copy-module",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.ansible.com/ansible/2.9/modules/template_module.html#template-module",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.ansible.com/ansible/2.9/modules/assemble_module.html#assemble-module",target:"_blank",rel:"noopener noreferrer"},y=l(`<p>案例：</p><p>这个与copy使用相似。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- name: Create a symbolic link
  file:
    src: /file/to/link/to
    dest: /path/to/symlink
    owner: foo
    group: foo
    state: link
    
## 创建文件    
- name: Touch a file
  file:
    path: /etc/foo.conf
    state: touch    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state参数说明：</p><ul><li>absent。删除文件或目录或链接</li><li>directory。如果所有中间子目录不存在，则创建</li><li>file。默认，不会自动创建文件</li><li>hard。硬链接将被创建或更改</li><li>link。符号链接将被创建或更改。</li><li>touch。指定文件不存在则创建空文件。</li></ul><h2 id="信息采集" tabindex="-1"><a class="header-anchor" href="#信息采集" aria-hidden="true">#</a> 信息采集</h2><h3 id="step模块" tabindex="-1"><a class="header-anchor" href="#step模块" aria-hidden="true">#</a> step模块</h3><p>作用：收集主机相关信息，在playbook中会自动执行</p><p>案例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 查看主机内存信息
ansible all -m setup -a &#39;filter=ansible_*_mb&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h2><h3 id="ping模块" tabindex="-1"><a class="header-anchor" href="#ping模块" aria-hidden="true">#</a> ping模块</h3><p>作用：检查网络连通性</p><p>案例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible all -m ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Ansible内置的模块非常多，基本可以覆盖常见的运维要求，这里仅仅列出来一些常用的模块。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,18),k={href:"https://docs.ansible.com/ansible/2.9/modules/list_of_all_modules.html",target:"_blank",rel:"noopener noreferrer"};function w(A,N){const i=d("ExternalLinkIcon");return r(),t("div",null,[e("h2",c,[m,n(),e("a",h,[n("文件操作"),a(i)])]),u,e("p",null,[n("更多参数参考："),e("a",v,[n("copy模块官方文档"),a(i)])]),p,e("ul",null,[b,_,e("li",null,[n("与其他模块组合使用，如"),e("a",f,[n("copy"),a(i)]),n(", "),e("a",x,[n("template"),a(i)]),n(", "),e("a",g,[n("assemble"),a(i)])])]),y,e("ul",null,[e("li",null,[e("a",k,[n("Ansible模块文档"),a(i)])])])])}const C=s(o,[["render",w],["__file","05.Ansible常见模块使用.html.vue"]]);export{C as default};

import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c as o,a as s,t as c,e as n,d as p,b as r}from"./app-ef0b4d9d.js";const d="/assets/20220903141824-479d2474.png",u="/assets/20220903142523-5bbfb096.png",m={},v=r(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Palybooks(剧本)是一种简单的配置管理系统与多机器部署系统的基础.与现有的其他系统有不同之处,且非常适合于复杂应用的部署。在 playbooks 中可以编排有序的执行过程,甚至于做到在多组机器间,来回有序的执行特别指定的步骤.并且可以同步或异步的发起任务。Playbooks 的格式是YAML。</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h2><p>编写<code>playbook-test.yaml</code>文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token comment">## 指定hosts</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy ansible inventory file to client
      <span class="token key atrule">copy</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/ansible/hosts 
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/ansible/hosts
        <span class="token key atrule">owner</span><span class="token punctuation">:</span> root 
        <span class="token key atrule">group</span><span class="token punctuation">:</span> root 
        <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token number">0644</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行: <code>ansible-playbook playbook-test -f 10</code>,-f 指定并发数,输出如下：</p><p><img src="https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220903113546.png" alt="" loading="lazy"></p><h2 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h2><p>Palybooks可以自由编排不同的子任务，完成复杂的功能，但是当Palybooks过多时维护也会变得困难，那怎样组织 playbook 才是最好的方式呢？答案就是：使用Roles，Roles 基于一个已知的文件结构，去自动的加载某些 vars_files，tasks 以及 handlers。基于 roles 对内容进行分组，使得我们可以容易地与其他用户分享roles，简单来说<strong>约定大于配置</strong>。</p><p>目录结构组成：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>roles/
    common/               <span class="token comment"># this hierarchy represents a &quot;role&quot;</span>
        tasks/            <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- tasks file can include smaller files if warranted</span>
        handlers/         <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- handlers file</span>
        templates/        <span class="token comment">#  &lt;-- files for use with the template resource</span>
            ntp.conf.j2   <span class="token comment">#  &lt;------- templates end in .j2</span>
        files/            <span class="token comment">#</span>
            bar.txt       <span class="token comment">#  &lt;-- files for use with the copy resource</span>
            foo.sh        <span class="token comment">#  &lt;-- script files for use with the script resource</span>
        vars/             <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- variables associated with this role</span>
        defaults/         <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- default lower priority variables for this role</span>
        meta/             <span class="token comment">#</span>
            main.yml      <span class="token comment">#  &lt;-- role dependencies</span>
        library/          <span class="token comment"># roles can also include custom modules</span>
        module_utils/     <span class="token comment"># roles can also include custom module_utils</span>
        lookup_plugins/   <span class="token comment"># or other types of plugins, like lookup in this case</span>

    webtier/              <span class="token comment"># same kind of structure as &quot;common&quot; was above, done for the webtier role</span>
    monitoring/           <span class="token comment"># &quot;&quot;</span>
    fooapp/               <span class="token comment"># &quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>tasks/main.yml,角色执行的主要任务列表。</li><li>handlers/main.yml,处理程序，可以在此角色内部或外部使用。</li><li>library/my_module.py,自定义模块，用的比较少。</li><li>defaults/main.yml,默认变量 ，优先级更低。</li><li>vars/main.yml，变量设置。</li><li>files/，存放文件。</li><li>templates/main.yml，存放模板。</li><li>meta/main.yml，存放元数据。</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>此外还有<code>site.yml</code>,用来构建站点信息。</p></div><h3 id="基于roles结构的示例" tabindex="-1"><a class="header-anchor" href="#基于roles结构的示例" aria-hidden="true">#</a> 基于Roles结构的示例</h3><p>结构如下图所示：</p><p><img src="`+d+`" alt="" loading="lazy"></p><p>hosts文件：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>[webservers]
124.223.63.123

<span class="token comment">## 也可以不分组</span>
<span class="token comment">#124.223.63.123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>site.yml文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
  <span class="token comment">## 指定哪些主机执行</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token comment">## 设置标签值</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> common<span class="token punctuation">-</span>tag <span class="token punctuation">]</span>
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token comment">## 与下面的common文件夹对应</span>
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> common

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>roles/tasks/main.yaml</code>文件:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cp<span class="token punctuation">-</span>common<span class="token punctuation">-</span>file
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> test.log
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /data/test.log
  
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cp<span class="token punctuation">-</span>common<span class="token punctuation">-</span>file
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> test1.log.j2
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /data/test1.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>roles/common/templates/test1.log.j2</code>文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fdsfdsggggggggggggggggggggggggggggggg
fdfd{{my_var1}}
{{my_var2}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>roles/common/templates/test1.log.j2</code>文件内容：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">my_var1</span><span class="token punctuation">:</span> <span class="token value attr-value">this is var1</span>
<span class="token key attr-name">my_var2</span><span class="token punctuation">:</span> <span class="token value attr-value">this is var2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 按照site.yml从上到下依次执行
ansible-playbook -i hosts site.yml

## 按照标签指定执行
ansible-playbook -i hosts site.yml --tags=common-tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+u+'" alt="" loading="lazy"></p><p>至此，完成了一个基本的roles。<strong>roles是Ansible一个非常重要的部分，大部分都是基于roles去开发</strong>。</p>',31),k=s("h2",{id:"参考链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),n(" 参考链接")],-1),b={href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html#role-directory-structure",target:"_blank",rel:"noopener noreferrer"};function g(a,y){const e=i("ExternalLinkIcon");return t(),o("div",null,[v,s("p",null,[s("strong",null,"注意：变量的格式为 "+c(a.变量名称),1)]),k,s("p",null,[s("a",b,[n("Ansible Roles官方文档"),p(e)])])])}const _=l(m,[["render",g],["__file","06.Playbook.html.vue"]]);export{_ as default};

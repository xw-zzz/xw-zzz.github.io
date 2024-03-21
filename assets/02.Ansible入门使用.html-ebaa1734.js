import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as i,b as n}from"./app-ef0b4d9d.js";const l="/assets/20220903105748-ccfe9d51.png",a="/assets/20220903105725-019ea3bd.png",d={},t=n(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li><p>首先需要配置主机信息,配置文件默认在<code>/etc/ansible/hosts</code>,也可以自定义配置文件地址，启动时使用<code>-e</code>参数指定配置文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## webservers为分组
[webservers]
124.223.63.123

## 也可以不分组
124.223.63.123

##  如果做了免密登录只需要填写IP即可，如果使用密码连接格式为
192.168.0.103 ansible_user=&quot;root&quot; ansible_host=&quot;192.168.0.103&quot; ansible_password=&quot; &quot; ansible_port=&quot;22&quot; ansible_ssh_extra_args=&quot;-o StrictHostKeyChecking=no&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ansible_user:登录用户名</li><li>ansible_host：远程host</li><li>ansible_password:登录密码</li><li>ansible_port：端口</li></ul></li><li><p>使用命令如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 指定webservers组 -m指定模块
ansible webservers -m ping

## all-》hosts配置所有主机
ansible all -m ping

##指定某个主机
ansible 124.223.63.123 -m ping

##-i /etc/ansible/hosts1 指定配置文件 
ansible 124.223.63.123 -i /etc/ansible/hosts1 -m ping

##参数传递
ansible 124.223.63.123 -i /etc/ansible/hosts1 -m copy -a &quot;src=/etc/ansible/hosts dest=/etc/ansible/hosts2 owner=root group=root mode=0644&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="" loading="lazy"></p><p><img src="'+a+'" alt="" loading="lazy"></p></li></ol><p>​</p>',3),r=[t];function o(c,v){return s(),i("div",null,r)}const m=e(d,[["render",o],["__file","02.Ansible入门使用.html.vue"]]);export{m as default};

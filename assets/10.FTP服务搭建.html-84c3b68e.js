import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as l,a as s,e as i,d as c,b as d}from"./app-ef0b4d9d.js";const p="/assets/image-20221022095945325-291a66d4.png",o="/assets/image-20221022101948026-16d9383c.png",r={},v=d(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 运行以下命令，安装vsftpd。</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> vsftpd

<span class="token comment">## 设置FTP服务开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> vsftpd.service

<span class="token comment">## 启动FTP服务</span>
systemctl start vsftpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><h3 id="本地用户模式" tabindex="-1"><a class="header-anchor" href="#本地用户模式" aria-hidden="true">#</a> 本地用户模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 为FTP服务创建一个Linux用户</span>
adduser ftptest

<span class="token comment">##修改ftptest用户的密码</span>
<span class="token function">passwd</span> ftptest

<span class="token comment">## 运行以下命令创建一个供FTP服务使用的文件目录</span>
<span class="token function">mkdir</span> /var/ftp/test

<span class="token comment">## chown -R ftptest:ftptest /var/ftp/test</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> ftptest:ftptest /var/ftp/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件，运行以下命令，修改配置文件/etc/vsftpd/vsftpd.conf。使用的是<strong>apt install vsftpd</strong>安装命令，则配置文件路径为/etc/vsftpd.conf。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd/vsftpd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换为以下文件内容：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#除下面提及的参数，其他参数保持默认值即可。</span>

<span class="token comment">#修改下列参数的值：</span>
<span class="token comment">#禁止匿名登录FTP服务器。</span>
<span class="token key attr-name">anonymous_enable</span><span class="token punctuation">=</span><span class="token value attr-value">NO</span>
<span class="token comment">#允许本地用户登录FTP服务器。</span>
<span class="token key attr-name">local_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token comment">#监听IPv4 sockets。</span>
<span class="token key attr-name">listen</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>

<span class="token comment">#在行首添加#注释掉以下参数：</span>
<span class="token comment">#关闭监听IPv6 sockets。</span>
<span class="token comment">#listen_ipv6=YES</span>

<span class="token comment">#在配置文件的末尾添加下列参数：</span>
<span class="token comment">#设置本地用户登录后所在目录。</span>
<span class="token key attr-name">local_root</span><span class="token punctuation">=</span><span class="token value attr-value">/var/ftp/test</span>
<span class="token comment">#全部用户被限制在主目录。</span>
<span class="token key attr-name">chroot_local_user</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token comment">#启用例外用户名单。</span>
<span class="token key attr-name">chroot_list_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token comment">#指定例外用户列表文件，列表中用户不被锁定在主目录。</span>
<span class="token key attr-name">chroot_list_file</span><span class="token punctuation">=</span><span class="token value attr-value">/etc/vsftpd/chroot_list</span>
<span class="token comment">#开启被动模式。</span>
<span class="token key attr-name">pasv_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token key attr-name">allow_writeable_chroot</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token comment">#本示例中为Linux服务器的公网IP。</span>
<span class="token key attr-name">pasv_address</span><span class="token punctuation">=</span><span class="token value attr-value">&lt;FTP服务器公网IP地址&gt;</span>
<span class="token comment">#设置被动模式下，建立数据传输可使用的端口范围的最小值。</span>
<span class="token comment">#建议您把端口范围设置在一段比较高的范围内，例如50000~50010，有助于提高访问FTP服务器的安全性。</span>
<span class="token key attr-name">pasv_min_port</span><span class="token punctuation">=</span><span class="token value attr-value">&lt;port number&gt;</span>
<span class="token comment">#设置被动模式下，建立数据传输可使用的端口范围的最大值。</span>
<span class="token key attr-name">pasv_max_port</span><span class="token punctuation">=</span><span class="token value attr-value">&lt;port number&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建chroot_list文件，并在文件中写入例外用户名单。输入例外用户名单。此名单中的用户不会被锁定在主目录，可以访问其他目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd/chroot_list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::warn</p><p>没有例外用户时，也必须创建chroot_list文件，内容可为空。</p><p>:::</p><p>关闭防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行以下命令，打开/etc/ssh/sshd_config文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件尾行将<code>PasswordAuthentication</code>的值改为<code>yes</code></p><p><img src="`+p+`" alt="image-20221022095945325" loading="lazy"></p><p>重启FTP服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart vsftpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接</p><p><img src="`+o+'" alt="image-20221022101948026" loading="lazy"></p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',25),m={href:"https://help.aliyun.com/document_detail/60152.html",target:"_blank",rel:"noopener noreferrer"};function u(b,k){const n=e("ExternalLinkIcon");return t(),l("div",null,[v,s("ul",null,[s("li",null,[s("a",m,[i("https://help.aliyun.com/document_detail/60152.html"),c(n)])])])])}const f=a(r,[["render",u],["__file","10.FTP服务搭建.html.vue"]]);export{f as default};

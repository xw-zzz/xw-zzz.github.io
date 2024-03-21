import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,b as e}from"./app-ef0b4d9d.js";const t="/assets/XsbmglrJL6cF4kR-2b444173.png",i="/assets/axUzCLJRBIjYKDp-6b066d11.png",d="/assets/ma7Bo5zOkQrHfZP-0ea8e060.png",l="/assets/TxQ2MNDhIol7P4K-d945628d.png",r={},c=e(`<h2 id="文件和目录操作命令" tabindex="-1"><a class="header-anchor" href="#文件和目录操作命令" aria-hidden="true">#</a> 文件和目录操作命令</h2><h3 id="tree-以树形结构展示目录下的内容" tabindex="-1"><a class="header-anchor" href="#tree-以树形结构展示目录下的内容" aria-hidden="true">#</a> tree（以树形结构展示目录下的内容）</h3><ul><li><p>作用：以树形结构展示目录下的内容</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-a</td><td>显示所有文件，包括隐藏文件</td></tr><tr><td>-d</td><td>只显示目录</td></tr><tr><td>-f</td><td>显示每个文件的全路径</td></tr><tr><td>-i</td><td>不显示树枝，需要与-f参数配合使用</td></tr><tr><td>-L</td><td>遍历目录的最大层数</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装tree命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> tree

<span class="token comment">## 以树形结构显示目录下的所有内容</span>
tree <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="mkdir-创建目录" tabindex="-1"><a class="header-anchor" href="#mkdir-创建目录" aria-hidden="true">#</a> mkdir（创建目录）</h3><ul><li><p>作用：创建目录</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-p</td><td>递归创建目录</td></tr><tr><td>-m</td><td>创建目录的默认权限</td></tr><tr><td>-v</td><td>显示目录创建过程</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 递归创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/11

<span class="token comment">## 创建目录给与权限</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-m</span> <span class="token number">333</span> /data2

<span class="token comment">## 创建多个目录及子目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> o1dboy/<span class="token punctuation">{</span>dirl_1,dir1_2<span class="token punctuation">}</span>/<span class="token punctuation">{</span>dir2_1,dir2<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="ls-列出目录的内容" tabindex="-1"><a class="header-anchor" href="#ls-列出目录的内容" aria-hidden="true">#</a> ls（列出目录的内容）</h3><ul><li><p>作用：list，列出目录的内容</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-l</td><td>使用长格式列出文件及目录信息 *</td></tr><tr><td>-a</td><td>显示目录下所有文件，包括隐藏文件</td></tr><tr><td>-t</td><td>根据修改时间排序，默认是文件名</td></tr><tr><td>-i</td><td>不显示树枝，需要与-f参数配合使用</td></tr><tr><td>-r</td><td>依相反次序排序</td></tr><tr><td>-d</td><td>当遇到目录时，列出目录本身而非目录内的文件，并且不跟随符号连接</td></tr><tr><td>-h</td><td>以人类可读的信息展示文件或目录大小</td></tr><tr><td>-R</td><td>递归列出所有子目录</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 显示所有文件</span>
<span class="token function">ls</span> <span class="token parameter variable">-a</span>

<span class="token comment">## 显示完整时间</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> --time-style<span class="token operator">=</span>long-iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="cp-复制文件" tabindex="-1"><a class="header-anchor" href="#cp-复制文件" aria-hidden="true">#</a> cp（复制文件）</h3><ul><li><p>作用：cp命令以及后面的选项和文件</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-p</td><td>复制文件保持源文件的持有者、权限信息及时间属性</td></tr><tr><td>-d</td><td>如果复制的源文件是符号链接，那么仅复制符号链接本身。而且保留符号链接所指向的目标文件或目录</td></tr><tr><td>-r</td><td>递归复制目录</td></tr><tr><td>-a</td><td>等同于上面的p、d、r这三个选项功能的综合</td></tr><tr><td>-i</td><td>覆盖已有文件前提示用户确认</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 使用-a参数复制file1.txt为file2</span>
<span class="token function">cp</span>  <span class="token parameter variable">-a</span>  file1.txt file2.txt

<span class="token comment">## 以树形结构显示目录下的所有内容</span>
tree <span class="token parameter variable">-a</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>cp覆盖文件之前不提示是否覆盖的几种方法</p><ul><li><p>使用命令全路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 查看cp的系统别名
which cp

## 使用绝对路径cp就可以屏蔽
/usr/bin/cp a b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命令开头使用反斜线（\\）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\cp a b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>取消cp的别名，但重启系统时效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 取消设置别名
unalias cp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="mv-移动或重命名文件" tabindex="-1"><a class="header-anchor" href="#mv-移动或重命名文件" aria-hidden="true">#</a> mv（移动或重命名文件）</h3><ul><li><p>作用：移动或重命名文件</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-f</td><td>若目标文件已经存在，则直接覆盖</td></tr><tr><td>-i</td><td>若目标文件已经存在，则会询问是否覆盖</td></tr><tr><td>-n</td><td>不覆盖已经存在的文件</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 将a文件命名为b</span>
<span class="token function">mv</span> a b

<span class="token comment">## 移动目录,若dir5不存在，将目录dir1重命名为dir5</span>
<span class="token function">mv</span> dir1 dir5


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="文件过滤及内容编辑处理命令" tabindex="-1"><a class="header-anchor" href="#文件过滤及内容编辑处理命令" aria-hidden="true">#</a> 文件过滤及内容编辑处理命令</h2><h3 id="cat-合并文件或查看文件内容" tabindex="-1"><a class="header-anchor" href="#cat-合并文件或查看文件内容" aria-hidden="true">#</a> cat（合并文件或查看文件内容）</h3><ul><li><p>作用：移动或重命名文件</p></li><li><p>常用功能</p><ul><li>查看文件内容</li><li>把多个文件合并成一个 cat file1.txt file2.txt &gt; newfile.txt</li><li>创建编辑新文件</li><li>非交互式的编辑或追加内容到文件尾部</li><li>清空文件内容（cat /dev/null &gt; file.txt）</li></ul></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-n</td><td>输出行号</td></tr><tr><td>-b</td><td>和-n相似，但会忽略空白行</td></tr><tr><td>-s</td><td>当遇到有两行以上的空白行时，替换为一行</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> test.txt <span class="token operator">&lt;&lt;</span><span class="token string">EOF
Q                         
QQQ                                                                       
QQQ                   
EOF</span>            
<span class="token comment">#&lt;=这里要按回车才能结束，另外，E0F必须成对出现，但也可以用</span>
别的成对标签来替换。例
如：o1boy字符标签，默认情况下，结尾的E0F必须要顶格写。

<span class="token function">cat</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="more-分页显示文件内容" tabindex="-1"><a class="header-anchor" href="#more-分页显示文件内容" aria-hidden="true">#</a> more（分页显示文件内容）</h3><ul><li><p>作用：分页显示文件内容</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-num</td><td>指定屏幕显示大小为num行</td></tr><tr><td>+num</td><td>从行号的num开始显示</td></tr><tr><td>-s</td><td>把连续的多个空行显示为一行</td></tr></tbody></table><p>在交互模式下，使用more命令打开文本之后,会进入一个基于vi的交互界面，可以使用部分vi编辑器的功能，常见命令如下</p><table><thead><tr><th>空格键</th><th>向下滚动一屏</th></tr></thead><tbody><tr><td>b</td><td>返回上一屏</td></tr><tr><td>/查找的文本</td><td>查找指定的文本</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 不传递参数，满屏显示文件内容</span>
<span class="token function">more</span> test.txt

<span class="token comment">## 显示5行</span>
<span class="token function">more</span> <span class="token parameter variable">-5</span> test.txt

<span class="token comment">## 从第五行开始显示</span>
<span class="token function">more</span> +5 test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="less-分页显示文件内容" tabindex="-1"><a class="header-anchor" href="#less-分页显示文件内容" aria-hidden="true">#</a> less（分页显示文件内容）</h3><ul><li><p>作用：移动或重命名文件</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-n</td><td>显示指定的行数</td></tr><tr><td>-q</td><td>不显示包含给定文件名的文件头</td></tr><tr><td>-v</td><td>总是显示包含给定文件名的文件夹</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 不接受任何参数时，默认显示文件的前10行</span>
<span class="token function">head</span> test.txt

<span class="token comment">## 显示文件前5行</span>
<span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">5</span> test.txt


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="head-显示文件头部内容" tabindex="-1"><a class="header-anchor" href="#head-显示文件头部内容" aria-hidden="true">#</a> head（显示文件头部内容）</h3><ul><li><p>作用：显示文件头部内容，默认输出文件开头十行</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-f</td><td>若目标文件已经存在，则直接覆盖</td></tr><tr><td>-i</td><td>若目标文件已经存在，则会询问是否覆盖</td></tr><tr><td>-n</td><td>不覆盖已经存在的文件</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 将a文件命名为b</span>
<span class="token function">mv</span> a b

<span class="token comment">## 移动目录,若dir5不存在，将目录dir1重命名为dir5</span>
<span class="token function">mv</span> dir1 dir5


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="tail-显示文件内容尾部" tabindex="-1"><a class="header-anchor" href="#tail-显示文件内容尾部" aria-hidden="true">#</a> tail（显示文件内容尾部）</h3><ul><li><p>作用：显示文件内容尾部，默认输出文件的最后10行</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-n</td><td>显示指定的行数</td></tr><tr><td>-f</td><td>实时输出文件变化后追加的数据</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 默认显示最后10行</span>
<span class="token function">tail</span> test.txt

<span class="token comment">## 显示文件末尾5行的内容</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">5</span> test.txt

<span class="token comment">## 实时监控test.txt文件变化</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> test.txt


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="tailf-跟踪日志文件" tabindex="-1"><a class="header-anchor" href="#tailf-跟踪日志文件" aria-hidden="true">#</a> tailf（跟踪日志文件）</h3><ul><li><p>作用：tailf命令几乎等同于tail-f，与tail-f不同的是，如果文件不增长，那么它不会去访问磁盘文件，也不会更改文件的访问时间。</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-n</td><td>指定显示的行数，默认显示最后10行</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 默认显示最后10行文件</span>
tailf test.txt


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="cut-从文本中提取一段文字并输出" tabindex="-1"><a class="header-anchor" href="#cut-从文本中提取一段文字并输出" aria-hidden="true">#</a> cut（从文本中提取一段文字并输出）</h3><ul><li><p>作用：cut命令从文件的每一行剪切字节、字符或字段，并将这些字节、字符输出</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-d</td><td>自定义分隔符，默认以tab为分隔符</td></tr><tr><td>-f</td><td>与选项-d一起使用，指定显示哪个区域</td></tr><tr><td>N</td><td>第N个字节、字符或字段</td></tr><tr><td>N-</td><td>从第N个字节、字符或字段开始直至行尾</td></tr><tr><td>N-M</td><td>从第N到第M个字节、字符或字段</td></tr><tr><td>-M</td><td>从第1到第M个字节、字符或字段</td></tr><tr><td>-c</td><td>以字符为单位进行分割</td></tr><tr><td>-n</td><td>取消分割多字节字符，与选项-b一起使用</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 输出第3-5个字节和第10个字节</span>
<span class="token function">cut</span> <span class="token parameter variable">-b</span> <span class="token number">3</span>-5,10 oldboy.txt

<span class="token comment">## 表示从第三个字节到行尾</span>
<span class="token function">cut</span> <span class="token parameter variable">-b</span> <span class="token number">3</span>- oldboy.txt

<span class="token comment">## 输出第三个到5个字符</span>
<span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">3</span>-5 oldboy.txt

<span class="token comment">## -d指定以:作为分隔符 -f 1指定显示第一个区域</span>
<span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="vim-纯文本编辑器" tabindex="-1"><a class="header-anchor" href="#vim-纯文本编辑器" aria-hidden="true">#</a> vim（纯文本编辑器）</h3><ul><li><p>作用：vim分为三种模式：普通模式、编辑模式、命令模式</p><ul><li>普通模式：用vim命令打开一个文件，默认的状态就是普通模式。在这个模式中，不能进行编辑输入操作。</li><li>编辑模式：按i进去编辑模式</li><li>命令模式：输入&quot;: / ?&quot;时，光标会自动定位在那一行，可以执行保存、退出、搜索。</li></ul><p><img src="`+t+'" alt="" loading="lazy"></p></li><li><p>参数：</p><p><img src="'+i+'" alt="" loading="lazy"></p><p><img src="'+d+'" alt="" loading="lazy"></p><p><img src="'+l+`" alt="" loading="lazy"></p></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 将a文件命名为b</span>
<span class="token function">mv</span> a b

<span class="token comment">## 移动目录,若dir5不存在，将目录dir1重命名为dir5</span>
<span class="token function">mv</span> dir1 dir5


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理" aria-hidden="true">#</a> 文本处理</h2><h3 id="grep-文本过滤命令" tabindex="-1"><a class="header-anchor" href="#grep-文本过滤命令" aria-hidden="true">#</a> grep（文本过滤命令）</h3><ul><li><p>作用：文本过滤命令</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-n</td><td>显示匹配行及行号</td></tr><tr><td>-i</td><td>不区分大小写，默认是区分大小写的</td></tr><tr><td>-c</td><td>只匹配统计的行数</td></tr><tr><td>-w</td><td>只匹配过滤的单词</td></tr><tr><td>-o</td><td>只输出匹配的内容</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 过滤不包含test字符串的行</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;test&quot;</span> test.txt

<span class="token comment">## 输出包含test的字符串，并显示行号</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;test&quot;</span> test.txt

<span class="token comment">## -i不区分大小写</span>
<span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;test&quot;</span> test.txt


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="sed-字符流编辑器" tabindex="-1"><a class="header-anchor" href="#sed-字符流编辑器" aria-hidden="true">#</a> sed（字符流编辑器）</h3><ul><li><p>作用：字符流编辑器</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-n</td><td>取消默认的sed输出，常与sed内置命令p连用</td></tr><tr><td>-i</td><td>直接修改文件内容，不输出到终端</td></tr></tbody></table></li><li><p>内置命令</p><table><thead><tr><th>命令字符</th><th>解释</th></tr></thead><tbody><tr><td>a</td><td>全拼append,标识追加文本，在指定行后追加文本</td></tr><tr><td>d</td><td>全拼delete，标识匹配行的文本</td></tr><tr><td>i</td><td>全拼append,标识追加文本，在指定行前追加文本</td></tr><tr><td>p</td><td>全拼print,表示打印匹配行的内容，通常p会与选项-n一起使用</td></tr><tr><td>s/regexp/replacement/</td><td>匹配regexp部分的内容，用replacement替换regexp匹配的内容，regexp部分可以使用正则表达式，在replacement部分可以使用特殊字符&amp;和l-9等匹配regexp部分的部分内容。在实战场景中，s/regexp/replacement/g结尾常与g匹配做全局的替换</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 生成测试文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>persons.txt<span class="token operator">&lt;&lt;</span><span class="token string">EOF
101,o1dboy,CEO
102,zhangyao,CTO
103,A1ex,C00
104,yy,CF0
105,feixue,CIO
EOF</span>

<span class="token comment">## 在第2行后面追加指定内容</span>
<span class="token function">sed</span> <span class="token string">&#39;2a 106，yl,CTO&#39;</span> persons.txt

<span class="token comment">## 在第2行前面追加指定内容</span>
<span class="token function">sed</span> <span class="token string">&#39;2i 106，yl11,CTO&#39;</span> persons.txt

<span class="token comment">## 删除第二行数据</span>
<span class="token function">sed</span> <span class="token string">&#39;2d&#39;</span>  persons.txt 

<span class="token comment">## 删除指定多行</span>
<span class="token function">sed</span> <span class="token string">&#39;2,5d&#39;</span>  persons.txt 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="mv-移动或重命名文件-1" tabindex="-1"><a class="header-anchor" href="#mv-移动或重命名文件-1" aria-hidden="true">#</a> mv（移动或重命名文件）</h3><ul><li><p>作用：移动或重命名文件</p></li><li><p>参数：</p><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td>-f</td><td>若目标文件已经存在，则直接覆盖</td></tr><tr><td>-i</td><td>若目标文件已经存在，则会询问是否覆盖</td></tr><tr><td>-n</td><td>不覆盖已经存在的文件</td></tr></tbody></table></li><li><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 将a文件命名为b</span>
<span class="token function">mv</span> a b

<span class="token comment">## 移动目录,若dir5不存在，将目录dir1重命名为dir5</span>
<span class="token function">mv</span> dir1 dir5


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="查看cpu相关信息" tabindex="-1"><a class="header-anchor" href="#查看cpu相关信息" aria-hidden="true">#</a> 查看CPU相关信息</h3><ul><li><p>查看cpu架构</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看cpu厂家信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> name <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f2</span> -d: <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看cpu个数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> physical <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看cpu核心数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;cpu cores&quot;</span> <span class="token operator">|</span> <span class="token function">uniq</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看服务器总核心数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;processor&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,37),p=[c];function o(u,v){return a(),s("div",null,p)}const h=n(r,[["render",o],["__file","0.命令大全.html.vue"]]);export{h as default};

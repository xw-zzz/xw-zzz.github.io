import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,b as i}from"./app-ef0b4d9d.js";const s={},l=i(`<h1 id="arthas基础命令" tabindex="-1"><a class="header-anchor" href="#arthas基础命令" aria-hidden="true">#</a> Arthas基础命令</h1><ul><li><p>dashboard</p><p>dashboard命令可以查看当前系统的实时数据面板，输入Q或者CTRL+C退出命令</p><p><img src="https://s2.loli.net/2022/01/14/RgHGS4Bto9Yqr3m.png" alt="" loading="lazy"></p></li><li><p>thread -1命令打印线程ID 1的栈</p><p><img src="https://cdn.jsdelivr.net/gh/2457081614/blog-image/20210909170044.png" alt="" loading="lazy"></p></li><li><p><code>sc</code> 命令来查找JVM里已加载的类，-d可以打印出类加载的具体信息，如果搜索的是接口会查找所有的实现类</p><p><img src="https://cdn.jsdelivr.net/gh/2457081614/blog-image/20210909170148.png" alt="" loading="lazy"></p></li><li><p><code>jad</code> 命令来反编译代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jad demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>watch</code>命令可以查看函数的参数/返回值/异常信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch demo.MathGame primeFactors returnObj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>vmtool</code>命令，可以搜索内存对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vmtool --action getInstances --className java.lang.String --limit 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>sysprop</code> 可以打印所有的System Properties信息</p><p><img src="https://cdn.jsdelivr.net/gh/2457081614/blog-image/20210909170609.png" alt="" loading="lazy"></p></li></ul><p>​ 指定单个key: <code>sysprop java.version</code></p><p>​ 通过grep来过滤: <code>sysprop | grep user</code></p><p>​ 设置新的值: <code>sysprop testKey testValue</code></p><ul><li><p>sysenv可以获取环境变量</p></li><li><p><code>jvm</code> 命令会打印出<code>JVM</code>的各种详细信息</p></li><li><p><code>sm</code>命令则是查找类的具体函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sm java.math.RoundingMode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-d参数打印函数的具体属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sm -d java.math.RoundingMode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以查找特定的函数，比如查找构造函数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sm java.math.RoundingMode &lt;init&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>jad反编译代码</p></li><li><p>热更新代码</p><ol><li><p>jad反编译UserController</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jad --source-only com.example.demo.arthas.user.EsRestClientConfig &gt; /tmp/EsRestClientConfig.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新代码 26a1ab54</p></li><li><p>sc查找对应的classLoader</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sc -d *EsRestClientConfig | grep classLoaderHash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用mc命令编译</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mc -c 26a1ab54 /tmp/EsRestClientConfig.java -d /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用<code>redefine</code>命令重新加载新编译好的<code>UserController.class</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redefine /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li></ul>`,6),t=[l];function n(r,c){return a(),d("div",null,t)}const m=e(s,[["render",n],["__file","1.20210909-Arthas-学习笔记.html.vue"]]);export{m as default};

import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as r,a as e,e as i,d as a,b as l}from"./app-ef0b4d9d.js";const c="/assets/20210308175912-e65eaae4.png",v="/assets/20210308221020-2d9fe9dc.png",o="/assets/20210308225201-b479fc79.png",p="/assets/20210308233608-de768b86.png",m="/assets/20210308225427-3f060a03.png",u="/assets/image-20210308232024256-45f80a81.png",b="/assets/image-20210308232142211-0772f8eb.png",g={},h=l(`<h2 id="jvm学习笔记-命令行工具篇" tabindex="-1"><a class="header-anchor" href="#jvm学习笔记-命令行工具篇" aria-hidden="true">#</a> JVM学习笔记-命令行工具篇</h2><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><ul><li>响应时间</li><li>吞吐量</li><li>并发数</li><li>内存占用</li></ul><h3 id="jps" tabindex="-1"><a class="header-anchor" href="#jps" aria-hidden="true">#</a> jps</h3><p>作用：查看增在运行的java进程</p><p>参数：</p><ul><li>-q :仅仅显示LVMID(local virtual machine id),即本地虚拟机唯一ID，不显示类名称</li><li>-l: 输出应用程序主类的全类名</li><li>-v: 列出虚拟机进程启动时的JVM参数</li><li>-m 输出虚拟机进程启动传给主类main()的参数</li></ul><h3 id="jstat" tabindex="-1"><a class="header-anchor" href="#jstat" aria-hidden="true">#</a> jstat</h3><p>作用：查看JVM统计信息,常应用于检测垃圾回收问题和OOM。</p><p>命令格式为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> jstat -&lt;option&gt; [-t] [-h&lt;lines&gt;] &lt;vmid&gt; [&lt;interval&gt; [&lt;count&gt;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-t : 显示程序的运行时间，单位为秒。</li><li>interval: 指定输出统计数据的周期，单位为毫秒。</li><li>count: 用于指定统计的总次数</li><li>-h: 输出表头数据</li><li>vmid: 进程id(通过jps命令获取)</li></ul><p>option选项：</p><ul><li><p>-class: 显示classloader相关信息：类的装载、卸载数量、总空间、类装载所消耗的时间</p></li><li><p>-gc: 显示gc相关的堆信息</p></li><li><p>-gccapacity: 输出信息主要与gc相同，但输出主要关注堆各个区域用到的最小和最大空间</p></li><li><p>-gcutil: 显示内容与gc基本相同，主要关注百分比</p></li><li><p>-gccause: 与gcutil功能一样，但会输出最后一次gc的原因</p></li><li><p>-gcnew: 显示新生代GC状况</p></li></ul><p>示例如下图:</p><p><img src="`+c+`" alt="" loading="lazy"></p><ul><li>SOC: 第一个幸存区大小，单位为字节</li><li>S1C: 第二次幸存区大小，单位为字节</li><li>S0U: 第一个幸存区已使用的大小，单位为字节</li><li>S1U: 第二个幸存区已使用的大小，单位为字节</li><li>EC: Eden空间的大小</li><li>EU: Eden已使用空间的大小</li><li>OC: 老年代的大小</li><li>OU：老年代已使用的大小</li><li>MC: 方法区的大小</li><li>MU: 方法区已使用的大小</li><li>CCSC: 压缩类空间的大小</li><li>CCSU: 压缩类已使用空间的大小</li><li>YGC: young gc次数</li><li>YGCT: yong gc消耗的时间</li><li>FGC: full gc次数</li><li>PGCT: full gc时间</li><li>GCT: 应用程序启动到采样gc总时间</li></ul><h3 id="jinfo" tabindex="-1"><a class="header-anchor" href="#jinfo" aria-hidden="true">#</a> jinfo</h3><p>作用： 查看和修改JVM配置信息</p><p>命令格式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jinfo [option] &lt;pid&gt;
       
jinfo [option] &lt;executable &lt;core&gt;
      
jinfo [option] [server_id@]&lt;remote server IP or hostname&gt;

#查看
jinfo -sysprops PID #查看由System.getProperties()取得的参数

jinfo -flags PID  #查看曾经赋值得一些参数

jinfo -flag 具体参数 PID #查看某个java进程的具体参数的值


#修改
jinfo -flag [+|-]具体参数 PID  ## boolean类型修改

jinfo -flag 具体参数=参数值 PID ##非boolean类型


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="" loading="lazy"></p><p><strong>只有标记为manageable的flag才可以被实时修改</strong>，查看manageable参数命令为 java --XX:+PrintFlagsFinal -version| grep manageable</p><h3 id="jmap" tabindex="-1"><a class="header-anchor" href="#jmap" aria-hidden="true">#</a> jmap</h3><p>作用：dump文件和获取堆内存使用情况</p><p>命令格式 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jmap [option] &lt;pid&gt;

jmap [option] &lt;executable &lt;core&gt;

jmap [option] [server_id@]&lt;remote server IP or hostname&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.手动导出内存映像文件  
# format =b表面格式与hprof对应起来，表面这是一个标准的格式
jmap -dump:format=b,file=d:\\1.hprof PID

## live 只保存堆中存活的对象
jmap -dump:live,format=b,file=d:\\1.hprof PID

2.OOM自动生成内存镜像文件
设置JVM参数；
-XX : +HeapDumpOnOutOfMemoryError:在程序发生00M时，导出应用程序的当前堆快照。
-XX:HeapDumpPath:可以指定堆快照的保存位置。

3.显示堆内存相关信息
jmap -heap PID &gt;1.txt

jmap -histo PID&gt;2.txt

4.查看系统的ClassLoader信息
jmap -permstat pid

5.查看堆积在finalizer队列中的对象
jmap -finalizerinfo 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>由于jmap将访问堆中的所有对象，为了保证在此过程中不被应用线程干扰，jmap需要借助安全点机制，让所有线程停留在不改变堆中数据的状态。也就是说，由jmap导出的堆快照必定是安全点位置的。这可能导致基于该堆快照的分析结果存在偏差。</strong></p><p>实例如下图：</p><p><img src="`+o+'" alt="" loading="lazy"></p><h3 id="jhat" tabindex="-1"><a class="header-anchor" href="#jhat" aria-hidden="true">#</a> jhat</h3>',33),j={href:"http://localhost:7000/%E3%80%82",target:"_blank",rel:"noopener noreferrer"},f=l(`<p>命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jhat filePath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例如下：</p><p><img src="`+p+'" alt="" loading="lazy"></p>',4),_={href:"http://localhost:7000",target:"_blank",rel:"noopener noreferrer"},x=l('<p><img src="'+m+`" alt="" loading="lazy"></p><h3 id="jstack" tabindex="-1"><a class="header-anchor" href="#jstack" aria-hidden="true">#</a> jstack</h3><p>作用:用于生成虚拟机指定进程当前时刻的线程快照(虚拟机堆栈跟踪)。线程快照就是当前虚拟机内指定进程的每一条线程正在执行的方法堆栈的集合。</p><p>命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> jstack [-l] &lt;pid&gt;
 jstack -F [-m] [-l] &lt;pid&gt;
 jstack [-m] [-l] &lt;executable&gt; &lt;core&gt;
 jstack [-m] [-l] [server_id@]&lt;remote server IP or hostname&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>option参数</p><ul><li>-F :当正常输出的请求不被响应时，强制输出线程堆栈</li><li>-l : 除堆栈外，显示关于锁的附加信息入</li><li>-m: 如果调用到本地方法的话，可以显示C/C++的堆栈</li><li>-h: 帮助操作</li></ul><h3 id="jcmd" tabindex="-1"><a class="header-anchor" href="#jcmd" aria-hidden="true">#</a> jcmd</h3><p>作用：它是一个多功能的工具，可以用来实现前面除了jstat之外所有命令的功能。比如:用它来导出堆、内存使用、查看Java进程、导出线程信息、执行GC、JVM运行时间等,官方推荐使用jcmd代替其他命令。</p><p>常用命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.列出所有JVM进程
jcmd -l 

2.查看指定PID支持的操作
jcmd PID help 

3.jcmd操作
jcmd PID 支持的操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例演示：</p><p><img src="`+u+'" alt="" loading="lazy"></p><p>使用jcmd导出dump:</p><p><img src="'+b+'" alt="" loading="lazy"></p>',15);function C(P,I){const n=d("ExternalLinkIcon");return t(),r("div",null,[h,e("p",null,[i("作用：dump分析工具。使用了jhat命令，就启动了一个http服务，端口是7000，即"),e("a",j,[i("http://localhost:7000/。"),a(n)]),i(" jhat命令在JDK9、JDK10中已经被删除，官方建议用Visua1VM代替，所以不详细学习。")]),f,e("p",null,[i("访问"),e("a",_,[i("http://localhost:7000"),a(n)]),i(",如图")]),x])}const V=s(g,[["render",C],["__file","886.JVM命令行工具篇.html.vue"]]);export{V as default};

import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,b as l}from"./app-ef0b4d9d.js";const n="/assets/20220103001309-6c5bc83d.png",s="/assets/20220103001349-e3af7257.png",r={},d=l(`<h2 id="jvm参数类型" tabindex="-1"><a class="header-anchor" href="#jvm参数类型" aria-hidden="true">#</a> JVM参数类型</h2><p>JVM参数分为三种标准参数、-X型参数和-XX型参数。</p><h3 id="标准参数选项" tabindex="-1"><a class="header-anchor" href="#标准参数选项" aria-hidden="true">#</a> 标准参数选项</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\xw&gt;java -help
用法: java [-options] class [args...]
           (执行类)
   或  java [-options] -jar jarfile [args...]
           (执行 jar 文件)
其中选项包括:
    -d32          使用 32 位数据模型 (如果可用)
    -d64          使用 64 位数据模型 (如果可用)
    -server       选择 &quot;server&quot; VM
                  默认 VM 是 server.

    -cp &lt;目录和 zip/jar 文件的类搜索路径&gt;
    -classpath &lt;目录和 zip/jar 文件的类搜索路径&gt;
                  用 ; 分隔的目录, JAR 档案
                  和 ZIP 档案列表, 用于搜索类文件。
    -D&lt;名称&gt;=&lt;值&gt;
                  设置系统属性
    -verbose:[class|gc|jni]
                  启用详细输出
    -version      输出产品版本并退出
    -version:&lt;值&gt;
                  警告: 此功能已过时, 将在
                  未来发行版中删除。
                  需要指定的版本才能运行
    -showversion  输出产品版本并继续
    -jre-restrict-search | -no-jre-restrict-search
                  警告: 此功能已过时, 将在
                  未来发行版中删除。
                  在版本搜索中包括/排除用户专用 JRE
    -? -help      输出此帮助消息
    -X            输出非标准选项的帮助
    -ea[:&lt;packagename&gt;...|:&lt;classname&gt;]
    -enableassertions[:&lt;packagename&gt;...|:&lt;classname&gt;]
                  按指定的粒度启用断言
    -da[:&lt;packagename&gt;...|:&lt;classname&gt;]
    -disableassertions[:&lt;packagename&gt;...|:&lt;classname&gt;]
                  禁用具有指定粒度的断言
    -esa | -enablesystemassertions
                  启用系统断言
    -dsa | -disablesystemassertions
                  禁用系统断言
    -agentlib:&lt;libname&gt;[=&lt;选项&gt;]
                  加载本机代理库 &lt;libname&gt;, 例如 -agentlib:hprof
                  另请参阅 -agentlib:jdwp=help 和 -agentlib:hprof=help
    -agentpath:&lt;pathname&gt;[=&lt;选项&gt;]
                  按完整路径名加载本机代理库
    -javaagent:&lt;jarpath&gt;[=&lt;选项&gt;]
                  加载 Java 编程语言代理, 请参阅 java.lang.instrument
    -splash:&lt;imagepath&gt;
                  使用指定的图像显示启动屏幕
有关详细信息, 请参阅 http://www.oracle.com/technetwork/java/javase/documentation/index.html。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="x参数选项" tabindex="-1"><a class="header-anchor" href="#x参数选项" aria-hidden="true">#</a> X参数选项</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\xw&gt;java -X
    -Xmixed           混合模式执行 (默认)
    -Xint             仅解释模式执行
    -Xbootclasspath:&lt;用 ; 分隔的目录和 zip/jar 文件&gt;
                      设置搜索路径以引导类和资源
    -Xbootclasspath/a:&lt;用 ; 分隔的目录和 zip/jar 文件&gt;
                      附加在引导类路径末尾
    -Xbootclasspath/p:&lt;用 ; 分隔的目录和 zip/jar 文件&gt;
                      置于引导类路径之前
    -Xdiag            显示附加诊断消息
    -Xnoclassgc       禁用类垃圾收集
    -Xincgc           启用增量垃圾收集
    -Xloggc:&lt;file&gt;    将 GC 状态记录在文件中 (带时间戳)
    -Xbatch           禁用后台编译
    -Xms&lt;size&gt;        设置初始 Java 堆大小
    -Xmx&lt;size&gt;        设置最大 Java 堆大小
    -Xss&lt;size&gt;        设置 Java 线程堆栈大小
    -Xprof            输出 cpu 配置文件数据
    -Xfuture          启用最严格的检查, 预期将来的默认值
    -Xrs              减少 Java/VM 对操作系统信号的使用 (请参阅文档)
    -Xcheck:jni       对 JNI 函数执行其他检查
    -Xshare:off       不尝试使用共享类数据
    -Xshare:auto      在可能的情况下使用共享类数据 (默认)
    -Xshare:on        要求使用共享类数据, 否则将失败。
    -XshowSettings    显示所有设置并继续
    -XshowSettings:all
                      显示所有设置并继续
    -XshowSettings:vm 显示所有与 vm 相关的设置并继续
    -XshowSettings:properties
                      显示所有属性设置并继续
    -XshowSettings:locale
                      显示所有与区域设置相关的设置并继续


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>-X 选项是非标准选项, 如有更改, 不另行通知。</strong></p><h3 id="xx参数选项" tabindex="-1"><a class="header-anchor" href="#xx参数选项" aria-hidden="true">#</a> XX参数选项</h3><p>分类：分为boolean类型和非boolean类型。boolean类型格式为<code>-XX:+&lt;option&gt;</code>表示启用。<code>-XX:-&lt;option&gt;</code>表示禁用，非boolean类型格式<code>-XX:&lt;option&gt;=&lt;number&gt;</code>或者<code>-XX:&lt;option&gt;=&lt;string&gt;</code>。</p><h2 id="添加jvm参数选项" tabindex="-1"><a class="header-anchor" href="#添加jvm参数选项" aria-hidden="true">#</a> 添加JVM参数选项</h2><h3 id="运行时" tabindex="-1"><a class="header-anchor" href="#运行时" aria-hidden="true">#</a> 运行时</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 设置非Boolean类型参数
jinfo -flag &lt;name&gt;=&lt;value&gt; &lt;pid&gt;

## 设置Boolean类型参数
jinfo -flag [+][-] &lt;name&gt; &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jar包" tabindex="-1"><a class="header-anchor" href="#jar包" aria-hidden="true">#</a> jar包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -xms20m jar demo.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> Tomcat</h3><ul><li>Linux系统下可以在tomcat/bin/catalina.sh中添加类似如下配置：JAVA_OPTS=&quot;-Xms512M -Xmx1024M&quot;</li><li>Windows系统下载catalina.bat中添加类似如下配置：set &quot;JAVA_OPTS=-Xms512M -Xmx1024M&quot;</li></ul><h2 id="常用的jvm参数选项" tabindex="-1"><a class="header-anchor" href="#常用的jvm参数选项" aria-hidden="true">#</a> 常用的JVM参数选项</h2><h3 id="打印设置的xx选项及值" tabindex="-1"><a class="header-anchor" href="#打印设置的xx选项及值" aria-hidden="true">#</a> 打印设置的XX选项及值</h3><ul><li><code>-XX:+PrintCommandLineFlags</code> ，可以在程序运行前打印出用户手动设置或者JVM自动设置的XX选项</li><li><code>-XX:+PrintFlagsInitial</code>,打印出所有XX选项的默认值</li><li><code>-XX:+PrintFlagsFinal</code>,打印出XX选项在运行程序时生效的值</li><li><code>-XX:+PrinitVMOptions</code>,打印JVM的参数</li></ul><h3 id="堆栈参数设置" tabindex="-1"><a class="header-anchor" href="#堆栈参数设置" aria-hidden="true">#</a> 堆栈参数设置</h3><h4 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h4><ul><li>-Xss128k,设置每个线程的栈大小为128K</li></ul><h4 id="堆内存" tabindex="-1"><a class="header-anchor" href="#堆内存" aria-hidden="true">#</a> 堆内存</h4><ul><li>-Xms3550m,设置JVM初始堆内存为3550m</li><li>-Xmx3550m,设置JVM最大堆内存为3550m</li><li>-Xmn2g,设置年轻代大小为2g，等价于-XX:NewSize=2g -XX:MaxNewSize=2g，也就是设置年轻代初始值和年轻代最大值都是2G，官方推荐配置为整个堆大小的3/8</li><li>-XX:NewSize=1024m,设置年轻代初始值为1024M</li><li>-XX:MaxNewSize=1024m,设置年轻代最大值为1024M</li><li>-XX:SurvivorRatio=8,设置年轻代中Eden区与一个Survivor区的比值，默认为8</li><li>-XX:+UseAdaptiveSizePolicy,自动选择各区大小比例。默认开启，将会导致Eden区和Survivor区的比例自动分配，因此也会引起我们默认值-XX:SurvivorRatio=8失效</li><li>-XX:NewRatio=4,设置老年代与年轻代（包括1个Eden区和2个Survivor区）的比值，默认为2。根据实际情况进行设置，主要根据对象生命周期来进行分配，如果对象生命周期很长，那么让老年代大一点，否则让新生代大一点</li><li>-XX:PretenureSizeThreadshold=1024，设置让大于此阈值的对象直接分配在老年代，单位为字节，只对Serial、ParNew收集器有效。</li><li>-XX:MaxTenuringThreshold=15，默认值为15，新生代每次MinorGc后的年龄+1，当对象年龄大于15时进入老年代。</li><li>-XX:+PrintTenuringDistribution，让JVM每次MonitorGc时打印当前使用Survivor中对象的年龄分布。</li><li>-XX:TargetSurvivorRatio，表示MinorGc结束后Survivor区域中占用空间的期望比例。</li></ul><h4 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h4><ul><li>-XX:PermSize=256m，设置永久代初始值为256M</li><li>-XX:MaxPermSize=256m，设置永久代最大值为256M</li><li>-XX:MetaspaceSize，设置元空间初始大小</li><li>-XX:MaxMetaspaceSize，元空间最大值，默认没有限制</li><li>-XX:+UseCompressedOops，使用压缩对象指针</li><li>-XX:+UseCompressedClassPointers，使用压缩类指针</li><li>-XX:CompressedClassSpaceSize，设置Klass Metaspace的大小，默认1G</li></ul><h4 id="直接内存" tabindex="-1"><a class="header-anchor" href="#直接内存" aria-hidden="true">#</a> 直接内存</h4><ul><li>-XX:MaxDirectMemorySize，指定DirectMemory容量，若未指定，则默认与Java堆最大值一样</li></ul><h3 id="outofmemory相关选项" tabindex="-1"><a class="header-anchor" href="#outofmemory相关选项" aria-hidden="true">#</a> OutOfMemory相关选项</h3><ul><li>-XX:+HeapDumpOnOutMemoryError，表示在内存出现OOM的时候，生成Heap转储文件，以便后续分析，-XX:+HeapDumpBeforeFullGC和-XX:+HeapDumpOnOutMemoryError只能设置1个。</li><li>-XX:+HeapDumpBeforeFullGC，表示在出现FullGC之前，生成Heap转储文件，以便后续分析，-XX:+HeapDumpBeforeFullGC和-XX:+HeapDumpOnOutMemoryError只能设置1个，请注意FullGC可能出现多次，那么dump文件也会生成多个</li><li>-XX:HeapDumpPath=<code>&lt;</code>path<code>&gt;</code>，指定heap转存文件的存储路径，如果不指定，就会将dump文件放在当前目录中</li><li>-XX:OnOutOfMemoryError，指定一个可行性程序或者脚本的路径，当发生OOM的时候，去执行这个脚本</li></ul><h2 id="垃圾回收器相关选项" tabindex="-1"><a class="header-anchor" href="#垃圾回收器相关选项" aria-hidden="true">#</a> 垃圾回收器相关选项</h2><h3 id="查看默认的垃圾回收器" tabindex="-1"><a class="header-anchor" href="#查看默认的垃圾回收器" aria-hidden="true">#</a> 查看默认的垃圾回收器</h3><ul><li>-XX:+PrintCommandLineFlags,查看命令行相关参数</li></ul><h3 id="serial回收器" tabindex="-1"><a class="header-anchor" href="#serial回收器" aria-hidden="true">#</a> Serial回收器</h3><ul><li>-XX:+UseSerialGC,指定年轻代和老年大都使用串行收集器。等价于新生代用Serial GC,老年代用Serial Old GC</li></ul><h3 id="parnew回收器" tabindex="-1"><a class="header-anchor" href="#parnew回收器" aria-hidden="true">#</a> Parnew回收器</h3><ul><li>-XX:+UseParNewGC,手动指定使用ParNew收集器进行内存回收任务，年轻代使用并行收集器，不影响老年代。</li><li>-XX:+ParalleGCThreads,设置年轻代并行收集器的线程数，一般最好与CPU数量相等，以避免过多的线程数影响垃圾收集性能。</li></ul><h3 id="parallel回收器" tabindex="-1"><a class="header-anchor" href="#parallel回收器" aria-hidden="true">#</a> Parallel回收器</h3><ul><li>-XX:+UseParallelGC,手动指定年轻代使用Parallel并行收集器执行内存回收任务。-XX:+UseParallelOldGC,手动指定老年代都是使用并行回收收集器。上面这两个参数只要开启一个，两个同时生效。</li><li>-XX: ParallelGCThreads,设置年轻代并行收集器的线程数。一般地，最好与CPU数量相等，以避免过多的线程数影响垃圾收集性能。·在默认情况下，当CPU 数量小于8个， ParallelGCThreads 的值等于CPU 数量。当CPU数量大于8个，ParallelGCThreads 的值等于3+[5*CPU_Count]/8] 。</li><li>-XX:MaxGCPauseMillis,设置垃圾收集器最大停顿时间(即STw的时间)。单位是毫秒。为了尽可能地把停顿时间控制在MaxGCPauseMills以内，收集器在工作时会调整Java堆大小或者其他一些参数。对于用户来讲，停顿时间越短体验越好。但是在服务器端，我们注重高并发，整体的吞吐量，所以服务器端适合Parallel，进行控制。该参数使用需谨慎。</li><li>-XX:GCTimeRatio垃圾收集时间占总时间的比例(= 1/ (N + 1))。用于衡量吞吐量的大小。·取值范围（0,100）,默认值99，也就是垃圾回收时间不超过1%。·与前一个-XX:MaxGCPauseMillis参数有一定矛盾性。暂停时间越长，Radio参数就容易超过设定的比例。</li><li>-XX:+UseAdaptiveSizePolicy,设置Parallel Scavenge收集器具有自适应调节策略。在这种模式下，年轻代的大小、Eden和Survivor的比例、晋升老年代的对象年龄等参数会被自动调整，已达到在堆大小、吞吐量和停顿时间之间的平衡点。·在手动调优比较困难的场合，可以直接使用这种自适应的方式，仅指定虚拟机的最大堆、目标的吞吐量（GCTimeRatio）和停顿时间(MaxGCPauseMills)，让虚拟机自己完成调优工作。</li></ul><p><strong>注意：</strong></p><ul><li>Parallel回收器主打吞吐量，而CMS和G1主打低延迟，如果主打吞吐量，那么就不应该限制最大停顿时间，所以-XX:MaxGCPauseMills不应该设置</li><li>-XX:MaxGCPauseMills中的调整堆大小通过默认开启的-XX:+UseAdaptiveSizePolicy来实现</li><li>-XX:GCTimeRatio用来衡量吞吐量，并且和-XX:MaxGCPauseMills矛盾，因此不会同时使用</li></ul><h3 id="cms回收器" tabindex="-1"><a class="header-anchor" href="#cms回收器" aria-hidden="true">#</a> CMS回收器</h3><ul><li>-XX:+UseConcMarkSweepGC,手动指定使用CMS收集器执行内存回收任务。开启该参数后会自动将-XX:+UseParNewGC打开。即:ParNew(Young区用)+CNS(01d区用)+Serial old的组合。<br> 开启该参数后会自动将-XX：+UseParNewGC打开.即：ParNew(Young区用)+CMS(Old区用)+Serial old的组合。</li><li>-XX:CMSInitiatingOccupanyFraction,设置堆内存使用率的阀值，一旦达到该阈值，便开始进行回收。JDK5及以前版本的默认值为68,即当老年代的空间使用率达到68%时，会执行一次CNS回收。JDK6及以上版本默认值为92%，·如果内存增长缓慢，则可以设置一个稍大的值，大的阈值可以有效降低CMS的触发频率，减少老年代回收的次数可以较为明显地改善应用程序性能。反之，如果应用程序内存使用率增长很快，则应该降低这个阙值，以避免频繁触发老年代串行收集器。因此通过该选项便可以有效降低Full GC的执行次数。</li><li>-XX:+UseCMSCompactAtFullcollection,用于指定在执行完Full GC后对内存空间进行压缩整理，以此避免内存碎片的产生。不过由于内存压缩整理过程无法并发执行，所带来的问题就是停顿时间变得更长了。</li><li>-XX:CMSFullGcsBeforeCompaction,设置在执行多少次Full GC后对内存空间进行压缩整理。</li><li>-XX: ParallelCMSThreads,设置CMS的线程数量。 CMS 默认启动的线程数是(ParallelGCThreads+3)/4，ParallelGCThreads 是年轻代并行收集器的线程数。当CPU 资源比较紧胀时，受到CMS收集器线程的影响，应用程序的性能在垃圾回收阶段可能会非常糟糕。</li><li>-XX:ConcGCThreads:设置并发垃圾收集的线程数，默认该值是基于ParallelGCThreadsi计算出来的</li><li>-XX:+UseCMSInitiating0ccupancyOnly:是否动态可调，用这个参数可以使CMS一直按CMSInitiatingOccupancyFraction设定的值启动</li><li>-XX:+CMSScavengeBeforeRemark:强制hotspot虚拟机在cms remark阶段之前做一次minorgc，用于提高remark阶段的速度</li><li>-XX:+CMSClassUnloadingEnable:如果有的话，启用回收Perm区(JDK8之前)</li><li>-XX:+CMSParallelInitialEnabled:用于开启CMS initial-mark阶段采用多线程的方式进行标记，用于提高标记速度，在Java8开始已经默认开启:</li><li>-XX:+CMSParallelRemarkEnabled:用户开启CNS remark阶段采用多线程的方式进行重新标记，默认开启。</li><li>-XX:+ExplicitGCInvokesConcurrentAndUnloadsclasses这两个参数用户指定hotspot虚拟在执行System.gc()时使用CMS周期;</li><li>-XX:+CMSPrecleaningEnabled:指定CNS是否需要进行Pre cleaning这个阶段。</li></ul><p><strong>CMS在JDK9标记为Deprecate,在JDK14中被移除了。</strong></p><h3 id="g1回收器" tabindex="-1"><a class="header-anchor" href="#g1回收器" aria-hidden="true">#</a> G1回收器</h3><ul><li>-XX:+UseG1GC，手动指定使用G1收集器执行内存回收任务。</li><li>-XX:G1HeapRegionSize，设置每个Region的大小。值是2的幂，范围是1MB到32MB之间，目标是根据最小的Java堆大小划分出约2048个区域。默认是堆内存的1/2000。</li><li>-XX:MaxGCPauseMi1lis，设置期望达到的最大GC停顿时间指标(JVM会尽力实现，但不保证达到)。默认值是200ms</li><li>-XX:ParallelGCThread，设置STW时GC线程数的值。最多设置为8</li><li>-XX:ConcGCThreads，设置并发标记的线程数。将n设置为并行垃圾回收线程数(ParallelGCThreads)的1/4左右。</li><li>-XX:InitiatingHeap0ccupancyPercent，设置触发并发GC周期的Java堆占用率阈值。超过此值，就触发Gc。默认值是45。</li><li>-XX:G1NewSizePercent、-XX:G1MaxNewSizePercent，新生代占用整个堆内存的最小百分比（默认5%）、最大百分比（默认60%）</li><li>-XX:G1ReservePercent=10，保留内存区域,防止 to space ( Survivor中的to区）溢出。</li></ul><p><strong>如果使用G1垃圾收集器，不建议设置-Xmn和-XX:NewRatio，毕竟可能影响G1的自动调节</strong></p><h3 id="gc日志相关" tabindex="-1"><a class="header-anchor" href="#gc日志相关" aria-hidden="true">#</a> GC日志相关</h3><ul><li><p>-verbose:gc，输出日志信息，默认输出的标准输出,格式如下：</p><p><img src="`+n+'" alt="" loading="lazy"></p></li><li><p>-XX:+PrintGC，等同于-verbose:gc表示打开简化的日志</p></li><li><p>-XX:+PrintGCDetails，在发生垃圾回收时打印内存回收详细的日志，并在进程退出时输出当前内存各区域的分配情况，格式如下：</p><p><img src="'+s+'" alt="" loading="lazy"></p></li><li><p>-XX:+PrintGCTimeStamps，程序启动到GC发生的时间秒数，不可以独立使用，需要配合-XX:+PrintGCDetails使用</p></li><li><p>-XX:+PrintGCDateStamps，输出GC发生时的时间戳（以日期的形式，例如：2013-05-04T21:53:59.234+0800），不可以独立使用，可以配合-XX:+PrintGCDetails使用</p></li><li><p>-XX:+PrintHeapAtGC，每一次GC前和GC后，都打印堆信息</p></li><li><p>-XIoggc<code>:&lt;file&gt;</code>，把GC日志写入到一个文件中去，而不是打印到标准输出中</p></li><li><p>-XX:TraceClassLoading，监控类的加载</p></li><li><p>-XX:PrintGCApplicationStoppedTime，打印GC时线程的停顿时间</p></li><li><p>-XX:+PrintGCApplicationConcurrentTime，垃圾收集之前打印出应用未中断的执行时间</p></li><li><p>-XX:+PrintReferenceGC，记录回收了多少种不同引用类型的引用</p></li><li><p>-XX:+PrintTenuringDistribution，让JVM在每次MinorGC后打印出当前使用的Survivor中对象的年龄分布</p></li><li><p>-XX:+UseGCLogFileRotation，启用GC日志文件的自动转储</p></li><li><p>-XX:NumberOfGCLogFiles=1，GC日志文件的循环数目</p></li><li><p>-XX:GCLogFileSize=1M，控制GC日志文件的大小</p></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li>-XX:+DisableExplicitGC，禁用hotspot执行System.gc()，默认禁用</li><li>-XX:ReservedCodeCacheSize=<code>&lt;</code>n<code>&gt;</code>[g|m|k]、-XX:InitialCodeCacheSize=<code>&lt;</code>n<code>&gt;</code>[g|m|k]，指定代码缓存的大小</li><li>-XX:+UseCodeCacheFlushing，使用该参数让jvm放弃一些被编译的代码，避免代码缓存被占满时JVM切换到interpreted-only的情况</li><li>-XX:+DoEscapeAnalysis，开启逃逸分析</li><li>-XX:+UseBiasedLocking，开启偏向锁</li><li>-XX:+UseLargePages，开启使用大页面</li><li>-XX:+PrintTLAB，打印TLAB的使用情况</li><li>-XX:TLABSize，设置TLAB大小</li></ul>',51),t=[d];function c(o,v){return e(),a("div",null,t)}const m=i(r,[["render",c],["__file","888.JVM运行参数.html.vue"]]);export{m as default};

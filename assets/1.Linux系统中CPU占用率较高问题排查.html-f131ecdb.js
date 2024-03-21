import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as o,a as e,e as i,d as l,b as s}from"./app-ef0b4d9d.js";const c="/assets/image-20240320100442127-bff4ca26.png",r="/assets/image-20240320100357972-0866710e.png",p="/assets/image-20240320092814690-fec840a4.png",u={},m=s('<h1 id="cpu使用率高排查" tabindex="-1"><a class="header-anchor" href="#cpu使用率高排查" aria-hidden="true">#</a> CPU使用率高排查</h1><ul><li>使用top命令，然后按shift+p按照cpu排序</li><li>使用top -H -p [进程id]，找到进程中消耗资源最高的线程的id</li><li>将线程id转为16进制， printf &quot;%x\\n&quot; [线程id]</li><li>执行 jstack [进程id] |grep -A 10 [线程id的16进制]</li></ul><h1 id="linux压测和性能排查工具" tabindex="-1"><a class="header-anchor" href="#linux压测和性能排查工具" aria-hidden="true">#</a> linux压测和性能排查工具</h1><p>目标：分析Linux相关性能指标，找出CPU平均负载升高的进程和原因。常见的原因有多个进程争夺CPU、等待IO、CPU上下文切换。</p><p>sysstat工具包的命令mpstat+pidsat</p><ul><li>命令：mpstat(全局)多核CPU性能分析程序，实时查看每个CPU的性能指标和全部CPU的平均性能指标</li><li>命令：pidstat(局部)实时查看进程的CPU、内存、I/O、上下文切换等指标</li><li>命令：vmstat(全局)实时查看系统的上下文切换（跨进程间，同个进程里多个子线程）、系统中断次数</li></ul><p>安装：</p>',7),v={href:"https://github.com/sysstat/sysstat/releases/tag/v12.7.5",target:"_blank",rel:"noopener noreferrer"},g=s(`<li><p>执行以下安装命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> gcc <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> <span class="token function">unzip</span> <span class="token parameter variable">-y</span>
 <span class="token function">unzip</span> sysstat-12.7.5.zip 
<span class="token builtin class-name">cd</span> sysstat-12.7.5
./configure
<span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
pidstat <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mpstat命令：</p><ul><li><p>使用场景：当系统变慢，CPU平均负载增大时，判断是CPU的使用率增大还是IO压力增大的情况导致。</p></li><li><p><strong>语法</strong>：</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mpstat [-P {cpu|ALL}] [interval [count]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-P {cpu|ALL}</code>：指定要监控的 CPU。CPU 编号范围从 0 到总 CPU 数量减 1。</li><li><code>interval</code>：连续采样之间的时间间隔。</li><li><code>count</code>：采样次数（与 <code>interval</code> 一起使用）。</li></ul></li></ul></li><li><p><strong>用法示例</strong>：</p><ul><li><p>要每 2 秒查看所有 CPU 核心的当前状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mpstat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将提供 CPU 使用率的概览，包括用户、系统、空闲和其他状态。</p></li><li><p>要查看每个 CPU 核心的详细实时信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mpstat -P ALL 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出将显示各个核心的统计数据，包括用户、系统和空闲百分比。</p></li></ul></li><li><p><strong>输出字段</strong>：</p><ul><li><code>%usr</code>：在间隔内的用户态 CPU 时间。</li><li><code>%nice</code>：具有负 nice 值的进程的 CPU 时间。</li><li><code>%sys</code>：内核（系统）时间。</li><li><code>%iowait</code>：等待 I/O 操作的时间。</li><li><code>%irq</code>：处理硬件中断的时间。</li><li><code>%soft</code>：处理软件中断的时间。</li><li><code>%idle</code>：空闲时间（不包括 I/O 等待）。</li></ul></li></ul><p>pidstat命令：</p><p><strong>pidstat</strong> 是 <strong>sysstat</strong> 工具的一部分，用于监控全部或指定进程的 CPU、内存、线程、设备 I/O 等系统资源的占用情况。它提供了关于进程性能的详细信息。以下是一些常用的 <strong>pidstat</strong> 参数和示例：</p><ol><li><p><strong>查看所有进程的 CPU 使用情况</strong>（默认参数 <code>-u</code>）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pidstat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将显示各个进程的 CPU 使用率，包括用户态、内核态和虚拟机占用的百分比。</p></li><li><p><strong>查看各活动进程的内存使用情况</strong>（参数 <code>-r</code>）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pidstat -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+`" alt="image-20240320100442127" loading="lazy"></p><p>输出包括进程标识符、每秒发生的次要错误、每秒发生的主要错误、虚拟地址大小、常驻集合大小等。</p><ol><li><strong>minflt/s</strong>：每秒发生的次要页面错误（minor page faults）的数量。次要页面错误发生在进程访问当前不在物理 RAM（主内存）中的内存页面时。操作系统随后从磁盘或交换空间中检索所需的页面。次要页面错误在性能影响方面相对较低。</li><li><strong>majflt/s</strong>：每秒发生的主要页面错误（major page faults）的数量。主要页面错误发生在进程访问不仅在 RAM 中缺失，而且还需要从磁盘或交换空间加载的内存页面时。主要页面错误在性能方面的成本较高，因为它涉及磁盘 I/O。</li><li><strong>VSZ（虚拟内存大小）</strong>：这是进程使用的总虚拟内存。它包括实际物理内存（RSS）和任何交换到磁盘的内存（如果适用）。VSZ 表示为进程保留的整个地址空间，包括映射的内存和其他资源。</li><li><strong>RSS（常驻集合大小）</strong>：RSS 表示当前在物理 RAM（常驻内存）中的进程内存部分。它不包括任何交换出的内存。RSS 是了解进程实际内存使用情况的关键指标。</li><li><strong>%MEM</strong>：这个百分比表示进程的 RSS 占用的物理 RAM 的比例（作为总系统内存的一部分）。它提供了相对于系统容量的快速内存使用概览。</li><li><strong>Command</strong>：此字段显示与资源使用相关联的进程或命令的名称。</li></ol></li><li><p><strong>显示各个进程的 I/O 使用情况</strong>（参数 <code>-d</code>）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pidstat -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20240320100357972" loading="lazy"></p><p>输出包括进程 ID、每秒从磁盘读取的 KB、每秒写入磁盘的 KB 等。</p><ol><li><strong>cswch/s</strong>（主动上下文切换）：这是指操作系统在每秒内主动切换进程的次数。主动上下文切换通常发生在进程主动放弃 CPU 使用权，例如等待 I/O 操作、等待资源、进程时间片用完等情况。主动上下文切换的数量越高，表示系统中有更多的进程在竞争 CPU 资源。</li><li><strong>nvcswch/s</strong>（被动上下文切换）：这是指操作系统在每秒内由于其他原因（如硬件中断、时钟中断等）而切换进程的次数。被动上下文切换通常是由于外部事件触发，而不是进程主动放弃 CPU。被动上下文切换的数量也会影响系统的性能。</li></ol></li><li><p><strong>显示每个进程的上下文切换情况</strong>（参数 <code>-w</code>）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pidstat -w -p 2831
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出包括进程 ID、每秒主动任务上下文切换数量、被动任务上下文切换数量等。</p></li><li><p><strong>显示选择任务的线程的统计信息外的额外信息</strong>（参数 <code>-t</code>）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pidstat -t -p 2831
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>​ f.输出顺序</p><p>​</p><p>输出包括主线程的表示、线程 ID、CPU 使用率、命令名等。</p></li>`,1),b=s(`<p>模拟工具：</p><p>stress多进程工具，模拟IO密集型应用、CPU密集型应用、多进程等待CPU调度场景，对内存、CPU、io等情况进行压测。</p><ul><li><p>安装命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token function">install</span> stress <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装结果</p><p><img src="`+p+'" alt="image-20240320092814690" loading="lazy"></p></li><li><p>参数说明</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>--timeout</td><td>指定运行多少秒</td></tr><tr><td>--cpu N</td><td>产生多个处理sync函数的CPU进程，每个进程高频的计算随机数的平方根，模拟CPU计算密集型场景</td></tr><tr><td>--io N</td><td>产生多个处理sync函数的磁盘/O进程，每个进程高频调用syc0,刷内存缓冲区到磁盘，模拟IVO密集型场景</td></tr><tr><td>--vm N</td><td>每个进程高频调用内存分配malloc()和内存释放free()函数</td></tr><tr><td>--vm-bytes</td><td>指定malloc0时申请内存的字节数，默认256MB</td></tr><tr><td>-hdd N</td><td>产生N个高频执行write和unlink函数的进程（创建/写入/删除文件)，属于磁盘IO进程</td></tr><tr><td>--hdd-bytes</td><td>每个hdd workeri进程写的byte数，默认1G</td></tr></tbody></table></li><li><p>需求一：模拟CPU密集型应用，系统是4核</p><ul><li>终端一模拟两个CPU核的使用率100%，对2个Cpu进行压力测试持续600S <code>stress --cpu 2 --timeout 600</code></li><li>终端二-d参数表示高亮显示变化的区域 <code>watch-d uptime</code></li><li>终端三mpstat查看CPU使用率情况，每5秒监控所有CPU情况 <code>mpstat-p ALL 5</code></li><li>终端四查看运行中的进程和任务，每5秒刷新一次 <code>pidstat-u 5</code></li></ul></li></ul><p>sysbench多线程基准测试工具，模拟上下文切换过多场景。</p>',4),h={href:"https://github.com/akopytov/sysbench",target:"_blank",rel:"noopener noreferrer"},x=s(`<li><p>安装命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install make automake libtool pkgconfig libaio-devel
yum -y install mariadb-devel openssl-devel
yum -y install postgresql-devel
unzip sysbench-master.zip
cd sysbench-master 
./autogen.sh
./configure --without-mysql
make &amp;&amp; make install
sysbench --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>需求：大量等待CPU的进程调度导致平均负载升高</p><ul><li>终端一模拟8个进程，也可以更多，持续600S。 <code>stress --cpu 8 --timeout 600s</code></li><li>终端二-d参数表示高亮显示变化的区域<code>watch-d uptime</code></li><li>终端三mpstat查看CPU使用率情况，每S秒监控所有CPU情况<code>mpstat-P ALL 2 3</code>每隔2秒出一个报告数据，一共出具3<br> 次</li><li>终端四查看运行中的进程和任务，每5秒刷新一次 <code>pidstat -u2 3</code>每隔2秒出一个报告数据，一共出具3次</li></ul></li><li><p>详细分析思路</p><ul><li>全局 <ul><li>uptime：运行1分钟后，4个核的CPU负载是比较高</li><li>mpstat: <ul><li>应用场景：当系统变慢，CPU平均负载增大时，判断是CPU的使用率增大，还是IO压力增大的情况导致</li><li>多次调用mpstat,.持续观察，平均负载升高，每个cpu利用率都高，使用率接近100%，iowait很低接近0，IO不是瓶颈</li><li>再进一步分析，CPU利用率高，主要是哪部分操作占据了CPU</li></ul></li><li>局部 <ul><li>pidstat:对进程和任务的使用情况进行，发现%wait高，说明cpu不够用在等待cpu调度上花费了不少时间</li><li>结论：8个进程在竞争4个cpu,每个进程等待cpu的时间达到50%(%wit),超出cpu计算能力的进程，导致了负载变高</li><li><code>pidstat -u</code> CPU情况，默认</li><li><code>pidstat -d </code> 磁盘IO情况，基本很低</li><li>举一反三：如果不是stress,其他进程造成这类影响的，靠这个思路也能排查出是哪个进程。</li></ul></li></ul></li></ul></li>`,3);function P(C,_){const t=n("ExternalLinkIcon");return d(),o("div",null,[m,e("ol",null,[e("li",null,[e("p",null,[i("下载安装包："),e("a",v,[i("https://github.com/sysstat/sysstat/releases/tag/v12.7.5"),l(t)])])]),g]),b,e("ul",null,[e("li",null,[e("p",null,[i("源码地址："),e("a",h,[i("https://github.com/akopytov/sysbench"),l(t)])])]),x])])}const f=a(u,[["render",P],["__file","1.Linux系统中CPU占用率较高问题排查.html.vue"]]);export{f as default};

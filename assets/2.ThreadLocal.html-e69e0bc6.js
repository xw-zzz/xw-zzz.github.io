import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const t="/assets/image-20230811145926575-9d9afae4.png",p={},o=e(`<h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h1><p>ThreadLocal即为线程变量，不同线程间相互隔离。</p><h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocalTest</span>  
<span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Data</span>  
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span>  
    <span class="token punctuation">{</span>  
        <span class="token comment">//实例总数  </span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">AtomicInteger</span> <span class="token constant">AMOUNT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">//对象的编号  </span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  
        <span class="token comment">//对象的内容  </span>
        <span class="token keyword">int</span> bar <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  
        <span class="token comment">//构造器  </span>
        <span class="token keyword">public</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
        <span class="token punctuation">{</span>  
            index <span class="token operator">=</span> <span class="token constant">AMOUNT</span><span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//总数增加，并且给对象编号  </span>
        <span class="token punctuation">}</span>  
        <span class="token annotation punctuation">@Override</span>  
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
        <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> index <span class="token operator">+</span> <span class="token string">&quot;@Foo{bar=&quot;</span> <span class="token operator">+</span> bar <span class="token operator">+</span> <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">//定义线程本地变量  </span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span><span class="token punctuation">&gt;</span></span> <span class="token constant">LOCAL_FOO</span> <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Foo</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>  
    <span class="token punctuation">{</span>  
        <span class="token comment">//获取自定义的混合型线程池  </span>
        <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span>  
                <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        <span class="token comment">//提交5个任务，将会用到5个线程  </span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>  
        <span class="token punctuation">{</span>  
            threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
            <span class="token punctuation">{</span>  
                <span class="token annotation punctuation">@SneakyThrows</span>  
                <span class="token annotation punctuation">@Override</span>                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
                <span class="token punctuation">{</span>  
                    <span class="token comment">//获取“线程本地变量”中当前线程所绑定的值  </span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">LOCAL_FOO</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>  
                    <span class="token punctuation">{</span>  
                        <span class="token comment">//设置“线程本地变量”中当前线程所绑定的值  </span>
                        <span class="token constant">LOCAL_FOO</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始的本地值：&quot;</span> <span class="token operator">+</span> <span class="token constant">LOCAL_FOO</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token comment">//每个线程执行10次  </span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>  
                    <span class="token punctuation">{</span>  
                        <span class="token class-name">Foo</span> foo <span class="token operator">=</span> <span class="token constant">LOCAL_FOO</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                        foo<span class="token punctuation">.</span><span class="token function">setBar</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">getBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//值增1  </span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;累加10次之后的本地值：&quot;</span> <span class="token operator">+</span> <span class="token constant">LOCAL_FOO</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
                    <span class="token comment">//删除“线程本地变量”中当前线程所绑定的值  </span>
                    <span class="token constant">LOCAL_FOO</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这点对于线程池中的线程尤其重要  </span>
                <span class="token punctuation">}</span>  
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下，可见每一个线程的Foo对象都是独立的：<br><img src="`+t+`" alt="" loading="lazy"></p><h1 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h1><p>在JDK 8版本中，每一个Thread线程内部都有一个Map（ThreadLocalMap），如果给一个Thread创建多个ThreadLocal实例，然后放置本地数据，那么当前线程的ThreadLocalMap中就会有多个“Key-Value对”，其中ThreadLocal实例为Key，本地数据为Value。</p><ul><li><p>set</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取当前线程</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取线程的ThreadLocalMap</span>
        <span class="token class-name">ThreadLocalMap</span> map <span class="token operator">=</span> <span class="token function">getMap</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token comment">//不存在初始化map</span>
            <span class="token function">createMap</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>get</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadLocalMap</span> map <span class="token operator">=</span> <span class="token function">getMap</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// key是ThreadLocal对象</span>
            <span class="token class-name">ThreadLocalMap<span class="token punctuation">.</span>Entry</span> e <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
                <span class="token class-name">T</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span>e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">setInitialValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThreadLocal提供了一个入口去操作ThreadLocalMap，ThreadLocalMap源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocalMap</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * The entries in this hash map extend WeakReference, using
         * its main ref field as the key (which is always a
         * ThreadLocal object).  Note that null keys (i.e. entry.get()
         * == null) mean that the key is no longer referenced, so the
         * entry can be expunged from table.  Such entries are referred to
         * as &quot;stale entries&quot; in the code that follows.
         */</span>
        <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ThreadLocal</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
            <span class="token doc-comment comment">/** The value associated with this ThreadLocal. */</span>
            <span class="token class-name">Object</span> value<span class="token punctuation">;</span>

            <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k<span class="token punctuation">,</span> <span class="token class-name">Object</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                value <span class="token operator">=</span> v<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * The initial capacity -- MUST be a power of two.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">INITIAL_CAPACITY</span> <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>

        <span class="token comment">//条目数组，作为hash表使用</span>
        <span class="token keyword">private</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> table<span class="token punctuation">;</span>

        <span class="token comment">// 条目数量</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">//扩容因子</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> threshold<span class="token punctuation">;</span> <span class="token comment">// Default to 0</span>

        <span class="token doc-comment comment">/**
         * Set the resize threshold to maintain at worst a 2/3 load factor.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setThreshold</span><span class="token punctuation">(</span><span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            threshold <span class="token operator">=</span> len <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Increment i modulo len.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token operator">?</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Decrement i modulo len.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">prevIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Construct a new map initially containing (firstKey, firstValue).
         * ThreadLocalMaps are constructed lazily, so we only create
         * one when we have at least one entry to put in it.
         */</span>
        <span class="token class-name">ThreadLocalMap</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> firstKey<span class="token punctuation">,</span> <span class="token class-name">Object</span> firstValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token constant">INITIAL_CAPACITY</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> firstKey<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token constant">INITIAL_CAPACITY</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            table<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span>firstKey<span class="token punctuation">,</span> firstValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            size <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token function">setThreshold</span><span class="token punctuation">(</span><span class="token constant">INITIAL_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Construct a new map including all Inheritable ThreadLocals
         * from given parent map. Called only by createInheritedMap.
         *
         * <span class="token keyword">@param</span> <span class="token parameter">parentMap</span> the map associated with parent thread.
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">ThreadLocalMap</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocalMap</span> parentMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> parentTable <span class="token operator">=</span> parentMap<span class="token punctuation">.</span>table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> parentTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token function">setThreshold</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            table <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Entry</span> e <span class="token operator">=</span> parentTable<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
                    <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> key <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Object</span> value <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">childValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token class-name">Entry</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">int</span> h <span class="token operator">=</span> key<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>table<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                            h <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        table<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
                        size<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Get the entry associated with key.  This method
         * itself handles only the fast path: a direct hit of existing
         * key. It otherwise relays to getEntryAfterMiss.  This is
         * designed to maximize performance for direct hits, in part
         * by making this method readily inlinable.
         *
         * <span class="token keyword">@param</span>  <span class="token parameter">key</span> the thread local object
         * <span class="token keyword">@return</span> the entry associated with key, or null if no such
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">Entry</span> <span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> key<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span>table<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Entry</span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> key<span class="token punctuation">)</span>
                <span class="token keyword">return</span> e<span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                <span class="token keyword">return</span> <span class="token function">getEntryAfterMiss</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> i<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Version of getEntry method for use when key is not found in
         * its direct hash slot.
         *
         * <span class="token keyword">@param</span>  <span class="token parameter">key</span> the thread local object
         * <span class="token keyword">@param</span>  <span class="token parameter">i</span> the table index for key&#39;s hash code
         * <span class="token keyword">@param</span>  <span class="token parameter">e</span> the entry at table[i]
         * <span class="token keyword">@return</span> the entry associated with key, or null if no such
         */</span>
        <span class="token keyword">private</span> <span class="token class-name">Entry</span> <span class="token function">getEntryAfterMiss</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token class-name">Entry</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

            <span class="token keyword">while</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> key<span class="token punctuation">)</span>
                    <span class="token keyword">return</span> e<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                    i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Set the value associated with key.
         *
         * <span class="token keyword">@param</span> <span class="token parameter">key</span> the thread local object
         * <span class="token keyword">@param</span> <span class="token parameter">value</span> the value to be set
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token comment">// We don&#39;t use a fast path as with get() because it is at</span>
            <span class="token comment">// least as common to use set() to create new entries as</span>
            <span class="token comment">// it is to replace existing ones, in which case, a fast</span>
            <span class="token comment">// path would fail more often than not.</span>

            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> key<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span> e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                 e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                 e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">replaceStaleEntry</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> sz <span class="token operator">=</span> <span class="token operator">++</span>size<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">cleanSomeSlots</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> sz<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> sz <span class="token operator">&gt;=</span> threshold<span class="token punctuation">)</span>
                <span class="token function">rehash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Remove the entry for key.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> key<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span> e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                 e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                 e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Replace a stale entry encountered during a set operation
         * with an entry for the specified key.  The value passed in
         * the value parameter is stored in the entry, whether or not
         * an entry already exists for the specified key.
         *
         * As a side effect, this method expunges all stale entries in the
         * &quot;run&quot; containing the stale entry.  (A run is a sequence of entries
         * between two null slots.)
         *
         * <span class="token keyword">@param</span>  <span class="token parameter">key</span> the key
         * <span class="token keyword">@param</span>  <span class="token parameter">value</span> the value to be associated with key
         * <span class="token keyword">@param</span>  <span class="token parameter">staleSlot</span> index of the first stale entry encountered while
         *         searching for key.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">replaceStaleEntry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span>
                                       <span class="token keyword">int</span> staleSlot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token class-name">Entry</span> e<span class="token punctuation">;</span>

            <span class="token comment">// Back up to check for prior stale entry in current run.</span>
            <span class="token comment">// We clean out whole runs at a time to avoid continual</span>
            <span class="token comment">// incremental rehashing due to garbage collector freeing</span>
            <span class="token comment">// up refs in bunches (i.e., whenever the collector runs).</span>
            <span class="token keyword">int</span> slotToExpunge <span class="token operator">=</span> staleSlot<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">prevIndex</span><span class="token punctuation">(</span>staleSlot<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">(</span>e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                 i <span class="token operator">=</span> <span class="token function">prevIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                    slotToExpunge <span class="token operator">=</span> i<span class="token punctuation">;</span>

            <span class="token comment">// Find either the key or trailing null slot of run, whichever</span>
            <span class="token comment">// occurs first</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>staleSlot<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">(</span>e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                 i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// If we find key, then we need to swap it</span>
                <span class="token comment">// with the stale entry to maintain hash table order.</span>
                <span class="token comment">// The newly stale slot, or any other stale slot</span>
                <span class="token comment">// encountered above it, can then be sent to expungeStaleEntry</span>
                <span class="token comment">// to remove or rehash all of the other entries in run.</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>

                    tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tab<span class="token punctuation">[</span>staleSlot<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    tab<span class="token punctuation">[</span>staleSlot<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>

                    <span class="token comment">// Start expunge at preceding stale entry if it exists</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>slotToExpunge <span class="token operator">==</span> staleSlot<span class="token punctuation">)</span>
                        slotToExpunge <span class="token operator">=</span> i<span class="token punctuation">;</span>
                    <span class="token function">cleanSomeSlots</span><span class="token punctuation">(</span><span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span>slotToExpunge<span class="token punctuation">)</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// If we didn&#39;t find stale entry on backward scan, the</span>
                <span class="token comment">// first stale entry seen while scanning for key is the</span>
                <span class="token comment">// first still present in the run.</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> slotToExpunge <span class="token operator">==</span> staleSlot<span class="token punctuation">)</span>
                    slotToExpunge <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// If key not found, put new entry in stale slot</span>
            tab<span class="token punctuation">[</span>staleSlot<span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            tab<span class="token punctuation">[</span>staleSlot<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// If there are any other stale entries in run, expunge them</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>slotToExpunge <span class="token operator">!=</span> staleSlot<span class="token punctuation">)</span>
                <span class="token function">cleanSomeSlots</span><span class="token punctuation">(</span><span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span>slotToExpunge<span class="token punctuation">)</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Expunge a stale entry by rehashing any possibly colliding entries
         * lying between staleSlot and the next null slot.  This also expunges
         * any other stale entries encountered before the trailing null.  See
         * Knuth, Section 6.4
         *
         * <span class="token keyword">@param</span> <span class="token parameter">staleSlot</span> index of slot known to have null key
         * <span class="token keyword">@return</span> the index of the next null slot after staleSlot
         * (all between staleSlot and this slot will have been checked
         * for expunging).
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> staleSlot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

            <span class="token comment">// expunge entry at staleSlot</span>
            tab<span class="token punctuation">[</span>staleSlot<span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            tab<span class="token punctuation">[</span>staleSlot<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            size<span class="token operator">--</span><span class="token punctuation">;</span>

            <span class="token comment">// Rehash until we encounter null</span>
            <span class="token class-name">Entry</span> e<span class="token punctuation">;</span>
            <span class="token keyword">int</span> i<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>staleSlot<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token punctuation">(</span>e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                 i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    size<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> h <span class="token operator">=</span> k<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

                        <span class="token comment">// Unlike Knuth 6.4 Algorithm R, we must scan until</span>
                        <span class="token comment">// null because multiple entries could have been stale.</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>tab<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                            h <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        tab<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Heuristically scan some cells looking for stale entries.
         * This is invoked when either a new element is added, or
         * another stale one has been expunged. It performs a
         * logarithmic number of scans, as a balance between no
         * scanning (fast but retains garbage) and a number of scans
         * proportional to number of elements, that would find all
         * garbage but would cause some insertions to take O(n) time.
         *
         * <span class="token keyword">@param</span> <span class="token parameter">i</span> a position known NOT to hold a stale entry. The
         * scan starts at the element after i.
         *
         * <span class="token keyword">@param</span> <span class="token parameter">n</span> scan control: <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token function">log2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span></span><span class="token punctuation">}</span> cells are scanned,
         * unless a stale entry is found, in which case
         * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token function">log2</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span></span></span><span class="token punctuation">}</span> additional cells are scanned.
         * When called from insertions, this parameter is the number
         * of elements, but when from replaceStaleEntry, it is the
         * table length. (Note: all this could be changed to be either
         * more or less aggressive by weighting n instead of just
         * using straight log n. But this version is simple, fast, and
         * seems to work well.)
         *
         * <span class="token keyword">@return</span> true if any stale entries have been removed.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">cleanSomeSlots</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">boolean</span> removed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">do</span> <span class="token punctuation">{</span>
                i <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Entry</span> e <span class="token operator">=</span> tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    n <span class="token operator">=</span> len<span class="token punctuation">;</span>
                    removed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    i <span class="token operator">=</span> <span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> removed<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Re-pack and/or re-size the table. First scan the entire
         * table removing stale entries. If this doesn&#39;t sufficiently
         * shrink the size of the table, double the table size.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">rehash</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">expungeStaleEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Use lower threshold for doubling to avoid hysteresis</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">&gt;=</span> threshold <span class="token operator">-</span> threshold <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span>
                <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Double the capacity of the table.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> oldTab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> oldLen <span class="token operator">=</span> oldTab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">int</span> newLen <span class="token operator">=</span> oldLen <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTab <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span>newLen<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldLen<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Entry</span> e <span class="token operator">=</span> oldTab<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// Help the GC</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token keyword">int</span> h <span class="token operator">=</span> k<span class="token punctuation">.</span>threadLocalHashCode <span class="token operator">&amp;</span> <span class="token punctuation">(</span>newLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">while</span> <span class="token punctuation">(</span>newTab<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                            h <span class="token operator">=</span> <span class="token function">nextIndex</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> newLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        newTab<span class="token punctuation">[</span>h<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
                        count<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token function">setThreshold</span><span class="token punctuation">(</span>newLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
            size <span class="token operator">=</span> count<span class="token punctuation">;</span>
            table <span class="token operator">=</span> newTab<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * Expunge all stale entries in the table.
         */</span>
        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">expungeStaleEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Entry</span> e <span class="token operator">=</span> tab<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token function">expungeStaleEntry</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="弱引用机制" tabindex="-1"><a class="header-anchor" href="#弱引用机制" aria-hidden="true">#</a> 弱引用机制</h2><p>Entry用于保存ThreadLocalMap的Key-Value对条目，但是Entry使用了对ThreadLocal实例进行包装之后的弱引用（WeakReference）作为Key，其代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>          <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ThreadLocal</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
              <span class="token doc-comment comment">/** The value associated with this ThreadLocal. */</span>
              <span class="token class-name">Object</span> value<span class="token punctuation">;</span>
  
              <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k<span class="token punctuation">,</span> <span class="token class-name">Object</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">super</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                  value <span class="token operator">=</span> v<span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>弱引用：仅有弱引用（Weak Reference）指向的对象只能生存到下一次垃圾回收之前。换句话说，当GC发生时，无论内存够不够，仅有弱引用所指向的对象都会被回收。而拥有强引用指向的对象则不会被直接回收。</p></blockquote><p>这里为什么不直接使用ThreadLocal实例作为key而是用弱引用进行包装呢？这里以一个简单的案例入手：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token punctuation">{</span>  
    <span class="token comment">//创建一个线程本地变量  </span>
    <span class="token class-name">ThreadLocal</span> local <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">//设置值  </span>
    local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">//获取值  </span>
    local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">//函数末尾  </span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在方法内声明local变量时，当该方法执行完后，应当将local变量进行回收，但如果ThreadLocalMap直接将local作为实例key的话将会保持一个强引用关系，这将导致local无法被回收，从而造成内存泄漏。</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><ul><li>尽量使用private static final修饰ThreadLocal实例。使用private与final修饰符主要是为了尽可能不让他人修改、变更ThreadLocal变量的引用，使用static修饰符主要是为了确保ThreadLocal实例的全局唯一。</li><li>ThreadLocal使用完成之后务必调用remove()方法。这是简单、有效地避免ThreadLocal引发内存泄漏问题的方法。</li></ul>`,18),c=[o];function l(i,u){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","2.ThreadLocal.html.vue"]]);export{d as default};

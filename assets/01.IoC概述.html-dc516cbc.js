import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as o,b as n,d as s,a as e,e as i}from"./app-c7504387.js";const l={},r=n("h1",{id:"什么是ioc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是ioc","aria-hidden":"true"},"#"),s(" 什么是IoC")],-1),u=n("p",null,"说起IoC习惯想起来的就是控制反转，依赖注入。根据维基百科的描述如下：",-1),d=n("strong",null,"控制反转",-1),k=n("strong",null,"IoC",-1),v={href:"https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zh.wikipedia.org/wiki/%E8%80%A6%E5%90%88%E5%BA%A6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"依赖注入",-1),y=n("strong",null,"DI",-1),w=i(`<p>简单来说，<strong>IoC是一种设计思想，Spring IoC是其对应的产品实现，在没有使用IoC之前对象的引用或依赖关系的管理由具体对象完成，使用IoC之后由IoC容器进行管理</strong>。以一段订单处理系统的代码为例：</p><p><strong>使用IoC示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// OrderService.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentService</span> paymentService<span class="token punctuation">;</span>

    <span class="token comment">// 构造函数注入</span>
    <span class="token keyword">public</span> <span class="token class-name">OrderService</span><span class="token punctuation">(</span><span class="token class-name">PaymentService</span> paymentService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>paymentService <span class="token operator">=</span> paymentService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理订单逻辑</span>
        paymentService<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// PaymentService.java</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentService</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// CreditCardPaymentService.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreditCardPaymentService</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Credit Card 支付逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Main.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建 Spring 容器</span>
        <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;applicationContext.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 从容器中获取 OrderService</span>
        <span class="token class-name">OrderService</span> orderService <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">OrderService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理订单</span>
        orderService<span class="token punctuation">.</span><span class="token function">processOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可知，**OrderService **和 <strong>PaymentService</strong> 实例对象的依赖关系由Spring容器进行管理，减少了耦合。</p><p><strong>不使用Ioc示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentService</span> paymentService<span class="token punctuation">;</span>

    <span class="token comment">// 构造函数中直接实例化 PaymentService</span>
    <span class="token keyword">public</span> <span class="token class-name">OrderService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>paymentService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreditCardPaymentService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里直接依赖于具体实现类</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">processOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 处理订单逻辑</span>
        paymentService<span class="token punctuation">.</span><span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreditCardPaymentService</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Credit Card 支付逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建 OrderService 实例</span>
        <span class="token class-name">OrderService</span> orderService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理订单</span>
        orderService<span class="token punctuation">.</span><span class="token function">processOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个不使用 IoC 的例子中，<code>OrderService</code> 直接实例化了 <code>CreditCardPaymentService</code>，这会导致高耦合度，并且很难进行单元测试。而在使用 IoC 的例子中，依赖关系由 Spring 容器管理，使得代码更加松散耦合，易于维护和测试。</p><p>接下来一起去探索Spring IoC的内部实现~ :😄</p>`,8);function S(_,g){const a=t("ExternalLinkIcon");return c(),o("div",null,[r,u,n("blockquote",null,[n("p",null,[d,s("（英语：Inversion of Control，缩写为"),k,s("），是"),n("a",v,[s("面向对象编程"),e(a)]),s("中的一种设计原则，可以用来减低计算机代码之间的"),n("a",m,[s("耦合度"),e(a)]),s("。其中最常见的方式叫做"),b,s("（Dependency Injection，简称"),y,s("），还有一种方式叫“依赖查找”（Dependency Lookup）。")])]),w])}const f=p(l,[["render",S],["__file","01.IoC概述.html.vue"]]);export{f as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const t={},p=e(`<h2 id="生产者" tabindex="-1"><a class="header-anchor" href="#生产者" aria-hidden="true">#</a> 生产者</h2><p>生产者进行消息确认，可以通过发送方确认机制和事务机制两种方式保证消息的可靠性。<strong>事务机制会严重影响RabbitMq的性能，一般都采用发送方ACK确认机制实现</strong>。</p><p>以ACK为例：</p><ol><li><p>声明回调处理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MessageConfirmCallback</span> <span class="token keyword">implements</span> <span class="token class-name">RabbitTemplate<span class="token punctuation">.</span>ConfirmCallback</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建RabbitTemplate对象之后执行当前方法，为模板对象设置回调确认方法
     * 设置消息确认回调方法
     * 设置消息回退回调方法
     */</span>
    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initRabbitTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//设置消息确认回调方法</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">setConfirmCallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">::</span><span class="token function">confirm</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token class-name">CorrelationData</span> correlationData<span class="token punctuation">,</span> <span class="token keyword">boolean</span> ack<span class="token punctuation">,</span> <span class="token class-name">String</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ack<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消息进入交换机成功{}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消息进入交换机失败{} ， 失败原因：&quot;</span> <span class="token operator">+</span> cause<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 开启生产者确认模式：(confirm),投递到交换机，不论失败或者成功都回调</span>
<span class="token key attr-name">spring.rabbitmq.publisher-confirm-type</span><span class="token punctuation">=</span><span class="token value attr-value">correlated</span>
<span class="token comment"># 开启return退回模式</span>
<span class="token key attr-name">spring.rabbitmq.publisher-returns</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试用例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">send1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> context <span class="token operator">=</span> <span class="token string">&quot;hi, fanout msg &quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Sender : &quot;</span> <span class="token operator">+</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;durableExchange2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="broker" tabindex="-1"><a class="header-anchor" href="#broker" aria-hidden="true">#</a> broker</h2><p>使用镜像集群或者仲裁队列，可参考RabbitMQ持久化与高可用一文。</p><h2 id="消费端" tabindex="-1"><a class="header-anchor" href="#消费端" aria-hidden="true">#</a> 消费端</h2><p>如果RabbitMQ成功的把消息发送给了消费者，那么RabbitMQ的ack机制会自动的返回成功，表明发送消息成功，下次就不会发送这个消息。但如果就在此时，消费者还没处理完该消息发送宕机，这个消息将会丢失，</p><p>解决方案：关闭自动ACK机制</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">## 消费端开启手动ACK</span>
<span class="token key attr-name">spring.rabbitmq.listener.simple.acknowledge-mode</span><span class="token punctuation">=</span><span class="token value attr-value">manual</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>消费端逻辑：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;direct.a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestA</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RabbitHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Channel</span> channel<span class="token punctuation">,</span> <span class="token annotation punctuation">@Header</span><span class="token punctuation">(</span><span class="token class-name">AmqpHeaders</span><span class="token punctuation">.</span><span class="token constant">DELIVERY_TAG</span><span class="token punctuation">)</span> <span class="token keyword">long</span> deliveryTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收的mq消息：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// long deliveryTag 消息接收tag boolean multiple 是否批量确认</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;deliveryTag=&quot;</span> <span class="token operator">+</span> deliveryTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token doc-comment comment">/**
             * 无异常就确认消息
             * basicAck(long deliveryTag, boolean multiple)
             * deliveryTag:取出来当前消息在队列中的的索引;
             * multiple:为true的话就是批量确认,如果当前deliveryTag为5,那么就会确认
             * deliveryTag为5及其以下的消息;一般设置为false
             */</span> 
            channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>deliveryTag<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token doc-comment comment">/**
             * 有异常就绝收消息
             * basicNack(long deliveryTag, boolean multiple, boolean requeue)
             * requeue:true为将消息重返当前消息队列,还可以重新发送给消费者;
             *         false:将消息丢弃
             */</span>

            <span class="token comment">// long deliveryTag, boolean multiple, boolean requeue</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">//拒绝消息</span>
                <span class="token comment">//重新丢入队列</span>
                channel<span class="token punctuation">.</span><span class="token function">basicNack</span><span class="token punctuation">(</span>deliveryTag<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e1<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","5.RabbitMQ消息可靠性保证.html.vue"]]);export{r as default};

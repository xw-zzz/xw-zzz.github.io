import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-ef0b4d9d.js";const e={},p=t(`<h1 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h1><ol><li>前端JS控制点击次数，屏蔽点击按钮无法点击</li><li>数据库或者其他存储增加唯一索引约束</li><li>服务端token令牌方式。下单前先获取令牌-存储redis 下单时一并把token提交并检验和删除</li></ol><h1 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h1><p>采用服务端token令牌方式，通过自定注解设置防重提交。</p><ol><li><p>自定义注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">RepeatSubmit</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 加锁过期时间，默认是5秒
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">long</span> <span class="token function">lockTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 默认限制类型，是方法参数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Type</span> <span class="token function">limitType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Type</span><span class="token punctuation">.</span><span class="token constant">PARAM</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 两种类型，token 或者 param
     */</span>
    <span class="token keyword">enum</span>  <span class="token class-name">Type</span><span class="token punctuation">{</span> <span class="token constant">PARAM</span> <span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置redis</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring.redis.client-type=jedis
spring.redis.host=120.79.150.146
spring.redis.password=xdclass.net
spring.redis.port=6379
spring.redis.jedis.pool.max-active=100
spring.redis.jedis.pool.max-idle=100
spring.redis.jedis.pool.min-idle=100
spring.redis.jedis.pool.max-wait=60000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取令牌接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> redisTemplate<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">JsonData</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">LoginUser</span> loginUser <span class="token operator">=</span> <span class="token class-name">LoginInterceptor</span><span class="token punctuation">.</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token class-name">CommonUtil</span><span class="token punctuation">.</span><span class="token function">getStringNumRandom</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//&quot;order:submit:%s:%s&quot;</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">RedisKey</span><span class="token punctuation">.</span><span class="token constant">SUBMIT_ORDER_TOKEN_KEY</span><span class="token punctuation">,</span> loginUser<span class="token punctuation">.</span><span class="token function">getAccountNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>requestToken<span class="token punctuation">)</span><span class="token punctuation">;</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">JsonData</span><span class="token punctuation">.</span><span class="token function">buildSuccess</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开发切面类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * 定义 @Pointcut注解表达式，
     *  方式一：@annotation：当执行的方法上拥有指定的注解时生效（我们采用这）
     *  方式二：execution：一般用于指定方法的执行
     *
     * <span class="token keyword">@param</span> <span class="token parameter">repeatSubmit</span>
     */</span>
    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(repeatSubmit)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointcutNoRepeatSubmit</span><span class="token punctuation">(</span><span class="token class-name">RepeatSubmit</span> repeatSubmit<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    
    
    
     <span class="token doc-comment comment">/**
     * 环绕通知, 围绕着方法执行
     * @Around 可以用来在调用一个具体方法前和调用后来完成一些具体的任务。
     *
     * 方式一：单用 @Around(&quot;execution(* net.xdclass.controller.*.*(..))&quot;)可以
     * 方式二：用@Pointcut和@Around联合注解也可以（我们采用这个）
     *
     *
     * 两种方式
     * 方式一：加锁 固定时间内不能重复提交
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 方式二：先请求获取token，这边再删除token,删除成功则是第一次提交
     *
     * <span class="token keyword">@param</span> <span class="token parameter">joinPoint</span>
     * <span class="token keyword">@param</span> <span class="token parameter">noRepeatSubmit</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Throwable</span></span>
     */</span>
    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;pointcutNoRepeatSubmit(noRepeatSubmit)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">around</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">RepeatSubmit</span> noRepeatSubmit<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> res<span class="token punctuation">;</span>

        <span class="token class-name">String</span> type <span class="token operator">=</span> noRepeatSubmit<span class="token punctuation">.</span><span class="token function">limitType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">RepeatSubmit<span class="token punctuation">.</span>Type</span><span class="token punctuation">.</span><span class="token constant">PARAM</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//方式一方法参数            TODO</span>

 
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//方式二,令牌形式</span>
            <span class="token class-name">String</span> requestToken <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;request-token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>requestToken<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BizException</span><span class="token punctuation">(</span><span class="token class-name">BizCodeEnum</span><span class="token punctuation">.</span><span class="token constant">ORDER_CONFIRM_TOKEN_EQUAL_FAIL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
            <span class="token class-name">LoginUser</span> loginUser <span class="token operator">=</span> <span class="token class-name">LoginInterceptor</span><span class="token punctuation">.</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//&quot;order:submit:%s:%s&quot;</span>
             <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">RedisKey</span><span class="token punctuation">.</span><span class="token constant">SUBMIT_ORDER_TOKEN_KEY</span><span class="token punctuation">,</span> loginUser<span class="token punctuation">.</span><span class="token function">getAccountNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>requestToken<span class="token punctuation">)</span><span class="token punctuation">;</span>


            <span class="token doc-comment comment">/**
             * 提交表单的token key
             * 方式一：不用lua脚本获取再判断，之前是因为 key组成是 order:submit:accountNo, value是对应的token，所以需要先获取值，再判断
             * 方式二：可以直接key是 order:submit:accountNo:token,然后直接删除成功则完成
             */</span>
            res <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BizException</span><span class="token punctuation">(</span><span class="token class-name">BizCodeEnum</span><span class="token punctuation">.</span><span class="token constant">ORDER_CONFIRM_REPEAT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;目标方法执行前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;目标方法执行后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> object<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","03.防重复提交解决方案.html.vue"]]);export{k as default};

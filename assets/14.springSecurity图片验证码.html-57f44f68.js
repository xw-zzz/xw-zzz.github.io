import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as o,f as c,a as n,e as s,d as i,b as l}from"./app-ef0b4d9d.js";const u={},r=n("p",null,[s("验证码（CAPTCHA）的全称是 Completely Automated Public Turing test to tell Computers and"),n("br"),s(" Humans Apart，翻译过来就是“全自动区分计算机和人类的图灵测试”。通俗地讲，验证码就是为了防"),n("br"),s(" 止恶意用户暴力重试而设置的。不管是用户注册、用户登录，还是论坛发帖，如果不加以限制，一旦"),n("br"),s(" 某些恶意用户利用计算机发起无限重试，就很容易使系统遭受破坏。")],-1),k=l(`<h3 id="通过过滤器实现" tabindex="-1"><a class="header-anchor" href="#通过过滤器实现" aria-hidden="true">#</a> 通过过滤器实现</h3><p><strong>自定义过滤器</strong><br> 在Spring Security中，实现验证码校验的方式有很多种，最简单的方式就是自定义一个专门处理验<br> 证码逻辑的过滤器，将其添加到Spring Security过滤器链的合适位置。当匹配到登录请求时，立刻对验<br> 证码进行校验，成功则放行，失败则提前结束整个验证请求。<br><strong>图形验证码过滤器</strong></p><ul><li>1、验证码图片准备<br> 毋庸置疑，要想实现图形验证码校验功能，首先应当有一个用于获取图形验证码的 API。绘制图<br> 形验证码的方法有很多，使用开源的验证码组件即可，例如kaptcha</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.penggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>kaptcha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先配置一个kaptcha实例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">club<span class="token punctuation">.</span>xwzzy<span class="token punctuation">.</span>springbootsecurity_imageverification<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>code<span class="token punctuation">.</span>kaptcha<span class="token punctuation">.</span></span><span class="token class-name">Producer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>code<span class="token punctuation">.</span>kaptcha<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">DefaultKaptcha</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>code<span class="token punctuation">.</span>kaptcha<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Config</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CaptchaConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Producer</span> <span class="token function">captcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 配置图形验证码的基本参数</span>
        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 图片宽度</span>
        properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;kaptcha.image.width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;150&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 图片长度</span>
        properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;kaptcha.image.height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 字符集</span>
        properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;kaptcha.textproducer.char.string&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0123456789&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 字符长度</span>
        properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;kaptcha.textproducer.char.length&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用默认的图形验证码实现，当然也可以自定义实现</span>
        <span class="token class-name">DefaultKaptcha</span> defaultKaptcha <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultKaptcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        defaultKaptcha<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> defaultKaptcha<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着创建一个CaptchaController，用于获取图形验证码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">club<span class="token punctuation">.</span>xwzzy<span class="token punctuation">.</span>springbootsecurity_imageverification<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>code<span class="token punctuation">.</span>kaptcha<span class="token punctuation">.</span></span><span class="token class-name">Producer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>imageio<span class="token punctuation">.</span></span><span class="token class-name">ImageIO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>image<span class="token punctuation">.</span></span><span class="token class-name">BufferedImage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CaptchaController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Producer</span> captchaProducer<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/captcha.jpg&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getCaptcha</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 设置内容类型</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;image/jpeg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建验证码文本</span>
        <span class="token class-name">String</span> capText <span class="token operator">=</span> captchaProducer<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将验证码文本设置到session</span>
        request<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;captcha&quot;</span><span class="token punctuation">,</span> capText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建验证码图片</span>
        <span class="token class-name">BufferedImage</span> bi <span class="token operator">=</span> captchaProducer<span class="token punctuation">.</span><span class="token function">createImage</span><span class="token punctuation">(</span>capText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取响应输出流</span>
        <span class="token class-name">ServletOutputStream</span> out <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将图片验证码数据写到响应输出流</span>
        <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bi<span class="token punctuation">,</span> <span class="token string">&quot;jpg&quot;</span><span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 推送并关闭响应输出流</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户访问/captcha.jpg时，即可得到一张携带验证码的图片，验证码文本则被存放到session中用于后续的校验。</p><ul><li>2、自定义异常</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">club<span class="token punctuation">.</span>xwzzy<span class="token punctuation">.</span>springbootsecurity_imageverification<span class="token punctuation">.</span>exception</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">AuthenticationException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VerificationCodeException</span> <span class="token keyword">extends</span> <span class="token class-name">AuthenticationException</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">VerificationCodeException</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;图形验证码校验失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3、自定义过滤器</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">club<span class="token punctuation">.</span>xwzzy<span class="token punctuation">.</span>springbootsecurity_imageverification<span class="token punctuation">.</span>filter</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">club<span class="token punctuation">.</span>xwzzy<span class="token punctuation">.</span>springbootsecurity_imageverification<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span></span><span class="token class-name">SecurityAuthenticationFailureHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">club<span class="token punctuation">.</span>xwzzy<span class="token punctuation">.</span>springbootsecurity_imageverification<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span><span class="token class-name">VerificationCodeException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>security<span class="token punctuation">.</span>web<span class="token punctuation">.</span>authentication<span class="token punctuation">.</span></span><span class="token class-name">AuthenticationFailureHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>filter<span class="token punctuation">.</span></span><span class="token class-name">OncePerRequestFilter</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">FilterChain</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpSession</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VerificationCodeFilter</span> <span class="token keyword">extends</span> <span class="token class-name">OncePerRequestFilter</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">AuthenticationFailureHandler</span> authenticationFailureHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecurityAuthenticationFailureHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilterInternal</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 非登录请求不校验验证码</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">,</span> httpServletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token function">verificationCode</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
                filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">,</span> httpServletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">VerificationCodeException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                authenticationFailureHandler<span class="token punctuation">.</span><span class="token function">onAuthenticationFailure</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">,</span> httpServletResponse<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> verificationCode <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">VerificationCodeException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> requestCode <span class="token operator">=</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;captcha&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpSession</span> session <span class="token operator">=</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> savedCode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;captcha&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>savedCode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 随手清除验证码，不管是失败还是成功，所以客户端应在登录失败时刷新验证码</span>
            session<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;captcha&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 校验不通过抛出异常</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>requestCode<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>savedCode<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>requestCode<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>savedCode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">VerificationCodeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4、添加过滤器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 将过滤器添加在UsernamePasswordAuthenticationFilter之前
        http.addFilterBefore(new VerificationCodeFilter(), UsernamePasswordAuthenticationFilter.class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>5、html</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;!DOCTYPE HTML&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;登录&lt;/title&gt;
        &lt;meta http-equiv=<span class="token string">&quot;Content-Type&quot;</span> content=<span class="token string">&quot;text/html; charset=utf-8&quot;</span> /&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div class=<span class="token string">&quot;login&quot;</span>&gt;
            &lt;h2&gt;Acced Form&lt;/h2&gt;
            &lt;div class=<span class="token string">&quot;login-top&quot;</span>&gt;
                &lt;h1&gt;LOGIN FORM&lt;/h1&gt;
                &lt;form action=<span class="token string">&quot;/login&quot;</span> method=<span class="token string">&quot;post&quot;</span>&gt;
                    &lt;input type=<span class="token string">&quot;text&quot;</span> name=<span class="token string">&quot;username&quot;</span> placeholder=<span class="token string">&quot;username&quot;</span> /&gt;
                    &lt;input type=<span class="token string">&quot;password&quot;</span> name=<span class="token string">&quot;password&quot;</span> placeholder=<span class="token string">&quot;password&quot;</span> /&gt;
                    &lt;div style=<span class="token string">&quot;display: flex;&quot;</span>&gt;
                        &lt;!-- 新增图形验证码的输入框 --&gt;
                        &lt;input type=<span class="token string">&quot;text&quot;</span> name=<span class="token string">&quot;captcha&quot;</span> placeholder=<span class="token string">&quot;captcha&quot;</span> /&gt;
                        &lt;!-- 图片指向图形验证码API --&gt;
                        &lt;img src=<span class="token string">&quot;/captcha.jpg&quot;</span> alt=<span class="token string">&quot;captcha&quot;</span> height=<span class="token string">&quot;50px&quot;</span> width=<span class="token string">&quot;150px&quot;</span> style=<span class="token string">&quot;margin-left: 20px;&quot;</span>&gt;
                    &lt;/div&gt;
                    &lt;div class=<span class="token string">&quot;forgot&quot;</span>&gt;
                        &lt;a href=<span class="token string">&quot;#&quot;</span>&gt;forgot Password&lt;/a&gt;
                        &lt;input type=<span class="token string">&quot;submit&quot;</span> value=<span class="token string">&quot;Login&quot;</span> &gt;
                    &lt;/div&gt;
                &lt;/form&gt;
            &lt;/div&gt;
            &lt;div class=<span class="token string">&quot;login-bottom&quot;</span>&gt;
                &lt;h3&gt;New User &amp;nbsp<span class="token punctuation">;</span>&lt;a <span class="token selector">href=&quot;#&quot;&gt;Register&lt;/a&gt;&amp;nbsp Here&lt;/h3&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;style&gt;
            html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">font</span><span class="token punctuation">:</span>inherit<span class="token punctuation">;</span><span class="token property">vertical-align</span><span class="token punctuation">:</span>baseline<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section</span> <span class="token punctuation">{</span><span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">ol,ul</span><span class="token punctuation">{</span><span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">blockquote,q</span><span class="token punctuation">{</span><span class="token property">quotes</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">blockquote:before,blockquote:after,q:before,q:after</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span><span class="token property">content</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">table</span><span class="token punctuation">{</span><span class="token property">border-collapse</span><span class="token punctuation">:</span>collapse<span class="token punctuation">;</span><span class="token property">border-spacing</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">a</span><span class="token punctuation">{</span><span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">nav.vertical ul li</span><span class="token punctuation">{</span>	<span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">nav.horizontal ul li</span><span class="token punctuation">{</span>	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">img</span><span class="token punctuation">{</span><span class="token property">max-width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token punctuation">}</span>
            <span class="token selector">body</span><span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #3f3f3f<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span>100px 0px 30px 0px<span class="token punctuation">;</span>
                <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Roboto&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 32%<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login h2</span> <span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0px 0px 50px 0px<span class="token punctuation">;</span>
                <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Droid Serif&#39;</span><span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-top</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #E1E1E1<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 25px 25px 0px 0px<span class="token punctuation">;</span>
                <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span>  25px 25px 0px 0px<span class="token punctuation">;</span>
                <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 25px 25px 0px 0px<span class="token punctuation">;</span>
                <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 25px 25px 0px 0px<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 40px 60px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-top h1</span> <span class="token punctuation">{</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 27px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #F45B4B<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0px 0px 20px 0px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-top input[type=&quot;text&quot;]</span> <span class="token punctuation">{</span>
                <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #818181<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 15px 20px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #CACACA<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span>25px<span class="token punctuation">;</span>
                <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0px 0px 12px 0px<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 88%<span class="token punctuation">;</span>
                <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-top input[type=&quot;password&quot;]</span><span class="token punctuation">{</span>
                <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #818181<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 15px 20px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #CACACA<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span>25px<span class="token punctuation">;</span>
                <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0px 0px 12px 0px<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 88%<span class="token punctuation">;</span>
                <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.forgot  a</span><span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #F45B4B<span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
                <span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid #F45B4B<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 0px 7px 0px 0px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.forgot  a:hover</span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #818181<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.forgot input[type=&quot;submit&quot;]</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #F45B4B<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 8px 7px<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
                <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
                <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
                <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
                <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0px 7px 0px 3px<span class="token punctuation">;</span>
                <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.forgot input[type=&quot;submit&quot;]:hover</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span>#818181<span class="token punctuation">;</span>
                <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-moz-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-o-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.forgot</span> <span class="token punctuation">{</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-bottom</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #E15748<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 30px 65px<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 0px 0px 25px 25px<span class="token punctuation">;</span>
                <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span>  0px 0px 25px 25px<span class="token punctuation">;</span>
                <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 0px 0px 25px 25px<span class="token punctuation">;</span>
                <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 0px 0px 25px 25px<span class="token punctuation">;</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
                <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #AD4337<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-bottom h3</span> <span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-bottom h3 a</span> <span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.login-bottom h3 a:hover</span> <span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span>#696969<span class="token punctuation">;</span>
                <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-moz-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-o-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.copyright p</span> <span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.copyright p a</span><span class="token punctuation">{</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
                <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #E15748<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.copyright p a:hover</span><span class="token punctuation">{</span>
                <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
                <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-moz-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
                <span class="token property">-o-transition</span><span class="token punctuation">:</span> 0.5s all<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1440px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 35%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1366px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 37%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1280px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1024px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 48%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 65%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top h1</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-bottom h3 a</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">body</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 100px 0px 0px 0px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login h2</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>640px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login-top h1</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 23px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.forgot input[type=&quot;submit&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 22%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top input[type=&quot;text&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 12px 20px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top input[type=&quot;password&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 12px 20px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-bottom h3 a</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 19px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-bottom h3</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">body</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 110px 0px 0px 0px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>480px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top h1</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top input[type=&quot;text&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 85%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 30px 40px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top input[type=&quot;password&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 85%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login h2</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>320px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
                <span class="token selector">.login</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 20px 25px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top input[type=&quot;text&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 81%<span class="token punctuation">;</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
                    <span class="token property">margin</span><span class="token punctuation">:</span> 0px 0px 7px 0px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-top input[type=&quot;password&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 81%<span class="token punctuation">;</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
                    <span class="token property">margin</span><span class="token punctuation">:</span> 0px 0px 7px 0px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.forgot input[type=&quot;submit&quot;]</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
                    <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 7px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.forgot  a</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-bottom</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 20px 25px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-bottom h3</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login-bottom h3 a</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">body</span> <span class="token punctuation">{</span>
                    <span class="token property">padding</span><span class="token punctuation">:</span> 50px 0px 0px 0px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.copyright p</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.copyright p a</span><span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token selector">.login h2</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 23px<span class="token punctuation">;</span>
                    <span class="token property">margin</span><span class="token punctuation">:</span>0px 0px 35px 0px<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        &lt;/style&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=n("br",null,null,-1),v={href:"https://github.com/2457081614/springboot-all-demo.git",target:"_blank",rel:"noopener noreferrer"};function m(b,g){const a=t("ExternalLinkIcon");return e(),o("div",null,[r,c("more"),k,n("p",null,[s("至此，使用过滤器的方式实现验证码结束，属于Servlet层面，简单、易理解。"),d,n("a",v,[s("代码地址"),i(a)])])])}const h=p(u,[["render",m],["__file","14.springSecurity图片验证码.html.vue"]]);export{h as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-ef0b4d9d.js";const p="/assets/image-20221123103042262-d15b4d04.png",o={},c=t(`<h2 id="配置获取实现" tabindex="-1"><a class="header-anchor" href="#配置获取实现" aria-hidden="true">#</a> 配置获取实现</h2><p>以Spring Cloud应用为例，分析一下应用启动时如何获取Nacos上面的配置。</p><p>核心类：<code>NacosPropertySourceLocator</code>，该类继承了<code>PropertySourceLocator</code>，<code>PropertySourceLocator</code>是Spring Cloud提供的接口，该接口的作用是让用户可定制化的将一些配置加载到 Environment。这部分配置获取遵循了 Spring Cloud Config 的理念，即希望能从外部储存获取。</p><p>在服务启动准备上下文阶段会调用<code>PropertySourceBootstrapConfiguration#initialize</code>方法，该方法会根据order排序执行所有<code>PropertySourceLocator</code>实例的<code>locate</code>方法。<code>NacosPropertySourceLocator#locate</code> 会获取server端配置，核心代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">PropertySource</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">locate</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   nacosConfigProperties<span class="token punctuation">.</span><span class="token function">setEnvironment</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">ConfigService</span> configService <span class="token operator">=</span> nacosConfigManager<span class="token punctuation">.</span><span class="token function">getConfigService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> configService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;no instance of config service found, can&#39;t load config from nacos&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">long</span> timeout <span class="token operator">=</span> nacosConfigProperties<span class="token punctuation">.</span><span class="token function">getTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   nacosPropertySourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NacosPropertySourceBuilder</span><span class="token punctuation">(</span>configService<span class="token punctuation">,</span>
         timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> name <span class="token operator">=</span> nacosConfigProperties<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token class-name">String</span> dataIdPrefix <span class="token operator">=</span> nacosConfigProperties<span class="token punctuation">.</span><span class="token function">getPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>dataIdPrefix<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dataIdPrefix <span class="token operator">=</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>dataIdPrefix<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dataIdPrefix <span class="token operator">=</span> env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;spring.application.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">//获取配置返回，后面加载到Environment中</span>
   <span class="token class-name">CompositePropertySource</span> composite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositePropertySource</span><span class="token punctuation">(</span>
         <span class="token constant">NACOS_PROPERTY_SOURCE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 加载共享配置</span>
   <span class="token function">loadSharedConfiguration</span><span class="token punctuation">(</span>composite<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//加载扩展配置</span>
   <span class="token function">loadExtConfiguration</span><span class="token punctuation">(</span>composite<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//加载应用配置</span>
   <span class="token function">loadApplicationConfiguration</span><span class="token punctuation">(</span>composite<span class="token punctuation">,</span> dataIdPrefix<span class="token punctuation">,</span> nacosConfigProperties<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
   <span class="token keyword">return</span> composite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用链如下：</p><p><img src="`+p+`" alt="image-20221123103042262" loading="lazy"></p><p>上述加载配置会调用<code>com.alibaba.nacos.api.config.ConfigService#getConfig</code>方法去获取配置，核心逻辑在<code>com.alibaba.nacos.client.config.NacosConfigService#getConfigInner</code> 方法中，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getConfigInner</span><span class="token punctuation">(</span><span class="token class-name">String</span> tenant<span class="token punctuation">,</span> <span class="token class-name">String</span> dataId<span class="token punctuation">,</span> <span class="token class-name">String</span> group<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutMs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NacosException</span> <span class="token punctuation">{</span>
    group <span class="token operator">=</span> <span class="token function">null2defaultGroup</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ParamUtils</span><span class="token punctuation">.</span><span class="token function">checkKeyParam</span><span class="token punctuation">(</span>dataId<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ConfigResponse</span> cr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConfigResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    cr<span class="token punctuation">.</span><span class="token function">setDataId</span><span class="token punctuation">(</span>dataId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cr<span class="token punctuation">.</span><span class="token function">setTenant</span><span class="token punctuation">(</span>tenant<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cr<span class="token punctuation">.</span><span class="token function">setGroup</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 优先使用本地配置，我本地配置文件在C:\\Users\\Administrator\\nacos\\config\\fixed-nacos.cmp_8848-dev_nacos\\snapshot-tenant目录</span>
    <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token class-name">LocalConfigInfoProcessor</span><span class="token punctuation">.</span><span class="token function">getFailover</span><span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> tenant<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>content <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;[{}] [get-config] get failover ok, dataId={}, group={}, tenant={}, config={}&quot;</span><span class="token punctuation">,</span> agent<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> tenant<span class="token punctuation">,</span> <span class="token class-name">ContentUtils</span><span class="token punctuation">.</span><span class="token function">truncateContent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cr<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        configFilterChainManager<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> cr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        content <span class="token operator">=</span> cr<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果本地不存在配置文件，从服务端获取配置文件</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ct <span class="token operator">=</span> worker<span class="token punctuation">.</span><span class="token function">getServerConfig</span><span class="token punctuation">(</span>dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> tenant<span class="token punctuation">,</span> timeoutMs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cr<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span>ct<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        configFilterChainManager<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> cr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        content <span class="token operator">=</span> cr<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NacosException</span> ioe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">NacosException</span><span class="token punctuation">.</span><span class="token constant">NO_RIGHT</span> <span class="token operator">==</span> ioe<span class="token punctuation">.</span><span class="token function">getErrCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> ioe<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;[{}] [get-config] get from server error, dataId={}, group={}, tenant={}, msg={}&quot;</span><span class="token punctuation">,</span>
                agent<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> tenant<span class="token punctuation">,</span> ioe<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token constant">LOGGER</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;[{}] [get-config] get snapshot ok, dataId={}, group={}, tenant={}, config={}&quot;</span><span class="token punctuation">,</span> agent<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> tenant<span class="token punctuation">,</span> <span class="token class-name">ContentUtils</span><span class="token punctuation">.</span><span class="token function">truncateContent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    content <span class="token operator">=</span> <span class="token class-name">LocalConfigInfoProcessor</span><span class="token punctuation">.</span><span class="token function">getSnapshot</span><span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dataId<span class="token punctuation">,</span> group<span class="token punctuation">,</span> tenant<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cr<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    configFilterChainManager<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> cr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    content <span class="token operator">=</span> cr<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置刷新实现" tabindex="-1"><a class="header-anchor" href="#配置刷新实现" aria-hidden="true">#</a> 配置刷新实现</h2><p>配置刷新是通过事件监听实现的，com.alibaba.cloud.nacos.refresh.NacosContextRefresher监听了ApplicationReadyEvent事件，ApplicationReadyEvent在服务准备好提供请求后发布。</p>`,11),e=[c];function i(u,l){return s(),a("div",null,e)}const d=n(o,[["render",i],["__file","11.Nacos配置中心.html.vue"]]);export{d as default};

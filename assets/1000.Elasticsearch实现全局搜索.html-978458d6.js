import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-ef0b4d9d.js";const p={},o=t(`<h1 id="_1-原理" tabindex="-1"><a class="header-anchor" href="#_1-原理" aria-hidden="true">#</a> 1.原理</h1><ol><li>使用copy_to将需要查询的参数值复制到一个属性中</li><li>使用wildcard关键词进行查询</li></ol><h1 id="_2-实现" tabindex="-1"><a class="header-anchor" href="#_2-实现" aria-hidden="true">#</a> 2.实现</h1><ol><li><p>创建索引，将所有string类型的数据复制到cmp_full_name中</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /cmdb/
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dynamic_templates&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;copy_to_full&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;mapping&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmp_full_name&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;match_mapping_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unmatch&quot;</span><span class="token operator">:</span><span class="token string">&quot;cmp_full_name&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;message_field&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path_match&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;match_mapping_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mapping&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;norms&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;string_fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;match&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;match_mapping_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mapping&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;analyzer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;simple&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;norms&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cmp_full_name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码关键实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;*&quot;</span> <span class="token operator">+</span> cmdbGlobalSearchQueryVo<span class="token punctuation">.</span><span class="token function">getKeyword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">BoolQueryBuilder</span> boolQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">WildcardQueryBuilder</span> wildcardQueryBuilder <span class="token operator">=</span> <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">wildcardQuery</span><span class="token punctuation">(</span><span class="token string">&quot;cmp_full_name&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            boolQueryBuilder<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>wildcardQueryBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),e=[o];function l(c,i){return s(),a("div",null,e)}const d=n(p,[["render",l],["__file","1000.Elasticsearch实现全局搜索.html.vue"]]);export{d as default};

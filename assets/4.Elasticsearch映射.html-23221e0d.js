import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as l,a as n,e as s,d as o,b as p}from"./app-ef0b4d9d.js";const u="/assets/image-20230629223929627-88d6c9dc.png",c="/assets/image-20230630175659831-cf710394.png",d={},r=p('<h1 id="字段映射" tabindex="-1"><a class="header-anchor" href="#字段映射" aria-hidden="true">#</a> 字段映射</h1><p>映射是定义文档及其包含的字段如何存储和索引的过程。映射分为动态映射和显示映射。</p><h2 id="动态映射" tabindex="-1"><a class="header-anchor" href="#动态映射" aria-hidden="true">#</a> 动态映射</h2><h3 id="动态字段映射" tabindex="-1"><a class="header-anchor" href="#动态字段映射" aria-hidden="true">#</a> 动态字段映射</h3><p>当Elasticsearch在文档中检测到一个新字段时，默认情况下它会动态地将该字段添加到类型映射中。动态映射规则如下：</p><p><img src="'+u+`" alt="image-20230629223929627" loading="lazy"></p><div class="hint-container note"><p class="hint-container-title">注</p><ul><li>&quot;dynamic true&quot;是指在索引文档时，Elasticsearch会自动检测索引字段的类型，并根据字段值的类型来推断字段的映射类型。例如，如果字段的值是一个字符串，那么该字段的映射类型就会被推断为&quot;string&quot;。这种自动推断字段类型的功能可以简化索引文档的过程，但也可能导致字段类型的不一致。</li><li>&quot;runtime&quot;是Elasticsearch 7.0版本中引入的一个新功能，它允许用户在查询时动态地定义和使用脚本字段。脚本字段是在查询期间计算出来的虚拟字段，它可以根据文档的字段值来进行计算和转换。通过使用脚本字段，用户可以在不修改索引映射的情况下，对文档进行动态的计算和转换操作。</li></ul></div><ul><li><p><strong>基本使用：</strong></p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code><span class="token constant">#</span><span class="token comment"># 创建索引</span>
PUT <span class="token monadic-operator operator">/</span>dynamic_field_index
<span class="token dfn builtin">{</span>
  &quot;mappings&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;dynamic&quot;<span class="token dfn builtin">:</span>true
  <span class="token dfn builtin">}</span>
<span class="token dfn builtin">}</span>

<span class="token constant">#</span><span class="token comment"># 插入测试数据</span>
POST <span class="token monadic-operator operator">/</span>dynamic_field_index<span class="token monadic-operator operator">/</span>_doc<span class="token monadic-operator operator">/</span><span class="token number">1</span>
<span class="token dfn builtin">{</span>
  &quot;name&quot;<span class="token dfn builtin">:</span>&quot;xw&quot;<span class="token function">,</span>
  &quot;age&quot;<span class="token dfn builtin">:</span>&quot;<span class="token number">10</span>&quot;
<span class="token dfn builtin">}</span>

<span class="token constant">#</span><span class="token constant">#</span>查看索引mappling结构如下
<span class="token dfn builtin">{</span>
  &quot;dynamic_field_index&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;mappings&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;dynamic&quot; <span class="token dfn builtin">:</span> &quot;true&quot;<span class="token function">,</span>
      &quot;properties&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
        &quot;age&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
          &quot;type&quot; <span class="token dfn builtin">:</span> &quot;text&quot;<span class="token function">,</span>
          &quot;fields&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
            &quot;keyword&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
              &quot;type&quot; <span class="token dfn builtin">:</span> &quot;keyword&quot;<span class="token function">,</span>
              &quot;ignore_above&quot; <span class="token dfn builtin">:</span> <span class="token number">256</span>
            <span class="token dfn builtin">}</span>
          <span class="token dfn builtin">}</span>
        <span class="token dfn builtin">}</span><span class="token function">,</span>
        &quot;name&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
          &quot;type&quot; <span class="token dfn builtin">:</span> &quot;text&quot;<span class="token function">,</span>
          &quot;fields&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
            &quot;keyword&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
              &quot;type&quot; <span class="token dfn builtin">:</span> &quot;keyword&quot;<span class="token function">,</span>
              &quot;ignore_above&quot; <span class="token dfn builtin">:</span> <span class="token number">256</span>
            <span class="token dfn builtin">}</span>
          <span class="token dfn builtin">}</span>
        <span class="token dfn builtin">}</span>
      <span class="token dfn builtin">}</span>
    <span class="token dfn builtin">}</span>
  <span class="token dfn builtin">}</span>
<span class="token dfn builtin">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启string类型自动识别为数字和日期：</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code><span class="token constant">#</span><span class="token comment"># 修改索引映射结构，开启string类型自动识别数字和时间格式</span>
PUT <span class="token monadic-operator operator">/</span>dynamic_field_index<span class="token monadic-operator operator">/</span>_mapping
<span class="token dfn builtin">{</span>
  &quot;numeric_detection&quot;<span class="token dfn builtin">:</span> true<span class="token function">,</span>
 &quot;dynamic_date_formats&quot;<span class="token dfn builtin">:</span> <span class="token punctuation">[</span> &quot;yyyy<span class="token monadic-operator operator">/</span>MM<span class="token function">|</span><span class="token function">|</span>MM<span class="token monadic-operator operator">/</span>dd<span class="token monadic-operator operator">/</span>yyyy&quot;<span class="token punctuation">]</span>
<span class="token dfn builtin">}</span>

<span class="token constant">#</span><span class="token comment"># 添加测试数据</span>
POST <span class="token monadic-operator operator">/</span>dynamic_field_index<span class="token monadic-operator operator">/</span>_doc<span class="token monadic-operator operator">/</span><span class="token number">4</span>
<span class="token dfn builtin">{</span>
  &quot;name&quot;<span class="token dfn builtin">:</span>&quot;xw&quot;<span class="token function">,</span>
  &quot;age&quot;<span class="token dfn builtin">:</span>&quot;<span class="token number">102</span>&quot;<span class="token function">,</span>
  &quot;int1&quot;<span class="token dfn builtin">:</span>&quot;<span class="token number">2</span>&quot;<span class="token function">,</span>
  &quot;float2&quot;<span class="token dfn builtin">:</span>&quot;<span class="token number">2.0</span>&quot;<span class="token function">,</span>
  &quot;date1&quot;<span class="token dfn builtin">:</span>&quot;<span class="token number">2044</span><span class="token monadic-operator operator">/</span><span class="token number">05</span>&quot;
<span class="token dfn builtin">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看索引mappling如下图所示，字符串<code>date1</code>自动识别为日期类型，<code>float2</code>自动识别为float类型：</p></li></ul><p><img src="`+c+`" alt="image-20230630175659831" loading="lazy"></p><h3 id="动态模板" tabindex="-1"><a class="header-anchor" href="#动态模板" aria-hidden="true">#</a> 动态模板</h3><p>Elasticsearch动态模板是一种配置机制，它允许你定义一组规则，以便在索引文档时自动应用映射和设置。动态模板可以根据字段名、字段类型或其他条件来匹配字段，并为匹配的字段应用指定的映射和设置。</p><p>基本使用：</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>PUT _index_template<span class="token monadic-operator operator">/</span>my_dynamic_template
<span class="token dfn builtin">{</span>
  <span class="token constant">#</span><span class="token comment"># 索引正则</span>
  &quot;index_patterns&quot;<span class="token dfn builtin">:</span> <span class="token punctuation">[</span>&quot;<span class="token function">*</span>&quot;<span class="token punctuation">]</span><span class="token function">,</span>
  &quot;template&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;mappings&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;dynamic_templates&quot;<span class="token dfn builtin">:</span> <span class="token punctuation">[</span>
        <span class="token dfn builtin">{</span>
          &quot;my_fields&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
            &quot;match_mapping_type&quot;<span class="token dfn builtin">:</span> &quot;string&quot;<span class="token function">,</span>
            &quot;match&quot;<span class="token dfn builtin">:</span> &quot;my_<span class="token function">*</span>&quot;<span class="token function">,</span>
            &quot;mapping&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
              &quot;type&quot;<span class="token dfn builtin">:</span> &quot;keyword&quot;
            <span class="token dfn builtin">}</span>
          <span class="token dfn builtin">}</span>
        <span class="token dfn builtin">}</span>
      <span class="token punctuation">]</span>
    <span class="token dfn builtin">}</span>
  <span class="token dfn builtin">}</span>
<span class="token dfn builtin">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示映射" tabindex="-1"><a class="header-anchor" href="#显示映射" aria-hidden="true">#</a> 显示映射</h2><p>显示映射指定字段，示例如下：</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>PUT <span class="token monadic-operator operator">/</span>my<span class="token function">-</span>index<span class="token function">-</span><span class="token number">000001</span>
<span class="token dfn builtin">{</span>
  &quot;mappings&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;properties&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;age&quot;<span class="token dfn builtin">:</span>    <span class="token dfn builtin">{</span> &quot;type&quot;<span class="token dfn builtin">:</span> &quot;integer&quot; <span class="token dfn builtin">}</span><span class="token function">,</span>  
      &quot;email&quot;<span class="token dfn builtin">:</span>  <span class="token dfn builtin">{</span> &quot;type&quot;<span class="token dfn builtin">:</span> &quot;keyword&quot;  <span class="token dfn builtin">}</span><span class="token function">,</span> 
      &quot;name&quot;<span class="token dfn builtin">:</span>   <span class="token dfn builtin">{</span> &quot;type&quot;<span class="token dfn builtin">:</span> &quot;text&quot;  <span class="token dfn builtin">}</span>     
    <span class="token dfn builtin">}</span>
  <span class="token dfn builtin">}</span>
<span class="token dfn builtin">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行时字段" tabindex="-1"><a class="header-anchor" href="#运行时字段" aria-hidden="true">#</a> 运行时字段</h2><p>运行时字段（Runtime Fields）是一种临时创建的字段，它们在查询过程中动态计算或提取，而不会存储在索引中。这些字段在查询时可以根据需要创建，并且对于临时的计算、聚合或转换非常有用。示例如下：</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code><span class="token constant">#</span><span class="token comment"># 添加索引</span>
PUT <span class="token monadic-operator operator">/</span>my<span class="token function">-</span>index<span class="token function">-</span>runtime
<span class="token dfn builtin">{</span>
  &quot;mappings&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;properties&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;name&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
        &quot;type&quot;<span class="token dfn builtin">:</span> &quot;keyword&quot;
      <span class="token dfn builtin">}</span>
    <span class="token dfn builtin">}</span><span class="token function">,</span>
    &quot;runtime&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;my_runtime_field&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
        &quot;type&quot;<span class="token dfn builtin">:</span> &quot;keyword&quot;<span class="token function">,</span>
        &quot;script&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
          &quot;source&quot;<span class="token dfn builtin">:</span> &quot;emit<span class="token punctuation">(</span>doc<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token dyadic-operator operator">.</span>value<span class="token dyadic-operator operator">.</span>toUpperCase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>&quot;
        <span class="token dfn builtin">}</span>
      <span class="token dfn builtin">}</span>
    <span class="token dfn builtin">}</span>
  <span class="token dfn builtin">}</span>
<span class="token dfn builtin">}</span>

<span class="token constant">#</span><span class="token comment"># 添加测试数据</span>
POST <span class="token monadic-operator operator">/</span>my<span class="token function">-</span>index<span class="token function">-</span>runtime<span class="token monadic-operator operator">/</span>_doc<span class="token monadic-operator operator">/</span><span class="token number">1</span>
<span class="token dfn builtin">{</span>
  &quot;name&quot;<span class="token dfn builtin">:</span>&quot;aaagfGFDGFD&quot;
<span class="token dfn builtin">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询：</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>GET <span class="token monadic-operator operator">/</span>my<span class="token function">-</span>index<span class="token function">-</span>runtime<span class="token monadic-operator operator">/</span>_search
<span class="token dfn builtin">{</span>
  &quot;query&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;match&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;my_runtime_field&quot;<span class="token dfn builtin">:</span> &quot;AAAGFGFDGFD&quot;
    <span class="token dfn builtin">}</span>
  <span class="token dfn builtin">}</span>
  <span class="token function">,</span> &quot;fields&quot;<span class="token dfn builtin">:</span> <span class="token punctuation">[</span>
    &quot;my_runtime_field&quot;
  <span class="token punctuation">]</span>
<span class="token dfn builtin">}</span>

<span class="token constant">#</span><span class="token constant">#</span>结果如下
<span class="token dfn builtin">{</span>
  &quot;took&quot; <span class="token dfn builtin">:</span> <span class="token number">9</span><span class="token function">,</span>
  &quot;timed_out&quot; <span class="token dfn builtin">:</span> false<span class="token function">,</span>
  &quot;_shards&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;total&quot; <span class="token dfn builtin">:</span> <span class="token number">1</span><span class="token function">,</span>
    &quot;successful&quot; <span class="token dfn builtin">:</span> <span class="token number">1</span><span class="token function">,</span>
    &quot;skipped&quot; <span class="token dfn builtin">:</span> <span class="token number">0</span><span class="token function">,</span>
    &quot;failed&quot; <span class="token dfn builtin">:</span> <span class="token number">0</span>
  <span class="token dfn builtin">}</span><span class="token function">,</span>
  &quot;hits&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;total&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;value&quot; <span class="token dfn builtin">:</span> <span class="token number">1</span><span class="token function">,</span>
      &quot;relation&quot; <span class="token dfn builtin">:</span> &quot;eq&quot;
    <span class="token dfn builtin">}</span><span class="token function">,</span>
    &quot;max_score&quot; <span class="token dfn builtin">:</span> <span class="token number">1.0</span><span class="token function">,</span>
    &quot;hits&quot; <span class="token dfn builtin">:</span> <span class="token punctuation">[</span>
      <span class="token dfn builtin">{</span>
        &quot;_index&quot; <span class="token dfn builtin">:</span> &quot;my<span class="token function">-</span>index<span class="token function">-</span>runtime&quot;<span class="token function">,</span>
        &quot;_type&quot; <span class="token dfn builtin">:</span> &quot;_doc&quot;<span class="token function">,</span>
        &quot;_id&quot; <span class="token dfn builtin">:</span> &quot;<span class="token number">1</span>&quot;<span class="token function">,</span>
        &quot;_score&quot; <span class="token dfn builtin">:</span> <span class="token number">1.0</span><span class="token function">,</span>
        &quot;_source&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
          &quot;name&quot; <span class="token dfn builtin">:</span> &quot;aaagfGFDGFD&quot;
        <span class="token dfn builtin">}</span><span class="token function">,</span>
        &quot;fields&quot; <span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
          &quot;my_runtime_field&quot; <span class="token dfn builtin">:</span> <span class="token punctuation">[</span>
            &quot;AAAGFGFDGFD&quot;
          <span class="token punctuation">]</span>
        <span class="token dfn builtin">}</span>
      <span class="token dfn builtin">}</span>
    <span class="token punctuation">]</span>
  <span class="token dfn builtin">}</span>
<span class="token dfn builtin">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在查询的时候也可以指定运行时字段，示例如下：</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>GET <span class="token monadic-operator operator">/</span>my<span class="token function">-</span>index<span class="token function">-</span>runtime<span class="token monadic-operator operator">/</span>_search
<span class="token dfn builtin">{</span>
  &quot;runtime_mappings&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
    &quot;search_runtime_field&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
      &quot;type&quot;<span class="token dfn builtin">:</span> &quot;keyword&quot;<span class="token function">,</span>
      &quot;script&quot;<span class="token dfn builtin">:</span> <span class="token dfn builtin">{</span>
        &quot;source&quot;<span class="token dfn builtin">:</span> &quot;emit<span class="token punctuation">(</span>doc<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token dyadic-operator operator">.</span>value<span class="token dyadic-operator operator">.</span>toLowerCase<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>&quot;<span class="token dfn builtin">}</span>
    <span class="token dfn builtin">}</span>
  <span class="token dfn builtin">}</span><span class="token function">,</span>
  &quot;fields&quot;<span class="token dfn builtin">:</span> <span class="token punctuation">[</span>
    &quot;search_runtime_field&quot;
  <span class="token punctuation">]</span>
<span class="token dfn builtin">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>`,24),b={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.17/mapping-types.html",target:"_blank",rel:"noopener noreferrer"};function v(m,k){const a=t("ExternalLinkIcon");return e(),l("div",null,[r,n("p",null,[n("a",b,[s("请参考官方文档"),o(a)]),s("，不再赘述。")])])}const _=i(d,[["render",v],["__file","4.Elasticsearch映射.html.vue"]]);export{_ as default};

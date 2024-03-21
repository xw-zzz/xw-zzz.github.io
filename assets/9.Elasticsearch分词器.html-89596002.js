import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const t="/assets/image-20230703221340167-bff51738.png",o={},p=e(`<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>分词器（Tokenizer）是Elasticsearch中用于将文本分割成词项（Tokens）的组件。它是在索引和搜索过程中对文本进行处理的关键部分。分词器将原始文本输入，按照一定的规则将其分割成有意义的词项，以便进行索引和搜索。</p><p>Elasticsearch提供了多种内置的分词器，以满足不同语言和需求的分词处理。以下是一些常用的分词器：</p><ul><li><strong>Standard分词器</strong>：适用于大多数语言的默认分词器。它将文本按照空格和标点符号进行分割，并进行小写转换、去除停用词等处理。</li><li><strong>Whitespace分词器</strong>：根据空格字符进行简单的分割，不进行其他处理。</li><li><strong>Keyword分词器</strong>：将整个文本作为单个词项进行索引和搜索，不进行分割。</li><li><strong>Simple分词器</strong>：按照非字母字符进行分割，并进行小写转换。</li><li><strong>Language分词器</strong>：针对特定语言的分词器，如English、Chinese等。它们使用特定的规则和字典来处理相应语言的文本。</li><li><strong>Stop分词器</strong>：stop 分析器 和 simple 分析器很像，唯⼀不同的是，stop 分析器增加了对删除停⽌词的⽀ 持，默认使⽤了english停⽌词，stopwords 预定义的停⽌词列表，⽐如 (the,a,an,this,of,at)等等</li><li><strong>Pattern分词器</strong>：⽤正则表达式来将⽂本分割成terms，默认的正则表达式是\\W+（⾮单词字符）</li></ul><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><h2 id="示例使用" tabindex="-1"><a class="header-anchor" href="#示例使用" aria-hidden="true">#</a> 示例使用</h2><p>使用Whitespace分词器示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>## 创建索引，这里自定了一个分词器，实际是使用whitespace
PUT /inde-aaa/
<span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;analysis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;my-analyzer&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;whitespace&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-analyzer&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

## 插入测试数据
POST /inde-aaa/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;xw&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello world&quot;</span>
<span class="token punctuation">}</span>

## 测试查询
GET /inde-aaa/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;world&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中文分词器" tabindex="-1"><a class="header-anchor" href="#中文分词器" aria-hidden="true">#</a> 中文分词器</h2><p>在Elasticsearch中，有多种中文分词器可用于将中文文本进行分词处理。以下是一些常用的中文分词器：</p><ol><li><strong>Smartcn分词器</strong>：Smartcn是Elasticsearch自带的中文分词器之一。它基于Lucene的中文分词器，能够进行智能分词，具备较好的中文分词效果。</li><li><strong>IK分词器</strong>：IK是一款开源的中文分词器，也是Elasticsearch常用的中文分词器之一。它提供了细粒度和智能两种分词模式，支持中文词典扩展和自定义词典的功能。</li><li><strong>Jieba分词器</strong>：Jieba是Python中常用的中文分词库，也有对应的Elasticsearch插件。它基于统计算法和词典匹配，能够进行精确分词和全模式分词。</li><li><strong>Ansj分词器</strong>：Ansj是一款开源的中文分词器，提供了多种分词模式和分词算法。它具备较高的分词速度和较好的分词效果。</li></ol><p>以IK分词器使用为例，</p><ol><li><p>首先需要安装ik分词器插件，由于我是容器部署的ES,可以直接进入容器进行安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch <span class="token function">bash</span>

<span class="token comment">## 安装分词器</span>
 ./bin/elasticsearch-plugin <span class="token function">install</span> https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.14.0/elasticsearch-analysis-ik-7.14.0.zip

<span class="token comment">##退出容器</span>
<span class="token builtin class-name">exit</span>

<span class="token comment">##重启es</span>
<span class="token function">docker</span> restart elasticsearch


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建索引</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /inde-bbb/
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加测试数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /inde-bbb/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;xw&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;向往好好学习天天向上&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试查询结果如下图所示：</p><p><img src="`+t+'" alt="image-20230703221340167" loading="lazy"></p></li></ol>',13),i=[p];function l(c,r){return s(),a("div",null,i)}const v=n(o,[["render",l],["__file","9.Elasticsearch分词器.html.vue"]]);export{v as default};

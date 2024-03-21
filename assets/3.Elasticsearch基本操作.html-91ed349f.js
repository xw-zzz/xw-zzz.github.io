import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-ef0b4d9d.js";const p={},o=t(`<h1 id="索引操作" tabindex="-1"><a class="header-anchor" href="#索引操作" aria-hidden="true">#</a> 索引操作</h1><ul><li><p>创建索引</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>## 创建索引
PUT localhost<span class="token operator">:</span><span class="token number">9200</span>/nba 
<span class="token punctuation">{</span>
    <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;shards_acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nba&quot;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取索引</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET localhost<span class="token operator">:</span><span class="token number">9200</span>/nba
<span class="token punctuation">{</span>
    <span class="token property">&quot;nba&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1589206816630&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2u-wlpkKSoaIhp8h9Biqmg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7020199&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nba&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除索引</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>DELETE localhost<span class="token dfn builtin">:</span><span class="token number">9200</span><span class="token monadic-operator operator">/</span>nba

<span class="token dfn builtin">{</span>
&quot;acknowledged&quot;<span class="token dfn builtin">:</span> true
<span class="token dfn builtin">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>批量获取</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT localhost<span class="token operator">:</span><span class="token number">9200</span>/cba
PUT localhost<span class="token operator">:</span><span class="token number">9200</span>/nba

## 批量获取，用逗号隔开
GET localhost<span class="token operator">:</span><span class="token number">9200</span>/cba<span class="token punctuation">,</span>nba

<span class="token punctuation">{</span>
    <span class="token property">&quot;cba&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1589208603245&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cuW6GYutR-Sat5vPtMiWCA&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7020199&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cba&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nba&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1589208584555&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dkBxRSTNTzCasgi_f67F3g&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7020199&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nba&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取所有索引</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET localhost<span class="token operator">:</span><span class="token number">9200</span>/_all

<span class="token punctuation">{</span>
    <span class="token property">&quot;cba&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1589208603245&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cuW6GYutR-Sat5vPtMiWCA&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7020199&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cba&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;nba&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1589208584555&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dkBxRSTNTzCasgi_f67F3g&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7020199&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nba&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关闭索引</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>POST localhost<span class="token dfn builtin">:</span><span class="token number">9200</span><span class="token monadic-operator operator">/</span>nba<span class="token monadic-operator operator">/</span>_close
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>打开索引</p><div class="language-apl line-numbers-mode" data-ext="apl"><pre class="language-apl"><code>POST localhost<span class="token dfn builtin">:</span><span class="token number">9200</span><span class="token monadic-operator operator">/</span>nba<span class="token monadic-operator operator">/</span>_open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h1 id="文档操作" tabindex="-1"><a class="header-anchor" href="#文档操作" aria-hidden="true">#</a> 文档操作</h1><ul><li><p>新增文档</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>##指定ID
PUT /nba/_doc/<span class="token number">1</span> 
<span class="token punctuation">{</span>
 <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;哈登&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;team_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;⽕箭&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;position&quot;</span><span class="token operator">:</span><span class="token string">&quot;得分后卫&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;play_year&quot;</span><span class="token operator">:</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;jerse_no&quot;</span><span class="token operator">:</span><span class="token string">&quot;13&quot;</span>
<span class="token punctuation">}</span>

## 不指定ID
POST /nba/_doc/
<span class="token punctuation">{</span>
 <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;哈登11&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;team_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;⽕箭&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;position&quot;</span><span class="token operator">:</span><span class="token string">&quot;得分后卫&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;play_year&quot;</span><span class="token operator">:</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;jerse_no&quot;</span><span class="token operator">:</span><span class="token string">&quot;13&quot;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看指定ID文档</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /nba/_doc/<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改指定文档</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /nba/_update/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;xwxwxw&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除指定文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /nba/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,4),e=[o];function l(i,c){return s(),a("div",null,e)}const d=n(p,[["render",l],["__file","3.Elasticsearch基本操作.html.vue"]]);export{d as default};

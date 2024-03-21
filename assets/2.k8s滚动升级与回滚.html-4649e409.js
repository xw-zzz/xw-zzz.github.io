import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const l={},t=e(`<h2 id="滚动升级" tabindex="-1"><a class="header-anchor" href="#滚动升级" aria-hidden="true">#</a> 滚动升级</h2><p>示例<code>nginx.yaml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> xw<span class="token punctuation">-</span>nginx
  <span class="token key atrule">name</span><span class="token punctuation">:</span> xw<span class="token punctuation">-</span>nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2022-02-11</span>
    <span class="token comment">## 最大不可用pod数量</span>
    <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token comment">## 用来指定可以创建的超出期望 Pod 个数的 Pod 数量。此值可以是绝对数（例如，5）或所需 Pods 的百分比（例如，10%）</span>
    <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.23.0
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里必须指定升级策略为 <code>RollingUpdate</code>，升级策略有如下几种：</p><ul><li>Recreate ： 删除全部旧的pod，然后创建新的pod</li><li>RollingUpdate：滚动升级更新，删除部分，更新部分，在整个更新过程中，存在两个版本的pod <ul><li>maxUnavailable ，升级过程中不可用Pod的最大数量，默认为25%，在滚动更新时，我们可以忍受多少个 Pod 无法提供服务，值越小越能保证服务稳定,更新越平滑</li><li>maxSurge，用来指定可以创建的超出期望 Pod 个数的 Pod 数量。此值可以是绝对数（例如，5）或所需 Pods 的百分比（例如，10%）</li></ul></li></ul><p>使用 <code>kubectl apply -f nginx.yaml</code>进行更新。</p><h2 id="回滚" tabindex="-1"><a class="header-anchor" href="#回滚" aria-hidden="true">#</a> 回滚</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看历史版本列表</span>
kubectl rollout <span class="token function">history</span> deployment/xw-nginx <span class="token parameter variable">-n</span> dev

<span class="token comment">## 查看具体某一个历史版本信息</span>
kubectl rollout <span class="token function">history</span> deployment/xw-nginx <span class="token parameter variable">-n</span> dev <span class="token parameter variable">--revision</span><span class="token operator">=</span><span class="token number">2</span>

<span class="token comment">## 回滚上一版本</span>
kubectl rollout undo deployment/xdclass-deploy <span class="token parameter variable">-n</span> dev

<span class="token comment">## 查看升级情况</span>
kubectl rollout status deployment/xdclass-deploy <span class="token parameter variable">-n</span> dev

<span class="token comment">## 回滚指定版本</span>
kubectl rollout undo deployment/xdclass-deploy <span class="token parameter variable">-n</span> dev --to-revision<span class="token operator">=</span><span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[t];function i(c,o){return s(),a("div",null,p)}const r=n(l,[["render",i],["__file","2.k8s滚动升级与回滚.html.vue"]]);export{r as default};

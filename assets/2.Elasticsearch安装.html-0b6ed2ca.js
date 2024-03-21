import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,b as a}from"./app-ef0b4d9d.js";const s={},c=a(`<h1 id="单机docker安装" tabindex="-1"><a class="header-anchor" href="#单机docker安装" aria-hidden="true">#</a> 单机Docker安装</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 创建网络
docker network create elastic


## 安装es
docker run -d --name elasticsearch --net elastic -p 9200:9200 -p 9300:9300 \\
-e &quot;discovery.type=single-node&quot; -t elasticsearch:7.14.0

## 安装kibana
docker run -d --name kibana --net elastic -p 5601:5601 kibana:7.14.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>需要先安装Docker环境，本文不再赘述，可参考Docker安装章节</p></div>`,3),r=[c];function t(d,l){return n(),i("div",null,r)}const u=e(s,[["render",t],["__file","2.Elasticsearch安装.html.vue"]]);export{u as default};

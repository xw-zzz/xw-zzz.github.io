import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,b as n}from"./app-ef0b4d9d.js";const s="/assets/architecture_2160x720-f246e606.png",l="/assets/skywalking-403a8e11.png",r={},d=n('<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>skywalking是分布式应用程序的性能监控工具，专门是为了微服务（spring cloud）、云原生架构与容器架构（docker/k8s）而设计的，是一款APM工具，它具有分布式追踪、性能指标分析、应用和服务依赖分析等功能。</p><h1 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h1><p>skywalking由探针，平台后端，存储和用户界面四部分组成，架构如下图所示：</p><p><img src="'+s+'" alt="img" loading="lazy"></p><ul><li>探针收集数据，包括各种格式的度量、指标、日志和事件</li><li>平台后端支持数据聚合，分析和流处理涵盖跟踪，指标，日志和事件</li><li>存储用来存储相关指标数据</li><li>UI提供可视化展示</li></ul><h1 id="安装部署" tabindex="-1"><a class="header-anchor" href="#安装部署" aria-hidden="true">#</a> 安装部署</h1><h2 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h2><p><img src="'+l+`" alt="skywalking" loading="lazy"></p><h2 id="docker方式安装" tabindex="-1"><a class="header-anchor" href="#docker方式安装" aria-hidden="true">#</a> Docker方式安装</h2><ul><li><p>安装集群ES</p></li><li><p>安装ES</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--network</span><span class="token operator">=</span>host <span class="token parameter variable">--name</span> es <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> docker.io/elasticsearch:7.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装skywalking</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --restart=always -d --network=host \\
-e TZ=Asia/Shanghai \\
-e SW_STORAGE=elasticsearch \\
-e SW_STORAGE_ES_CLUSTER_NODES=192.168.1.197:9200,192.168.1.198:9200,192.168.1.199:9200 \\
-e SW_ES_USER=elastic \\
-e SW_ES_PASSWORD=tiduyun \\
-e SW_CLUSTER=nacos \\
-e SW_CLUSTER_NACOS_HOST_PORT=192.168.0.181:8848 \\
-e SW_CLUSTER_NACOS_PASSWORD=nacos \\
-e SW_CLUSTER_NACOS_USERNAME=nacos \\
-e SW_ENABLE_UPDATE_UI_TEMPLATE=true \\
-v /data/skywalking/config:/skywalking/config \\
-v /data/skywalking/oap-libs:/skywalking/oap-libs \\
--name oap apache/skywalking-oap-server:9.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装UI</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name oap-ui --restart always -d -p 80:8080 -e SW_OAP_ADDRESS=http://192.168.1.199:12800 apache/skywalking-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问地址：\${UI-IP}:8080</p></li></ul><div class="hint-container tip"><p class="hint-container-title">建议</p><p>本部署方式只适用开发、测试环境使用。</p></div><h1 id="源码编译" tabindex="-1"><a class="header-anchor" href="#源码编译" aria-hidden="true">#</a> 源码编译</h1><h2 id="oap" tabindex="-1"><a class="header-anchor" href="#oap" aria-hidden="true">#</a> OAP</h2><ul><li><p>从官网页面下载</p></li><li><p>进入目录，执行，要求JDK11,如有报错，可修改版本</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
    &lt;rules&gt;
        &lt;requireJavaVersion&gt;
            &lt;version&gt;1.8.0-291&lt;/version&gt;
        &lt;/requireJavaVersion&gt;
    &lt;/rules&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,15),t=[d];function c(o,p){return a(),i("div",null,t)}const h=e(r,[["render",c],["__file","01.SkyWalking链路追踪.html.vue"]]);export{h as default};

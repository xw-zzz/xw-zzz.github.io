import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as l,f as o,a as e,e as n,d as a,b as r}from"./app-ef0b4d9d.js";const c="/assets/image-fa622f51-9f78e956.png",u="/assets/image-5398930f-e646cf87.png",m="/assets/image-09030261-5034fc67.png",p="/assets/image-add560f6-a83a3639.png",v={},h=e("h2",{id:"简述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简述","aria-hidden":"true"},"#"),n(" 简述")],-1),g=e("p",null,[n("最近在学习 SpringBoot 应用监控方面知识，现在大多数的服务都是分布式架构，跟踪和监视这些服务非常重要，在此做下整理。"),e("br"),n(" 监控指标主要包括以下方面：")],-1),b=e("ul",null,[e("li",null,"服务可用性"),e("li",null,"容错性"),e("li",null,"安全"),e("li",null,"数据收集"),e("li")],-1),_=e("h2",{id:"系统组成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统组成","aria-hidden":"true"},"#"),n(" 系统组成")],-1),f={href:"https://docs.influxdata.com/influxdb/v1.7/introduction/getting-started/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.timescale.com/latest/introduction",target:"_blank",rel:"noopener noreferrer"},y={href:"https://prometheus.io/docs/introduction/overview/",target:"_blank",rel:"noopener noreferrer"},I=e("li",null,"面板（显示），将存储的数据显示。",-1),k=e("li",null,"数据拉取获推送组件。",-1),B=r(`<p>这是最基本的组成，除此之外，我们还可以集成很多其他组件，如报警组件。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><p>在Spring Boot应用中， Spring Boot Actuator提供了监控数据的获取功能，开箱即用。因此我们只需要在监控数据存储和可视化显示上选择方案。</p><h3 id="监控数据存储方案" tabindex="-1"><a class="header-anchor" href="#监控数据存储方案" aria-hidden="true">#</a> 监控数据存储方案</h3><h4 id="_1-infuxdb" tabindex="-1"><a class="header-anchor" href="#_1-infuxdb" aria-hidden="true">#</a> <strong>1.InfuxDB</strong></h4><p>Influxdb 是一个时间序列数据库，用于处理高负载读写。<br> 1.安装InfuxDB</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 8086:8086 -v /tmp:/var/lib/influxdb influxdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.应用程序添加依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;micrometer-registry-influx&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>management:
    metrics:
        export:
            influx:
                db: customDbName
                password: mySecret
                uri: http://localhost:8086
                user-name: myUserName

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-prometheus" tabindex="-1"><a class="header-anchor" href="#_2-prometheus" aria-hidden="true">#</a> <strong>2.Prometheus</strong></h4><p>普罗米修斯是一个开源的监控和警报工具包，由SoundCloud编写。它的工作方式与infloxdb略有不同。与其配置应用程序将度量发布到普罗米修斯，不如配置普罗米修斯定期轮询应用程序。<br> 1、添加依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;micrometer-registry-prometheus&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们必须将在Prometheus.yml文件中进行配置来轮询应用程序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>global:
  scrape_interval: 60s
  evaluation_interval: 60s
scrape_configs:
  - job_name: &#39;demo&#39;
    metrics_path: &quot;/actuator/prometheus&quot;
    scrape_interval: 5s
    static_configs:
      - targets: [&#39;129.204.148.xx:9999&#39;]                                      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动普罗米修斯，命令如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
--name=prometheus \\
-p 9090:9090 \\
-v /etc/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \\
prom/prometheus \\
--config.file=/etc/prometheus/prometheus.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),S={href:"http://ip:9090/%E8%AE%BF%E9%97%AE%E3%80%82",target:"_blank",rel:"noopener noreferrer"},E=e("br",null,null,-1),G=e("img",{src:c,alt:"image.png",loading:"lazy"},null,-1),N=r(`<h4 id="_3-graphite" tabindex="-1"><a class="header-anchor" href="#_3-graphite" aria-hidden="true">#</a> 3.Graphite</h4><p>Graphite是另一个开源的时间序列数据库。它的体系结构比我们看到的其他数据库稍微复杂一些，但是使用Docker，在本地运行一个实例很简单。<br> 1、运行Graphite</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
 --name graphite \\
 --restart=always \\
 -p 80:80 \\
 -p 2003-2004:2003-2004 \\
 -p 2023-2024:2023-2024 \\
 -p 8125:8125/udp \\
 -p 8126:8126 \\
 graphiteapp/graphite-statsd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、添加依赖、配置文件<br> pom添加依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
    &lt;artifactId&gt;micrometer-registry-graphite&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application.properties添加如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>management:
    metrics:
        export:
            graphite:
                host: 127.0.0.1
                port: 2004

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),w={href:"http://localhost/%E3%80%82",target:"_blank",rel:"noopener noreferrer"},z=e("br",null,null,-1),D=e("img",{src:u,alt:"image.png",loading:"lazy"},null,-1),A=r(`<h3 id="可视化工具" tabindex="-1"><a class="header-anchor" href="#可视化工具" aria-hidden="true">#</a> 可视化工具</h3><p>一旦我们有了一个在我们的Spring Boot应用程序之外存储度量的解决方案，下一个决定就是我们希望如何可视化数据。Grafana 通常比大多数内置的可视化工具提供更好的配置和更好的警报。 使用插件可以很容易地扩展它，并且有许多预先构建的指示板可以导入以快速创建我们自己的可视化。</p><h4 id="_1-grafana" tabindex="-1"><a class="header-anchor" href="#_1-grafana" aria-hidden="true">#</a> 1.Grafana</h4><p>Grafana 是一个开源分析和监控工具。 它可以连接到前面提到的所有数据库，以及许多其他数据库。<br> 1、安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3000:3000 grafana/grafana  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),V={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://grafana.com/grafana/dashboards/4701/revisions",target:"_blank",rel:"noopener noreferrer"},P=r('<p><img src="'+m+'" alt="image.png" loading="lazy"></p><p><img src="'+p+'" alt="image.png" loading="lazy"></p><h2 id="其他方案" tabindex="-1"><a class="header-anchor" href="#其他方案" aria-hidden="true">#</a> 其他方案</h2><h3 id="spring-boot-admin" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin" aria-hidden="true">#</a> Spring Boot Admin</h3>',4),C={href:"https://www.xwzzy.club/articles/2019/11/04/1572876995932.html",target:"_blank",rel:"noopener noreferrer"},U=e("br",null,null,-1);function q(O,R){const i=s("ExternalLinkIcon");return d(),l("div",null,[h,o("more"),g,b,_,e("ol",null,[e("li",null,[n("监控数据存储（时间序列数据库），有 "),e("a",f,[n("InfluxDB"),a(i)]),n(", "),e("a",x,[n("TimescaleDB"),a(i)]),n(", "),e("a",y,[n("Prometheus"),a(i)]),n("等")]),I,k]),B,e("p",null,[n("Prometheus 提供了自己的可视化工具来查看收集到的指标，通过URL "),e("a",S,[n("http://ip:9090/访问。"),a(i)]),E,G]),N,e("p",null,[n("和普罗米修斯一样，Graphite 也有自己的可视化界面。访问地址："),e("a",w,[n("http://localhost/。"),a(i)]),z,D]),A,e("p",null,[n("我们现在可以通过 URL "),e("a",V,[n("http://localhost:3000/"),a(i)]),n(" 访问 Grafana 主页。随后只需我们配置数据源就OK。我们可以导入面板JSON文件，无需自己手动添加配置。如下图所示。"),e("a",L,[n("链接地址"),a(i)])]),P,e("p",null,[n("具体实现--》"),e("a",C,[n("sprongboot Admin"),a(i)]),U,n(" spring boot admin是Springcloud全家桶的一员，它连接到spring boot实例、聚合节点等。但是，/metrics端点并不是沿着时间线监视的，因此没有时间序列的监控数据。")])])}const F=t(v,[["render",q],["__file","7.springboot应用监控方案.html.vue"]]);export{F as default};

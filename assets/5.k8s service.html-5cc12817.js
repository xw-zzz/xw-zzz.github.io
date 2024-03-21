import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>在k8s里面，每个Pod都会被分配一个单独的IP地址,但这个IP地址会随着Pod的销毁而消失，重启pod的ip地址会发生变化，此时客户如果访问原先的ip地址则会报错，Service (服务)就是用来解决这个问题的, 对外服务的统一入口，防止pod失联，定义一组pod的访问策略（服务发现、负载均衡）。</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><ul><li><p>ClusterIP，默认类型，自动分配一个【仅集群内部】可以访问的虚拟IP。</p></li><li><p>NodePort，对外访问应用使用，在ClusterIP基础上为Service在每台机器上绑定一个端口，就可以通过: ip+NodePort来访问该服务。</p></li><li><p>LoadBalancer，使在NodePort的基础上，借助公有云创建一个外部负载均衡器，并将请求转发到NodePort。</p><h2 id="service与pod关联" tabindex="-1"><a class="header-anchor" href="#service与pod关联" aria-hidden="true">#</a> service与pod关联</h2></li></ul><p>service和pod之间是通过 selector.app进行关联的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spec: # 描述
  selector: # 标签选择器，确定当前service代理控制哪些pod
    app: nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service端口" tabindex="-1"><a class="header-anchor" href="#service端口" aria-hidden="true">#</a> service端口</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: apps/v1
kind: Service
metadata:
  name: nginx
spec:
  type: NodePort # 有配置NodePort，外部可访问k8s中的服务，默认为ClusterIP
  ports:
  - name: nginx
    port: 80  # 服务service的访问端口
    protocol: TCP
    targetPort: 80  # pod端口,映射到容器端口
    nodePort: 30015  # NodePort，通过nodeport类型的service暴露给集群外部访问
  selector:
    app: nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>port，service端口，即k8s中服务之间的访问端口 ，clusterIP:port 是提供给集群内部客户访问service的入口</li><li>nodePort，容器所在node节点的端口，通过nodeport类型的service暴露给集群节点，外部可以访问的端口</li><li>targetPort，从port和nodePort来的流量经过kube-proxy流入到后端pod的targetPort上，最后进入容器。</li><li>containerPort，是pod内部容器的端口，targetPort映射到containerPort。</li></ul><p><strong>说明</strong>：port和nodePort都是service的端口，port暴露给集群内客户访问服务，nodePort暴露给集群外客户访问服务，这两个端口到来的数据都需要经过反向代理kube-proxy流入后端pod的targetPod，从而到达pod中的容器。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>nginx：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31111</span> <span class="token comment">#对外暴露端口</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">## 服务service的访问端口</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> web
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">## pod端口,映射到容器端口</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
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
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.23.0
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">## 容器端口</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[p];function l(c,o){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","5.k8s service.html.vue"]]);export{d as default};

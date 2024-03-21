import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-ef0b4d9d.js";const l="/assets/20220726113520-58dc4523.png",i="/assets/20220726145236-5ec564e1.png",t="/assets/20220726145503-ecbf218b.png",p="/assets/20220726150300-4352f599.png",c={},u=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Volume（卷）是k8s抽象出来的对象，它被定义在Pod上，然后被一个Pod里的多个容器挂载到具体的文件目录下，kubernetes通过Volume实现同一个Pod中不同容器之间的数据共享以及数据的持久化存储，Volume的生命周期不与Pod中单个容器的生命周期相关，当容器终止或者重启时，Volume中的数据也不会丢失。K8S可以支持许多类型的卷，Pod 也能同时使用任意数量的卷。</p><p>Volume常见的类型：</p><ul><li>常规存储：EmptyDir、HostPath</li><li>高级存储：PV、PVC</li><li>配置存储：ConfigMap、Secret</li><li>其他：网络存储系统 NFS、CIFS，包括云服务商提供的、本地、分布式</li></ul><h2 id="常见卷类型" tabindex="-1"><a class="header-anchor" href="#常见卷类型" aria-hidden="true">#</a> 常见卷类型</h2><h3 id="emptydir" tabindex="-1"><a class="header-anchor" href="#emptydir" aria-hidden="true">#</a> EmptyDir</h3><p>当 Pod 分派到某个 Node 上时，<code>emptyDir</code> 卷会被创建，并且在 Pod 在该节点上运行期间，卷一直存在。 就像其名称表示的那样，卷最初是空的。 尽管 Pod 中的容器挂载 <code>emptyDir</code> 卷的路径可能相同也可能不同，这些容器都可以读写 <code>emptyDir</code> 卷中相同的文件。 当 Pod 因为某些原因被从节点上删除时，<code>emptyDir</code> 卷中的数据也会被永久删除。</p><p><code>emptyDir</code> 的一些用途：</p><ul><li>缓存空间，例如基于磁盘的归并排序。</li><li>为耗时较长的计算任务提供检查点，以便任务能方便地从崩溃前状态恢复执行。</li><li>在 Web 服务器容器服务数据时，保存内容管理器容器获取的文件。</li></ul><p>示例：</p><ul><li><p>编辑<code>volume-emptydir.yaml</code>,添加以下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>emptydir
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.20</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 将nginx-log-volume挂在到nginx容器中，对应的目录为 /var/log/nginx</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>log<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/nginx

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span>1.35.0 
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tail -f /usr/local/test/access.log&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 容器启动后初始命令，读取指定文件中内容</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 将nginx-log-volume挂在到busybox容器中，对应的目录为 /logs</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>log<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/test

  <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 这里声明volume存储劵， name为nginx-log-volume，类型是emptyDir</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>log<span class="token punctuation">-</span>volume
    <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行以下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f volume-emptydir.yaml
## 查看
kubectl get pods -n dev -o wide

#访问nignx 产生访问日志
curl ip

##查看busybox日志
kubectl logs -f volume-emptydir -n dev -c busybox

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="" loading="lazy"></p></li></ul><p>​</p><ul><li><p>删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete <span class="token parameter variable">-f</span> volume-emptydir.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="hostpath" tabindex="-1"><a class="header-anchor" href="#hostpath" aria-hidden="true">#</a> HostPath</h3><p>emptyDir中数据没做持久化，随着Pod的结束而销毁，需要持久化到磁盘则选其他方式，hostPath类型的磁盘就是挂在了主机的一个文件或者目录。hostPath有以下几个类型：</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td><code>DirectoryOrCreate</code></td><td>如果在给定路径上什么都不存在，那么将根据需要创建空目录，权限设置为 0755，具有与 kubelet 相同的组和属主信息。</td></tr><tr><td><code>Directory</code></td><td>在给定路径上必须存在的目录。</td></tr><tr><td><code>FileOrCreate</code></td><td>如果在给定路径上什么都不存在，那么将在那里根据需要创建空文件，权限设置为 0644，具有与 kubelet 相同的组和所有权。</td></tr><tr><td><code>File</code></td><td>在给定路径上必须存在的文件。</td></tr><tr><td><code>Socket</code></td><td>在给定路径上必须存在的 UNIX 套接字。</td></tr><tr><td><code>CharDevice</code></td><td>在给定路径上必须存在的字符设备。</td></tr><tr><td><code>BlockDevice</code></td><td>在给定路径上必须存在的块设备。</td></tr><tr><td>空值</td><td>不执行任何检查</td></tr></tbody></table><p>示例：</p><ul><li>编辑<code>volume-hostpath.yaml</code>,添加以下内容：</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>hostpath
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.20</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 将nginx-log-volume挂在到nginx容器中，对应的目录为 /var/log/nginx</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>log<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/nginx

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span>1.35.0 
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tail -f /usr/local/test/access.log&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 容器启动后初始命令，读取指定文件中内容</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 将nginx-log-volume挂在到busybox容器中，对应的目录为 /logs</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>log<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/test

  <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 这里声明volume存储劵， name为nginx-log-volume，类型是emptyDir</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>log<span class="token punctuation">-</span>volume
    <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /data/test
      <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行以下命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> volume-hostpath.yaml

<span class="token comment">## 查看</span>
kubectl get pods <span class="token parameter variable">-n</span> dev <span class="token parameter variable">-o</span> wide

<span class="token comment">#访问nignx 产生访问日志</span>
<span class="token function">curl</span> <span class="token function">ip</span>

<span class="token comment">##查看busybox日志</span>
kubectl logs <span class="token parameter variable">-f</span> volume-hostpath <span class="token parameter variable">-n</span> dev <span class="token parameter variable">-c</span> busybox

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220726114907.png" alt="" loading="lazy"></p><ul><li><p>删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete <span class="token parameter variable">-f</span> volume-hostpath.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="configmap" tabindex="-1"><a class="header-anchor" href="#configmap" aria-hidden="true">#</a> ConfigMap</h3><p>ConfigMap 是 Kubernetes 用来向应用 Pod 中注入配置数据的方法,可以用作环境变量、命令行参数等，将环境变量、配置信息和容器镜像解耦，便于应用配置的修改。</p><ul><li><p>编辑configmap.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> configmap
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">info</span><span class="token punctuation">:</span> 
    username<span class="token punctuation">:</span>xdclass
    password<span class="token punctuation">:</span><span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建</span>
kubectl create <span class="token parameter variable">-f</span> configmap.yaml


<span class="token comment"># 查看configmap详情</span>
kubectl describe cm configmap <span class="token parameter variable">-n</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建<code>pod-configmap.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>configmap
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.20</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># configmap挂载的目录</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /config

  <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 声明configmap</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
    <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> configmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> pod-configmap <span class="token parameter variable">-n</span> dev -- /bin/sh
<span class="token builtin class-name">cd</span> /config
<span class="token function">cat</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220726140151.png" alt="" loading="lazy"></p></li></ul><h3 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> Secret</h3><p>有些配置需要加密存储，ConfigMap只能使用明文保存，因此不适合，Secret用来保存敏感信息，例如密码、秘钥、证书、OAuth 令牌和 ssh key等。</p><ul><li><p>创建<code>secret.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysecret
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> YWRtaW4=
  <span class="token key atrule">password</span><span class="token punctuation">:</span> MTIzNDU2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建</span>
kubectl apply <span class="token parameter variable">-f</span> secret.yaml 

<span class="token comment"># 查看secret的信息</span>
kubectl get secret

<span class="token comment"># 查看mysecret详细信息</span>
kubectl get secret mysecret <span class="token parameter variable">-o</span> yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建 <code>pod-secret-volume.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>secret
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.20</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># secret挂载</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/secret
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
    <span class="token key atrule">secret</span><span class="token punctuation">:</span>
      <span class="token key atrule">secretName</span><span class="token punctuation">:</span> mysecret
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> pod-secret -- /bin/sh
<span class="token comment">#ls /etc/secret</span>
<span class="token comment">#cat /etc/secret/username</span>
<span class="token comment">#cat /etc/secret/password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220726141528.png" alt="" loading="lazy"></p></li></ul><p>​ <strong>在pod容器中查看数据已经被解密。</strong></p><h3 id="nfs" tabindex="-1"><a class="header-anchor" href="#nfs" aria-hidden="true">#</a> NFS</h3><h4 id="部署nfs" tabindex="-1"><a class="header-anchor" href="#部署nfs" aria-hidden="true">#</a> 部署NFS</h4><ul><li><p>下载nfs-util （对应要用到的节点都需要安装，但是不需要启动）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install nfs-utils -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建目录（nfs服务器执行）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#目录可以自定义</span>
<span class="token function">mkdir</span> /opt/nfsdata
<span class="token comment">#给路径授权</span>
<span class="token function">chmod</span> <span class="token number">777</span> /opt/nfsdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编辑/etc/exports 配置文件（nfs服务器执行）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/exports
# 目录的读写权限暴露给这个网段的全部主机
/opt/nfsdata 192.168.0.0/24(rw,insecure,sync)

解释
   172.31.101.0/24表示的IP范围, 换成32位二进制，四组，每组8位
   /24 表示前24位不变，后8位由全0变化到全1的过程，也就是由“00000000”变化到“11111111”
    又因为全0是子网网络地址，全1是子网广播地址，这两个地址是不分配给主机使用的。
    所以有效的可分配的范围是前24位不变，后8位由“00000001”变化为“11111110”的范围
    再转换回十进制就是172.31.101.1~172.31.101.254
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数 <ul><li>rw 共享目录可读可写</li><li>secure 限制客户端只能从小于1024的tcp/ip端口连接服务器；</li><li><strong>insecure</strong>允许客户端从大于1024的tcp/ip端口连接服务器；</li><li>sync 将数据同步写入内存缓冲区与磁盘中，效率低，但可以保证数据的一致性；</li><li>async 将数据先保存在内存缓冲区中，必要时才写入磁盘；</li></ul></li></ul></li></ul><ul><li><p>启动rpcbind(安装nfs依赖包会自动下载)和nfs服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>验证</p><ul><li>showmount -e localhost</li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3></li></ul><ul><li><p>创建pod挂载nfs,创建文件<code>pod-nfs.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>nfs
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> 
    <span class="token key atrule">apps</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>nfs
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.20</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/nginx
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
    <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
      <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.0.112  <span class="token comment">#nfs服务器地址</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /opt/nfsdata <span class="token comment">#共享文件路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 执行命令
kubectl apply -f pod-nfs.yaml 

## 暴露服务
kubectl expose pod pod-nfs -n dev --port=80 --target-port=80 --type=NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问nginx页面，可查到挂载目录产生了日志：</p></li></ul><p>​ <img src="https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220726143300.png" alt="" loading="lazy"></p><h3 id="pv-pvc" tabindex="-1"><a class="header-anchor" href="#pv-pvc" aria-hidden="true">#</a> PV&amp;PVC</h3><p>PV 持久卷（Persistent Volume）:是集群中由管理员配置的一段网络存储，它是集群的一部分资源和底层存储密切相关，对象包含存储实现的细节，即 对接NFS、CIFS等存储系统,不同的PV会对应到不用的存储资源，这样在部署pod的时候直接调用集群内部的pv即可,PV没有命名空间隔离概念.</p><p>PVC 持久卷声明 （Persistent Volume Claim）: PVC是用户存储的一种声明， PVC 可以请求特定的存储空间和访问模式，PVC 消耗的是 PV 资源,PVC必须与对应的PV建立关系，PVC会根据定义的PV去申请,创建pod的时候会附带一个PVC的请求，PVC的请求相当于就是去寻找一个合适的pv。</p><p><strong>PV 是集群中的【资源】，PVC 是对这些【资源的请求】</strong></p><h4 id="pv模板" tabindex="-1"><a class="header-anchor" href="#pv模板" aria-hidden="true">#</a> PV模板</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv1
spec:
  capacity:
    storage: 5Gi #存储大小
  accessModes:#访问模式
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle #回收策略
  storageClassName: slow #存储类别
  nfs:#卷插件
    path: /tmp
    server: 172.31.101.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>**存储大小：**存储大小是可以设置和请求的唯一资源。 未来可能会包含 IOPS、吞吐量等属性</p></li><li><p><strong>访问模式</strong>：用户对资源的访问权限</p><ul><li>ReadWriteOnce（RWO）：读写权限，只能被单个节点挂载</li><li>ReadOnlyMany（ROX）： 只读权限，可以被多个节点挂载</li><li>ReadWriteMany（RWX）：读写权限，可以被多个节点挂载</li></ul></li><li><p><strong>存储类别：</strong></p><ul><li>每个 PV 可以属于某个类，通过将其 storageClassName属性设置为某个 StorageClass 的名称来指定。</li><li>特定类的 PV 卷只能绑定到请求该类存储卷的 PVC 申领。</li><li>未设置 storageClassName 的 PV 卷没有类设定，只能给到那些没有指定特定 存储类的 PVC 申领。</li></ul></li><li><p><strong>回收策略（当PV不再被使用了之后的处理策略）</strong></p><ul><li><p>保留 Retain -- 当PV对象被删除之后，与之相关的位于外部的基础设施中的数据仍然存在（如nfs），需要根据实际情况手动回收</p></li><li><p>回收 Recycle -- 相当于在卷上执行rm -rf /volume/* 操作，之后该卷可以用于新的pvc申领</p></li><li><p>删除 Delete -- 当PV对象被删除之后，与之相关的位于外部的基础设施中的数据也被一并删除（如nfs），需要根据实际情况手动回收，更多是云厂商设备</p></li></ul></li><li><p><strong>状态（ PV 的生命周期有4种不同状态）</strong></p><ul><li>Available（可用）——一块空闲资源还没有被任何声明绑定</li><li>Bound（已绑定）——卷已经被声明绑定</li><li>Released（已释放）——声明被删除，但是资源还未被集群重新声明</li><li>Failed（失败）——该卷的自动回收失败</li></ul></li></ul><h4 id="pvc模板" tabindex="-1"><a class="header-anchor" href="#pvc模板" aria-hidden="true">#</a> PVC模板</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc1
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> <span class="token comment"># 访问模式</span>
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 采用label标签对PV选择过滤</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> <span class="token comment"># 存储类别，设置对应的class的PV才能被系统选出</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment"># 需要存储资源的请求</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 3Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h5><ul><li><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /opt/nfsdata/pv1
<span class="token function">mkdir</span> /opt/nfsdata/pv2
<span class="token function">chmod</span> <span class="token number">777</span> /opt/nfsdata/pv1
<span class="token function">chmod</span> <span class="token number">777</span> /opt/nfsdata/pv2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/exports
<span class="token comment">#暴露nfs服务</span>
/opt/nfsdata/pv1 <span class="token number">192.168</span>.0.0/24<span class="token punctuation">(</span>rw,insecure,sync<span class="token punctuation">)</span>
/opt/nfsdata/pv2 <span class="token number">192.168</span>.0.0/24<span class="token punctuation">(</span>rw,insecure,sync<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启nfs</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建两个PV,编辑<code>pv-1.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> xw<span class="token punctuation">-</span>pv1
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span> 
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.0.112
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /opt/nfsdata/pv1
    

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> xw<span class="token punctuation">-</span>pv2
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span> 
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 2Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.0.112
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /opt/nfsdata/pv2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 启动
kubectl apply -f pv-1.yaml

## 查看
kubectl get pv -o wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建PVC，使用<code>pvc.yaml</code> （与PV不同，PVC不属于集群资源，拥有自己的名称空间）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: xw-pvc1
  namespace: dev
spec:
  accessModes: 
  - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: xw-pvc2
  namespace: dev
spec:
  accessModes: 
  - ReadWriteMany
  resources:
    requests:
      storage: 3Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f pvc.yaml

## 查看PVC
kubectl get pvc -o wide -n dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="" loading="lazy"></p></li></ul><p>​ 可以看到xw-pvc1已经与pv1绑定，xw-pvc2没有绑定，因为没有符合要求的PV,当手动起了一个容量大小为3g的PV时，绑定成功。</p><p>​ <img src="'+t+`" alt="" loading="lazy"></p><ul><li><p>创建POD挂载pvc<code>pod-pvc.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod1
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;while true;do echo hello xdclass pod1 &gt;&gt; /opt/print.txt; sleep 5; done;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /opt/
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> volume
      <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
        <span class="token key atrule">claimName</span><span class="token punctuation">:</span> xw<span class="token punctuation">-</span>pvc2
        <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看日志，发现挂载成功</p><p><img src="`+p+'" alt="" loading="lazy"></p></li></ul>',50),o=[u];function d(r,v){return s(),a("div",null,o)}const b=n(c,[["render",d],["__file","1.k8s存储.html.vue"]]);export{b as default};
